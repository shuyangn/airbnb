@rooms.each do |room|
 json.set! room.id do 
    json.extract! room, :id, :lat, :long, :description, :max_guests, :num_beds, :num_baths, :price, :city, :country, :title, :reservation_ids
    json.image_urls room.photo.map { |p| url_for(p) }
   #  json.image_urls room.photo.attached? ? url_for(room.photo) : ''
 end
end