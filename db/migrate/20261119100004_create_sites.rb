class CreateSites < ActiveRecord::Migration[7.1]
  def change
    create_table :sites do |t|
      t.references :organization, null: false, foreign_key: true
      t.string :name, null: false
      t.string :address
      t.string :city, null: false
      t.decimal :latitude, precision: 10, scale: 7
      t.decimal :longitude, precision: 10, scale: 7
      t.integer :kind, null: false, default: 0
      t.integer :two_wheeler_capacity
      t.integer :four_wheeler_capacity
      t.string :time_zone, null: false, default: "Asia/Kolkata"
      t.timestamps
    end
    add_index :sites, :city
  end
end
