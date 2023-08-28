class User < ApplicationRecord
   has_many :donations
   has_many :causes, through: :donations
end
