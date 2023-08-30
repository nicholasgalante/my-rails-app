class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  private

  def render_invalid_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: { error: "Record not found" }
  end
end
