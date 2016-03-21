class NodesController < ApplicationController
  def index
    @nodes = Node.all
    @node = Node.new
  end

end
