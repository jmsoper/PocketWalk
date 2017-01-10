class User < ApplicationRecord
  authenticates_with_sorcery!
  geocoded_by :location   # can also be an IP address
  after_validation :geocode          # auto-fetch coordinates
  has_many :tours

  validates :password, length: { minimum: 6 }, if: -> { new_record? || changes[:crypted_password] }
  validates :password, confirmation: true, if: -> { new_record? || changes[:crypted_password] }
  validates :password_confirmation, presence: true, if: -> { new_record? || changes[:crypted_password] }

  validates :email, uniqueness: true
end
