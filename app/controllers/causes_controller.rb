class CausesController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    causes = Cause.all
    render json: causes, status: :ok
  end

  def show
    cause = Cause.find(params[:id])
    render json: cause, status: :ok
  end

  def create
    cause = Cause.create!(cause_params)
    render json: cause, status: :created
  end

  def update
    cause = Cause.find(params[:id])
    cause.update(cause_params)
    render json: cause, status: :ok
  end

  def destroy
   cause = Cause.find(params[:id])
   cause.destroy
   render json: {}, status: :no_content
  end

  private

  def cause_params
    params.require(:cause).permit(:title, :description, :goal, :school_name, :city, :state, :image_url)
  end

end
