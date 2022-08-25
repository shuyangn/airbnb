# == Schema Information
#
# Table name: reservations
#
#  id         :bigint           not null, primary key
#  num_guests :integer          not null
#  check_in   :date             not null
#  check_out  :date             not null
#  user_id    :integer          not null
#  room_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Reservation < ApplicationRecord
    validates :num_guests, :check_in, :check_out, :user_id, :room_id, presence: true
    
    belongs_to :user,
      primary_key: :id,
      foreign_key: :user_id,
      class_name: :User

    belongs_to :room,
      primary_key: :id,
      foreign_key: :room_id,
      class_name: :Room

end
