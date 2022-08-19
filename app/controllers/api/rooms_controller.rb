class Api::RoomsController < ApplicationController
    before_action :require_logged_in, only: [:index, :show]

  def index
    @rooms = Room.all
    render :index
  end

  def show
    @room = Room.find(params[:id])
  end


end
