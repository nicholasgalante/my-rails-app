class CauseSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :school_name, :city, :state, :image_url, :goal
end
