require "test_helper"

class ParkingControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get parking_url
    assert_response :success
  end
end
