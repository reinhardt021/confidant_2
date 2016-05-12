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

  protected

  def node_params
    params.require(:node).permit(:title, :node_type, :content)
  end
end
