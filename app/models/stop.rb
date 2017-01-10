class Stop < ApplicationRecord
  geocoded_by :full_street_address   # can also be an IP address
  after_validation :geocode          # auto-fetch coordinates
  belongs_to :tour

end
