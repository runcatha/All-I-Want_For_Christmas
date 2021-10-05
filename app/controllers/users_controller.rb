class UsersController < ApplicationController
# POST /users
  def create
    @user = User.new(user_params)
    
    if @user.save
      @token = encode({ id: @user.id })
      render json: {
        user: @user.attributes.except("password_digest"),
        token: @token
      }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :password, :image)
  end

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # # GET /users/1
  # def show
  #   render json: @user, include: :gruops
  # end

  # # POST /users
  # def create
  #   @user = User.new(user_params)
  #   @user.user = @current_user

  #   if @user.save
  #     render json: @user, status: :created
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  # # PATCH/PUT /users/1
  # def update
  #   if @user.update(user_params)
  #     render json: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /foods/1
  # def destroy
  #   @user.destroy
  # end

  # # adding user to group method goes here
  # def add_user_to_group
  #   @group = Group.find(params[:id])
  #   @user = User.find(params[:flavor_id])

  #   @food.flavors << @flavor

  #   render json: @food, include: :flavors
  # end

#   private
#     # Use callbacks to share common setup or constraints between actions.
#     def set_food
#       @food = Food.find(params[:id])
#     end

#     # Only allow a list of trusted parameters through.
#     def food_params
#       params.require(:food).permit(:name)
#     end
# end
end
