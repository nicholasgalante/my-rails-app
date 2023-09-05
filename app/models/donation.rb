class Donation < ApplicationRecord
   belongs_to :cause
   belongs_to :user 

   validates :amount, presence: true
   validates :amount, presence: true, format: { with: /\A\d+(\.\d{1,2})?\z/, message: "should be in dollars and cents format (e.g., 25.00)" }
end
