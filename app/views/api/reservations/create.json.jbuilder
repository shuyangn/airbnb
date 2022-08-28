json.reservation do 
    json.partial! "api/reservations/reservation", reservation: @reservation
end

 
json.user do 
    json.partial! "api/users/user", user: @user
end