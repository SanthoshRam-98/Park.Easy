class Membership < ApplicationRecord
  belongs_to :user
  belongs_to :organization

  enum :role, { staff: 0, manager: 1, owner: 2 }, default: :staff

  validates :user_id, uniqueness: { scope: :organization_id }

  def can_manage?
    owner? || manager?
  end
end
