json.extract! room, :id, :lat, :long, :description, :max_guests, :num_beds, :num_baths, :price, :city
json.image_urls room.image_urls || url_for(room.photo)