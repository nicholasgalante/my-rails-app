class DonationSerializer < ActiveModel::Serializer
  attributes :id, :amount, :user_id, :cause_id

 # create custom method to render cause name
end
