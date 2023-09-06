class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    if @current_user
      render json: @current_user
    else
      render json: { errors: ["Please sign in."] }, status: :unauthorized
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :email_address)
  end
end
