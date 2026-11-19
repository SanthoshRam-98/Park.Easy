# Shared vehicle types. Two-wheelers come first on purpose (see strategy).
module VehicleTyped
  extend ActiveSupport::Concern

  included do
    enum :vehicle_type, { two_wheeler: 0, four_wheeler: 1 }
    validates :vehicle_type, presence: true
  end
end
