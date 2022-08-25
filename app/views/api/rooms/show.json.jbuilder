json.extract! @room, :id, :lat, :long, :description, :max_guests, :num_beds, :num_baths, :price, :city, :country, :title
json.image_urls url_for(@room.photo)
