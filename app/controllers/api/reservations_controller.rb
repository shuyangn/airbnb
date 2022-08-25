class Api::ReservationsController < ApplicationController

    def index
        params[:user_id] ? @reservations = Reservation.includes(:room).where(user_id: params[:user_id].to_i).order(check_in: :asc) : Reservation.all
    end

    def show
        @reservation = Reservation.find(params[:id])
        render :show
    end

    def create
        @reservation = Reservation.new(reservation_params)
        # @reservation.check_in = Date
    end


    def reservation_params
        params.require(:reservation).permit(:user_id, :room_id, :num_guests, :check_in, :check_out)
    end

end
