class Donation < ApplicationRecord
   belongs_to :cause
   belongs_to :user 

   validates :amount, presence: true
   validates :amount, numericality: true
end
