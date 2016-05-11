class User < ActiveRecord::Base
  # has_many :friendships
  # has_many :confidants, :through => :friendships

  validates :first_name, 
    presence: true 
  validates :last_name, 
    presence: true 
  validates :username, 
    presence: true,
    uniqueness: true

end
