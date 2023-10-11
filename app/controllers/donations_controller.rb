class DonationsController < ApplicationController

  def index
    donations = Donation.all
    render json: donations, status: :ok
  end

  def mydonations
    donations = @current_user.donations
    render json: donations, status: :ok
  end

  def show
    donation = Donation.find(params[:id])
    render json: donation, status: :ok
  end

  def create
    user_id = session[:user_id]
    donation = Donation.create!(user_id: user_id, amount: params[:amount], cause_id: params[:cause_id])
    render json: donation, status: :created
  end

  def update
    donation = @current_user.donations.find(params[:id])
    if donation
      donation.update(donation_params)
      render json: donation, status: :ok
    else
      render json: { error: "Donation doesn't exist or belong to user." }
    end
  end

  def destroy
    donation = @current_user.donations.find(params[:id])
    donation.destroy
    render json: {}, status: :no_content
  end

  private

  def donation_params
    params.require(:donation).permit(:amount)
  end
end
