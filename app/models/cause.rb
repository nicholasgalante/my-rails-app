class Cause < ApplicationRecord
   has_many :donations

   validates :title, :school_name, :city, presence: true
   validates :description, length: { minimum: 100, message: "must have at least 100 characters" }
   validates :state, length: { is: 2, "must be 2 characters" }
end
