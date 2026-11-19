class Site < ApplicationRecord
  belongs_to :organization
  has_many :rate_cards, dependent: :destroy
  has_many :parking_sessions, dependent: :restrict_with_error

  # operator_lot: staffed lot. event: temporary festival/market lot.
  # private_space: owner-priced space (future, cash on exit).
  enum :kind, { operator_lot: 0, event: 1, private_space: 2 }, default: :operator_lot

  validates :name, :city, presence: true
  validates :two_wheeler_capacity, :four_wheeler_capacity,
            numericality: { only_integer: true, greater_than_or_equal_to: 0 }, allow_nil: true
  validates :latitude, numericality: { greater_than_or_equal_to: -90, less_than_or_equal_to: 90 }, allow_nil: true
  validates :longitude, numericality: { greater_than_or_equal_to: -180, less_than_or_equal_to: 180 }, allow_nil: true
  validate :time_zone_must_exist

  scope :accessible_to, ->(user) { where(organization_id: user.memberships.select(:organization_id)) }

  # nil capacity means "not tracked".
  def capacity_for(vehicle_type)
    public_send("#{vehicle_type}_capacity")
  end

  def inside_count(vehicle_type)
    parking_sessions.active.where(vehicle_type: vehicle_type).count
  end

  def full_for?(vehicle_type)
    cap = capacity_for(vehicle_type)
    !cap.nil? && inside_count(vehicle_type) >= cap
  end

  # "Live" = the staff app recorded movement recently. This is what lets
  # the driver side say Live (operator-confirmed) instead of Listed (static).
  def live?(window = 30.minutes)
    since = window.ago
    parking_sessions.where("entered_at >= :t OR exited_at >= :t", t: since).exists?
  end

  def availability
    ParkingSession.vehicle_types.keys.index_with do |vt|
      cap = capacity_for(vt)
      inside = inside_count(vt)
      { capacity: cap, inside: inside, free: cap && [cap - inside, 0].max }
    end
  end

  private

  def time_zone_must_exist
    errors.add(:time_zone, "is not a valid time zone") unless ActiveSupport::TimeZone[time_zone]
  end
end
