class NodesController < ApplicationController
  def index
    @nodes = Node.all
    @node = Node.new
  end

  def create
    @node = Node.new(node_params)

    if @node.save
      redirect_to nodes_path, notice: "#{@node.title} was submitted successfully!"
    else
      render :index
    end
  end

  def update
    @node = Node.find(params[:id])

    # the following line appears to be unable to find the :node
    #  thought it was an issue of the validations which i commented out
    #  still doesn't work and not sure why
    if @node.update_attributes(node_params)
      # might have to get rid of this is doing AJAX calls
      redirect_to nodes_path(@node), notice: "#{@node.title} was updated successfully!"
    else
      # same here
      render :index
    end
  end

  protected

  def node_params
    # [_] issue is that this :node is not being found
      # not sure where it is looking to get this :node object
    params.require(:node).permit(:title, :node_type, :content, :position_x, :position_y)
  end
end
