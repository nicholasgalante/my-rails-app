class Cause < ApplicationRecord
   has_many :donations
   has_many :users, through: :donations

   validates :title, :school_name, :city, :goal, presence: true
   validates :goal, presence: true, format: { with: /\A\d+(\.\d{1,2})?\z/, message: "should be in dollars and cents format (e.g., 25.00)" }
   validates :description, length: { minimum: 75, message: "must have at least 75 characters" }
   validates :state, length: { is: 2, message: "must be 2 characters" }
end
