module Fees
  # Pure fee rule (no database access). Money is integer paise.
  #
  #   minutes      = whole minutes parked (rounded up)
  #   billable     = max(0, minutes - grace_minutes)
  #   units        = ceil(billable / unit length)       # part unit = full unit
  #   fee          = units * rate
  #
  # Hourly cards with a daily cap bill each full 24h at the cap, and the
  # remainder at the normal rate, never above the cap.
  class Calculator
    MINUTES_PER_DAY = 1_440

    def self.call(**args)
      new(**args).call
    end

    def initialize(rate_card:, entered_at:, exited_at:)
      @card = rate_card
      @entered_at = entered_at
      @exited_at = exited_at
    end

    def call
      raise ArgumentError, "exit is before entry" if @exited_at < @entered_at

      billable = [minutes_parked - @card.grace_minutes, 0].max
      return 0 if billable.zero?

      cap = @card.daily_cap_paise
      if cap && @card.hourly?
        days, rest = billable.divmod(MINUTES_PER_DAY)
        days * cap + [units(rest) * @card.rate_paise, cap].min
      else
        units(billable) * @card.rate_paise
      end
    end

    private

    def minutes_parked
      ((@exited_at - @entered_at) / 60.0).ceil
    end

    def units(minutes)
      (minutes + @card.unit_minutes - 1) / @card.unit_minutes
    end
  end
end
