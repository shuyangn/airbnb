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
require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
