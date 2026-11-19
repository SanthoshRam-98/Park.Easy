require "test_helper"

class ParkingSessionTest < ActiveSupport::TestCase
  setup do
    @user = User.create!(email: "staff@example.com", password: "password123")
    org = Organization.create!(name: "Test Co")
    @site = org.sites.create!(name: "Lot", city: "Madurai", two_wheeler_capacity: 1)
    @rate = @site.rate_cards.create!(vehicle_type: :two_wheeler, rate_paise: 1_000, grace_minutes: 10)
  end

  def enter(plate = "TN 58 AB 1234", uuid = SecureRandom.uuid)
    @site.parking_sessions.create!(client_uuid: uuid, vehicle_number: plate, vehicle_type: :two_wheeler,
                                   rate_card: @rate, entered_by: @user, entered_at: 2.hours.ago)
  end

  test "plate is normalized and ticket code assigned" do
    s = enter
    assert_equal "TN58AB1234", s.vehicle_number
    assert_equal 8, s.ticket_code.length
  end

  test "same plate cannot be inside twice" do
    enter
    assert_raises(ActiveRecord::RecordNotUnique) { enter("TN58AB1234") }
  end

  test "close computes the fee and a second close changes nothing" do
    s = enter
    s.close!(by: @user, payment_method: :cash)
    paid = s.amount_paise
    assert s.closed?
    assert_equal 2_000, paid # 120 min - 10 grace = 110 -> 2 hourly units at 1000 = 2000
    s.close!(by: @user, payment_method: :upi)
    assert_equal paid, s.reload.amount_paise
    assert s.payment_method_cash?
  end

  test "plate can re-enter after exit" do
    enter.close!(by: @user, payment_method: :cash)
    assert_nothing_raised { enter("TN58AB1234") }
  end

  test "site reports availability" do
    enter
    assert @site.full_for?(:two_wheeler)
    assert_equal 0, @site.availability["two_wheeler"][:free]
  end
end
