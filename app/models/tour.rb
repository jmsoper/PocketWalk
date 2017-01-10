class Tour < ApplicationRecord
  belongs_to :user
  has_many :stops
  attr_reader :tour_id
end
