# Rate cards are versioned: never edit a rate, add a new row with a later
# effective_from. Sessions keep a reference to the card used at entry.
class RateCard < ApplicationRecord
  include VehicleTyped

  UNIT_MINUTES = { "hourly" => 60, "daily" => 1_440, "weekly" => 10_080, "monthly" => 43_200 }.freeze

  belongs_to :site

  enum :billing_unit, { hourly: 0, daily: 1, weekly: 2, monthly: 3 }, default: :hourly

  before_validation { self.effective_from ||= Time.current }

  validates :rate_paise, numericality: { only_integer: true, greater_than: 0 }
  validates :grace_minutes, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :daily_cap_paise, numericality: { only_integer: true, greater_than: 0 }, allow_nil: true
  validate :cap_only_for_hourly

  scope :in_effect, ->(site, vehicle_type, at = Time.current) {
    where(site: site, vehicle_type: vehicle_type).where("effective_from <= ?", at).order(effective_from: :desc)
  }

  def unit_minutes
    UNIT_MINUTES.fetch(billing_unit)
  end

  private

  def cap_only_for_hourly
    errors.add(:daily_cap_paise, "only applies to hourly rates") if daily_cap_paise && !hourly?
  end
end
