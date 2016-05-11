# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(first_name: 'Reinhardt', last_name: 'Rein', username: 'reinhardt')
User.create(first_name: 'Zaheer', last_name: 'Laghima', username: 'zlaghima')
User.create(first_name: 'Jake', last_name: 'Sully', username: 'jsully')

Node.create(title: 'wake', node_type: 'action', content: 'slowly get out of bed')
Node.create(title: 'eat', node_type: 'action', content: 'eggs lentils veggies')
Node.create(title: 'exercise', node_type: 'action', content: 'stretch push-ups legs kbs')
Node.create(title: 'shower', node_type: 'action', content: 'hot warm cold')