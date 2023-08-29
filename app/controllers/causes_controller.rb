class CausesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

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

  def destroy
   cause = Cause.find(params[:id])
   cause.destroy
   render json: {}, status: :no_content
  end

  private

  def cause_params
    params.permit(:title, :description, :school_name, :city, :state, :image_url)
  end

  def render_invalid_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: { error: "Record not found" }
  end
end
