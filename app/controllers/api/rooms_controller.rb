class Api::RoomsController < ApplicationController
    before_action :require_logged_in, only: [:index, :show]

  def index
    rooms = Room.all

    if params[:minGuest] && params[:maxGuest]
      rooms = rooms.where("max_guests > ?", params[:maxGuest])
      # rooms = rooms.where(max_guests: guest_range)
    end
    @rooms = rooms

    render :index
  end

  def show
    @room = Room.find(params[:id])
  end

  private
  
  def guest_range
    (params[:minGuest]..params[:maxGuest])
  end
end
