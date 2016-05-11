class FriendshipsController < ApplicationController

  def create
    @friendship = Friendship.new(params[:friendship])
    if @friendship.save
      flash[:notice] = "Successfully created friendship."
      redirect_to root_url
    else
      flash[:error] = "Unable to add friendship."
      render :action => 'new'
    end
  end

  def destroy
    @friendship = Friendship.find(params[:id])
    @friendship.destroy
    flash[:notice] = "Successfully destroyed friendship."
    redirect_to root_url
  end

end
