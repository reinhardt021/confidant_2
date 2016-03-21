class CreateNodes < ActiveRecord::Migration
  def change
    create_table :nodes do |t|
      t.string :title
      t.string :node_type
      t.text :content

      t.timestamps null: false
    end
  end
end
