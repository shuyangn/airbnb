class Api::RoomsController < ApplicationController
    # before_action :require_logged_in, only: [:index, :show]

  def index
    rooms = Room.all

    if params[:maxGuest]
      rooms = rooms.where("max_guests > ?", params[:maxGuest])
    end
    @rooms = rooms

    render :index
  end

  def show
    @room = Room.find(params[:id])
  end

end
