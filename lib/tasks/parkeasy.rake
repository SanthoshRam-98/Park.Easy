namespace :parkeasy do
  desc "Create a demo organization, site, rate cards and owner login (development only)"
  task demo: :environment do
    abort "Development only." unless Rails.env.development?

    password = SecureRandom.alphanumeric(14)
    user = User.find_or_initialize_by(email: "owner@parkeasy.test")
    user.password = password
    user.name = "Demo Owner"
    user.save!

    org = Organization.find_or_create_by!(name: "Demo Parking Co")
    Membership.find_or_create_by!(user: user, organization: org) { |m| m.role = :owner }

    site = org.sites.find_or_create_by!(name: "Demo Lot") do |s|
      s.city = "Madurai"
      s.address = "Near the temple, East Masi Street"
      s.two_wheeler_capacity = 40
      s.four_wheeler_capacity = 15
    end
    if site.rate_cards.none?
      site.rate_cards.create!(vehicle_type: :two_wheeler, rate_paise: 1_000, grace_minutes: 10, daily_cap_paise: 6_000)
      site.rate_cards.create!(vehicle_type: :four_wheeler, rate_paise: 2_000, grace_minutes: 10, daily_cap_paise: 15_000)
    end

    puts "Demo ready. Site id #{site.id}. Login: owner@parkeasy.test / #{password}"
  end
end
