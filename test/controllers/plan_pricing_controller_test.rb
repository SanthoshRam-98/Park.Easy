require "test_helper"

class PlanPricingControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get plan_pricing_index_url
    assert_response :success
  end
end
