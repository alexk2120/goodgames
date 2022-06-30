class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :release_date, :developer, :description, :star_rating
end
