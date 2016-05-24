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

  def destroy 
    @node = Node.find(params[:id])
    @node.destroy

    flash[:notice] = "Node #{@node.id} deleted from database"
    redirect_to root_path
  end

  def update_all
    updated = true

    params["ajaxNodes"].each do |key, node_data|
      # go into each node and update each value
      node = Node.find(key.to_i)
      # node.title
      # node.content
      # node.node_type
      node.position_x = node_data["x"]
      node.position_y = node_data["y"]
      # then save for each node
      updated = false if !node.save
    end

    if updated
      redirect_to action: "index", status: 303
    else
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
