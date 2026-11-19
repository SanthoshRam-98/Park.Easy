require "test_helper"

class ListYourSpaceControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get list_space_url
    assert_response :success
  end
end
