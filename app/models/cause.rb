class Cause < ApplicationRecord
   has_many :donations
   has_many :users, through: :donations

   validates :title, :school_name, :city, :goal, presence: true
   validates :goal, numericality: true
   validates :description, length: { minimum: 75, message: "must have at least 75 characters" }
   validates :state, length: { is: 2, message: "must be 2 characters" }
end
