class Tour < ApplicationRecord
  belongs_to :user
  has_many :stops, :dependent => :destroy
  attr_reader :tour_id
end
