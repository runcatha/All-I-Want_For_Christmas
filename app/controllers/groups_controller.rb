class GroupsController < ApplicationController
  before_action :set_group, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy] 

  # GET /groups
  def index
    @groups = Group.all

    render json: @groups
  end

  # GET /groups/1
  def show
    render json: @group, include :users
  end

  # POST /groups
  def create
    @group = Group.new(group_params)
    @group.user = @current_user

    if @group.save
      render json: @group, status: :created
    else
      render json: @group.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /groups/1
  def update
    if @group.update(group_params)
      render json: @group
    else
      render json: @group.errors, status: :unprocessable_entity
    end
  end

  # DELETE /groups/1
  def destroy
    @group.destroy
  end

  # adding user to group method goes here
  def add_user_to_group
    @group = Group.find(params[:id])
    @user = User.find(params[:user_id])

    @group.users << @user

    render json: @group, include: :users
  end

  private
  # Use callbacks to share common setup or constraints between actions
  def set_group
    @group = Group.find(params[:id])
  end

  # Only allow a list of trusted parameters through
  def group_params
    params.require(:group).permit(:name)
  end
end
