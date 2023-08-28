class DonationsController < ApplicationController
   def index
      donations = Donation.all
      render json: donations, status: :ok
   end
end
