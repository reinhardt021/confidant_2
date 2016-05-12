class AddPositionsToNodes < ActiveRecord::Migration
  def change
    add_column :nodes, :position_x, :decimal
    add_column :nodes, :position_y, :decimal
  end
end
