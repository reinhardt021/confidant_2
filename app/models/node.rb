class Node < ActiveRecord::Base

  validates :title, 
    presence: true 
  validates :node_type, 
    presence: true 
  validates :content, 
    presence: true
  
end
