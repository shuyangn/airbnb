json.extract! @room, :id, :lat, :long, :description, :max_guests, :num_beds, :num_baths, :price, :city, :country, :title
json.image_urls @room.photo.map { |p| url_for(p) }

# json.image_urls url_for(@room.photo)

# json.set! @room.id do 
#     json.extract! @room, :id, :lat, :long, :description, :max_guests, :num_beds, :num_baths, :price, :city, :country, :title
#     json.image_urls @room.photo.map { |p| url_for(p) }
#  end


json.reservations do
    @room.reservations.each do |reservation|
        json.set! reservation.id do
            json.extract! reservation, :id, :room_id, :user_id, :num_guests, :check_in, :check_out
        end
    end
end
