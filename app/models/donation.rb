class Donation < ApplicationRecord
   belongs_to :cause 

   validates :amount, presence: true
   validates :amount, numericality: true
end
