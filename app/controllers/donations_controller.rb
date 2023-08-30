class DonationsController < ApplicationController

  def index
    donations = Donation.all
    render json: donations, status: :ok
  end

  def show
    donation = Donation.find(params[:id])
    render json: donation, status: :ok
  end

  def create
    donation = Donation.create!(donation_params)
    render json: donation, status: :created
  end

  def update
    donation = Donation.find(params[:id])
    donation.update(donation_params)
    render json: donation, status: :ok
  end

  def destroy
    donation = Donation.find(params[:id])
    donation.destroy
    render json: {}, status: :no_content
  end

  private

  def donation_params
    params.permit(:amount, :cause_id, :user_id)
  end
end
