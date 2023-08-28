class Cause < ApplicationRecord
   has_many :donations

   validates :title, :school_name, :city, presence: true
   validates :description, length: { minimum: 75, message: "must have at least 75 characters" }
   validates :state, length: { is: 2, message: "must be 2 characters" }
end
