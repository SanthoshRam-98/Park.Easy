class CreateParkingSessions < ActiveRecord::Migration[7.1]
  def change
    create_table :parking_sessions do |t|
      t.references :site, null: false, foreign_key: true
      t.references :rate_card, null: false, foreign_key: true
      t.references :entered_by, null: false, foreign_key: { to_table: :users }
      t.references :exited_by, foreign_key: { to_table: :users }
      t.string :client_uuid, null: false
      t.string :ticket_code, null: false
      t.string :vehicle_number, null: false
      t.integer :vehicle_type, null: false
      t.integer :status, null: false, default: 0
      t.datetime :entered_at, null: false
      t.datetime :exited_at
      t.integer :amount_paise
      t.integer :payment_method
      t.datetime :paid_at
      t.timestamps
    end
    add_index :parking_sessions, :client_uuid, unique: true
    add_index :parking_sessions, :ticket_code, unique: true
    add_index :parking_sessions, %i[site_id status]
    add_index :parking_sessions, %i[site_id vehicle_number], unique: true, where: "status = 0", name: "idx_one_active_session_per_plate"
  end
end
