class Api::RoomsController < ApplicationController
    # before_action :require_logged_in, only: [:index, :show]

  def index

    if params[:maxGuest]
      @rooms = Room.includes(:reservations).where("max_guests >= ?", params[:maxGuest])
    else 
      @rooms = Room.includes(:reservations).all
    end

    render :index
  end

  def show
    @room = Room.includes(:reservations).find(params[:id])
    @reservations = @room.reservations
    render :show
  end

end
