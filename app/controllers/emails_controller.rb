
class EmailsController < ApplicationController
  before_action :all_emails, only: [:index, :destroy]
  before_action :set_emails, only: [:destroy, :show]
  
  respond_to? :html, :js
 
  def index
    @emails = Email.order(1)
    puts @emails
  end
  
  def show
    @email = Email.find(params[:id])
    @email.read = true
    @email.save
  end
  
  def destroy
    @email = Email.destroy(params[:id])
    redirect_to emails_path
  end
  
  def update
    @email = Email.find(params[:id])
    @email.read = false
    @email.save
  end

  private
    def all_emails
      @email = Email.all
    end
  
    def set_emails
      @email = Email.find(params[:id])
    end
end

