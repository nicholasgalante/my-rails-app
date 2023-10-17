class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email_address, :causes
  has_many :donations
end
