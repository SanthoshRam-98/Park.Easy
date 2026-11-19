require "test_helper"

module Fees
  class CalculatorTest < ActiveSupport::TestCase
    T0 = Time.utc(2026, 11, 19, 8, 0, 0)

    def card(**attrs)
      RateCard.new({ billing_unit: :hourly, rate_paise: 2_000, grace_minutes: 10 }.merge(attrs))
    end

    def fee(card, minutes)
      Calculator.call(rate_card: card, entered_at: T0, exited_at: T0 + minutes * 60)
    end

    test "inside grace is free" do
      assert_equal 0, fee(card, 10)
    end

    test "just over grace bills one full unit" do
      assert_equal 2_000, fee(card, 11)
    end

    test "grace applies once, then part units round up" do
      assert_equal 2_000, fee(card, 70)   # 60 billable -> 1 unit
      assert_equal 4_000, fee(card, 71)   # 61 billable -> 2 units
    end

    test "seconds round up to the next minute" do
      assert_equal 2_000, Calculator.call(rate_card: card, entered_at: T0, exited_at: T0 + 10 * 60 + 1)
    end

    test "daily cap limits one day" do
      assert_equal 5_000, fee(card(daily_cap_paise: 5_000), 600)
    end

    test "cap bills each full day then the remainder" do
      c = card(grace_minutes: 0, daily_cap_paise: 5_000)
      assert_equal 5_000 + 2_000, fee(c, 1_440 + 60)
    end

    test "daily and monthly units" do
      assert_equal 3 * 15_000, fee(card(billing_unit: :daily, rate_paise: 15_000, grace_minutes: 0), 2 * 1_440 + 1)
      assert_equal 300_000, fee(card(billing_unit: :monthly, rate_paise: 300_000, grace_minutes: 0), 30 * 1_440)
    end

    test "exit before entry is rejected" do
      assert_raises(ArgumentError) { Calculator.call(rate_card: card, entered_at: T0, exited_at: T0 - 60) }
    end
  end
end
