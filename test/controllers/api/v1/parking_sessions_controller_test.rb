require "test_helper"

class Api::V1::ParkingSessionsControllerTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers

  setup do
    @staff = User.create!(email: "staff@example.com", password: "password123")
    @org = Organization.create!(name: "Test Co")
    Membership.create!(user: @staff, organization: @org, role: :staff)
    @site = @org.sites.create!(name: "Lot", city: "Madurai", two_wheeler_capacity: 2)
    @site.rate_cards.create!(vehicle_type: :two_wheeler, rate_paise: 1_000, grace_minutes: 10)
    @base = "/api/v1/sites/#{@site.id}/parking_sessions"
  end

  def enter(uuid: SecureRandom.uuid, plate: "TN58AB1234")
    post @base, params: { client_uuid: uuid, vehicle_number: plate, vehicle_type: "two_wheeler" }
  end

  test "requires login" do
    enter
    assert_response :unauthorized
  end

  test "entry creates a ticket and replaying the same uuid returns it" do
    sign_in @staff
    uuid = SecureRandom.uuid
    enter(uuid: uuid)
    assert_response :created
    code = response.parsed_body["ticket_code"]
    enter(uuid: uuid)
    assert_response :ok
    assert_equal code, response.parsed_body["ticket_code"]
    assert_equal 1, ParkingSession.count
  end

  test "duplicate plate is rejected with 409" do
    sign_in @staff
    enter
    enter(plate: "TN58AB1234")
    assert_response :conflict
  end

  test "full site is rejected" do
    sign_in @staff
    enter(plate: "TN58AB0001")
    enter(plate: "TN58AB0002")
    enter(plate: "TN58AB0003")
    assert_response :conflict
  end

  test "checkout closes once and is idempotent" do
    sign_in @staff
    enter
    code = response.parsed_body["ticket_code"]
    patch "#{@base}/#{code}/checkout", params: { payment_method: "cash" }
    assert_response :ok
    assert_equal "closed", response.parsed_body["status"]
    patch "#{@base}/#{code}/checkout", params: { payment_method: "upi" }
    assert_equal "cash", response.parsed_body["payment_method"]
  end

  test "another organization's site looks like it does not exist" do
    other = User.create!(email: "other@example.com", password: "password123")
    sign_in other
    get @base
    assert_response :not_found
  end
end
