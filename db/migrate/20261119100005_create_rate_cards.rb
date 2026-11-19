class CreateRateCards < ActiveRecord::Migration[7.1]
  def change
    create_table :rate_cards do |t|
      t.references :site, null: false, foreign_key: true
      t.integer :vehicle_type, null: false
      t.integer :billing_unit, null: false, default: 0
      t.integer :rate_paise, null: false
      t.integer :grace_minutes, null: false, default: 0
      t.integer :daily_cap_paise
      t.datetime :effective_from, null: false
      t.timestamps
    end
    add_index :rate_cards, %i[site_id vehicle_type effective_from]
  end
end
