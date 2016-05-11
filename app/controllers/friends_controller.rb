class FriendsController < ApplicationController
  # def index
  #   @friends = Friend.all
  #   @friend = Friend.new
  # end

  def destroy
    @friend = Friend.find(params[:id])
    @friend.destroy

    flash[:notice] = "#{@friend.username} deleted from database"
    redirect_to friends_path
  end

end
