class Tour < ApplicationRecord
  belongs_to :user
  has_many :stops, :dependent => :destroy
  geocoded_by :location   # can also be an IP address
  after_validation :geocode          # auto-fetch coordinates
  attr_reader :tour_id
end
