# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Gift.destroy_all
Group.destroy_all
User.destroy_all

@admin = User.create!(first_name: 'Cathleen', last_name: 'Runde', username: 'runcatha', email: 'cathleen@gmail.com', password: "password", image: "thhesdbgk")

puts "#{User.count} users created"

  Gift.create!(name: 'Cracking the Coding Interview', image: 'https://i.imgur.com/6x76e17.jpg', price: 24.49, buy_link: 'https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/ref=sr_1_1?dchild=1&gclid=CjwKCAjw7--KBhAMEiwAxfpkWLWtnE_YUcA4YdlNr7fyXC9fujZPzLLq0qUTYRQ892erdpcjcMeF_RoCrKQQAvD_BwE&hvadid=241870593966&hvdev=c&hvlocphy=9031520&hvnetw=g&hvqmt=e&hvrand=14727432204780906609&hvtargid=kwd-20040243067&hydadcr=16409_10304044&keywords=cracking+the+coding+interview&qid=1633452610&sr=8-1', user: @admin)
 

@gifts = Gift.all

puts "#{Gift.count} gifts created"

@krachas = Group.create!(name: 'Krachas!', image: 'dbfjdn', members: 'Cathleen')

puts "#{Group.count} groups created!"

@admin.groups.push(@krachas)