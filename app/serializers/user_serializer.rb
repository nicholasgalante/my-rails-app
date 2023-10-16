class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email_address, :password_digest, :donations, :causes
end
