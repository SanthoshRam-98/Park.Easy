# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2026_11_19_100006) do
  create_table "memberships", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "organization_id", null: false
    t.integer "role", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["organization_id"], name: "index_memberships_on_organization_id"
    t.index ["user_id", "organization_id"], name: "index_memberships_on_user_id_and_organization_id", unique: true
    t.index ["user_id"], name: "index_memberships_on_user_id"
  end

  create_table "organizations", force: :cascade do |t|
    t.string "name", null: false
    t.string "slug", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_organizations_on_slug", unique: true
  end

  create_table "parking_sessions", force: :cascade do |t|
    t.integer "site_id", null: false
    t.integer "rate_card_id", null: false
    t.integer "entered_by_id", null: false
    t.integer "exited_by_id"
    t.string "client_uuid", null: false
    t.string "ticket_code", null: false
    t.string "vehicle_number", null: false
    t.integer "vehicle_type", null: false
    t.integer "status", default: 0, null: false
    t.datetime "entered_at", null: false
    t.datetime "exited_at"
    t.integer "amount_paise"
    t.integer "payment_method"
    t.datetime "paid_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_uuid"], name: "index_parking_sessions_on_client_uuid", unique: true
    t.index ["entered_by_id"], name: "index_parking_sessions_on_entered_by_id"
    t.index ["exited_by_id"], name: "index_parking_sessions_on_exited_by_id"
    t.index ["rate_card_id"], name: "index_parking_sessions_on_rate_card_id"
    t.index ["site_id", "status"], name: "index_parking_sessions_on_site_id_and_status"
    t.index ["site_id", "vehicle_number"], name: "idx_one_active_session_per_plate", unique: true, where: "status = 0"
    t.index ["site_id"], name: "index_parking_sessions_on_site_id"
    t.index ["ticket_code"], name: "index_parking_sessions_on_ticket_code", unique: true
  end

  create_table "rate_cards", force: :cascade do |t|
    t.integer "site_id", null: false
    t.integer "vehicle_type", null: false
    t.integer "billing_unit", default: 0, null: false
    t.integer "rate_paise", null: false
    t.integer "grace_minutes", default: 0, null: false
    t.integer "daily_cap_paise"
    t.datetime "effective_from", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["site_id", "vehicle_type", "effective_from"], name: "idx_on_site_id_vehicle_type_effective_from_9506005e27"
    t.index ["site_id"], name: "index_rate_cards_on_site_id"
  end

  create_table "sites", force: :cascade do |t|
    t.integer "organization_id", null: false
    t.string "name", null: false
    t.string "address"
    t.string "city", null: false
    t.decimal "latitude", precision: 10, scale: 7
    t.decimal "longitude", precision: 10, scale: 7
    t.integer "kind", default: 0, null: false
    t.integer "two_wheeler_capacity"
    t.integer "four_wheeler_capacity"
    t.string "time_zone", default: "Asia/Kolkata", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["city"], name: "index_sites_on_city"
    t.index ["organization_id"], name: "index_sites_on_organization_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "phone"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["phone"], name: "index_users_on_phone", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "memberships", "organizations"
  add_foreign_key "memberships", "users"
  add_foreign_key "parking_sessions", "rate_cards"
  add_foreign_key "parking_sessions", "sites"
  add_foreign_key "parking_sessions", "users", column: "entered_by_id"
  add_foreign_key "parking_sessions", "users", column: "exited_by_id"
  add_foreign_key "rate_cards", "sites"
  add_foreign_key "sites", "organizations"
end
