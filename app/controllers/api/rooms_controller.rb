class Api::RoomsController < ApplicationController
    # before_action :require_logged_in, only: [:index, :show]

  def index

    if params[:maxGuest]
      @rooms = Room.where("max_guests > ?", params[:maxGuest])
    else 
      @rooms = Room.all
    end

    render :index
  end

  def show
    @room = Room.find(params[:id])
  end

end
