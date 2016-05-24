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

  def update_all
    puts ">>>> params[ajaxNodes] >>>>"
    puts params["ajaxNodes"]

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

    puts Node.all
    # {
    #   "1"=>{
    #     "id"=>"1", 
    #     "title"=>"wake", 
    #     "content"=>"slowly get out of bed", 
    #     "type"=>"action", 
    #     "x"=>"-1", 
    #     "y"=>"-1"
    #   }, ...
    # }

    # @node = Node.find(params[:id])

    # the following line appears to be unable to find the :node
    #  thought it was an issue of the validations which i commented out
    #  still doesn't work and not sure why

    if updated
    # if @node.update_attributes(node_params)
    #   # might have to get rid of this is doing AJAX calls
      # redirect_to root_path 
      # redirect_to :action => :index
      redirect_to action: "index", status: 303
      # redirect_to nodes_path, notice: "nodes were updated successfully!"
    else
    #   # same here
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
