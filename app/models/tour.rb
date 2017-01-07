class Tour < ApplicationRecord
  belongs_to :user
  attr_reader :tour_id
end
