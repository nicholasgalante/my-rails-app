class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  before_action :authorize

  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["Login to view this content!"] }, status: :unauthorized unless @current_user
  end

  private

  def render_invalid_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: { error: "Record not found" }
  end
end
