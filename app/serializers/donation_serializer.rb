class DonationSerializer < ActiveModel::Serializer
  attributes :id, :amount, :user_id, :cause_id
end
