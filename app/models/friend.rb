class Friend < ActiveRecord::Base
  validates :first_name, 
    presence: true 
  validates :last_name, 
    presence: true 
  validates :username, 
    presence: true,
    uniqueness: true

end
