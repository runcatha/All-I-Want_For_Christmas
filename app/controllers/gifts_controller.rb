class GiftsController < ApplicationController
  before_action :set_gift, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy] 

  # GET /gifts
  def index
    @gifts = Gift.all

    render json: @gifts
  end

  # GET /groups/1
  def show
    render json: @gift 
  end

  # POST /groups
  def create
    @gift = Gift.new(gift_params)
    @gift.user = @current_user

    if @gift.save
      render json: @gift, status: :created
    else
      render json: @gift.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /groups/1
  def update
    if @gift.update(gift_params)
      render json: @gift
    else
      render json: @gift.errors, status: :unprocessable_entity
    end
  end

  # DELETE /groups/1
  def destroy
    @gift.destroy
  end


  private
  # Use callbacks to share common setup or constraints between actions
  def set_gift
    @gift = Gift.find(params[:id])
  end

  # Only allow a list of trusted parameters through
  def gift_params
    params.require(:gift).permit(:name)
  end
end
