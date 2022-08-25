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
require 'test_helper'

class RoomTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
