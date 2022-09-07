class Api::ReservationsController < ApplicationController

    def index
        params[:user_id] ? @reservations = Reservation.where(user_id: params[:user_id].to_i) : Reservation.all
    end

    def show
        @reservation = Reservation.find(params[:id])
        render :show
    end

    def create
        @reservation = Reservation.new(reservation_params)
        @reservation.check_in = DateTime.strptime(reservation_params[:check_in], '%m/%d/%Y')
        @reservation.check_out = DateTime.strptime(reservation_params[:check_out], '%m/%d/%Y')

        @reservation.user_id = current_user.id
        @reservation.room_id = params[:room_id]


        if @reservation.save
            @user = @reservation.user
            render :create
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def update
        @reservation = Reservation.find(params[:id])
        if @reservation.save(reservation_params)
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def destroy
        @reservation = Reservation.find(params[:id])
        @reservation.destroy
        render :show
    end


    def reservation_params
        params.require(:reservation).permit(:user_id, :room_id, :num_guests, :check_in, :check_out)
    end

end
