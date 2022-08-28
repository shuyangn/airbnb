json.reservations do
    @reservations.each do |reservation|
        json.set! reservation.id do 
            json.partial! 'api/reservations/reservation', reservation: reservation
        end
    end
end

json.rooms do
    @rooms.each do |room|
        json.set! room.id do
            json.extract! room, :id, :lat, :long, :description, :max_guests, :num_beds, :num_baths, :price, :city, :country, :title
        end
    end
end