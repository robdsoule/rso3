# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
p = Post.new(title: 'My first post!', author: 'Rob Soule')
p.contents = <<EOF
Writing some stuffs trying for react and stuff.
EOF

p.save


p = Post.new(title: 'Guest post', author: 'John Doe')
p.contents = <<EOF
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit justo iaculis lorem feugiat malesuada. Sed bibendum iaculis arcu, quis ultricies sem pellentesque at. Fusce lobortis tincidunt risus, vel mollis leo. Sed tempus placerat eleifend. Ut dictum gravida magna, nec viverra felis varius eu. Curabitur molestie non tortor et eleifend. Sed bibendum tincidunt purus, nec euismod dolor congue id. Nam eleifend, eros ut rutrum posuere, turpis metus condimentum purus, in tincidunt justo neque at turpis. Praesent ut egestas elit. Donec bibendum pretium justo vitae suscipit. Donec nec lacus eleifend tellus porttitor malesuada.
EOF

p.save

p = Post.new(title: 'Closing my blog... :(', author: 'Rob Soule')
p.contents = <<EOF
NOT REALLY :DDDD
EOF

p.save
