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
#  image_urls  :string           default([]), is an Array
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class RoomTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
