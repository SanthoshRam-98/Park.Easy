# One vehicle's stay: entry -> exit -> payment. This is the QR ticket.
class ParkingSession < ApplicationRecord
  include VehicleTyped

  belongs_to :site
  belongs_to :rate_card
  belongs_to :entered_by, class_name: "User"
  belongs_to :exited_by, class_name: "User", optional: true

  enum :status, { active: 0, closed: 1, void: 2 }, default: :active
  enum :payment_method, { cash: 0, upi: 1, pending: 2 }, prefix: true

  before_validation :normalize_plate
  before_validation :assign_ticket_code, on: :create

  validates :client_uuid, presence: true, uniqueness: true
  validates :ticket_code, presence: true, uniqueness: true
  validates :vehicle_number, presence: true, length: { in: 4..12 }
  validates :entered_at, presence: true

  def to_param
    ticket_code
  end

  def quote_paise(at = Time.current)
    Fees::Calculator.call(rate_card: rate_card, entered_at: entered_at, exited_at: at)
  end

  # Idempotent: closing an already closed session returns it unchanged, so an
  # offline app can safely retry.
  def close!(by:, payment_method:, at: Time.current)
    with_lock do
      return self unless active?

      update!(
        status: :closed, exited_at: at, exited_by: by,
        amount_paise: quote_paise(at), payment_method: payment_method,
        paid_at: payment_method.to_s == "pending" ? nil : at
      )
    end
    self
  end

  private

  def normalize_plate
    self.vehicle_number = vehicle_number.to_s.upcase.gsub(/[^A-Z0-9]/, "")
  end

  def assign_ticket_code
    self.ticket_code ||= SecureRandom.alphanumeric(8).upcase
  end
end
