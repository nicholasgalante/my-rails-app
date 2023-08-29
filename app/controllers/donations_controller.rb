class DonationsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    donations = Donation.all
    render json: donations, status: :ok
  end

  def show
    donation = Donation.find(params[:id])
    render json: donation, status: :ok
  end

  private

  def donation_params
    params.permit(:amount)
  end

  def render_not_found_response
    render json: { error: "Record not found" }
  end
end
