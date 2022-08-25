# == Schema Information
#
# Table name: rooms
#
#  id          :bigint           not null, primary key
#  lat         :float            not null
#  long        :float            not null
#  description :text             not null
#  max_guests  :integer          not null
#  num_beds    :integer          not null
#  num_baths   :integer          not null
#  price       :integer          not null
#  city        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  country     :string           not null
#  title       :string           not null
#
class Room < ApplicationRecord
    validates :lat, :long, :description, :max_guests, :num_beds, :num_baths, :price, :city, :country, :title, presence: true

    has_many_attached :photo, dependent: :destroy

    has_many :reservations,
     primary_key: :id,
     foreign_key: :room_id,
     class_name: :Reservation
end
