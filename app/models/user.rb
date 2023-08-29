class User < ApplicationRecord
   has_secure_password
   
   has_many :donations
   has_many :causes, through: :donations

   validates :username, :email_address, presence: true
   validates :password, presence: true, length: { minimum: 6 }, allow_nil: true
end
