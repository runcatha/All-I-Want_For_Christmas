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

@admin = User.create!(first_name: 'Cathleen', last_name: 'Runde', username: 'runcatha', email: 'cathleen@gmail.com', password: "password", image: "https://i.imgur.com/gZqR00h.jpg")
@admin2 = User.create!(first_name: 'Mary', last_name: 'Runde', username: 'scarymary', email: 'mary@gmail.com', password: "password", image: "https://i.imgur.com/FFeFKUN.jpg")

puts "#{User.count} users created"

  Gift.create!(name: 'Cracking the Coding Interview', image: 'https://i.imgur.com/6x76e17.jpg', price: 24.49, buy_link: 'https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/ref=sr_1_1?dchild=1&gclid=CjwKCAjw7--KBhAMEiwAxfpkWLWtnE_YUcA4YdlNr7fyXC9fujZPzLLq0qUTYRQ892erdpcjcMeF_RoCrKQQAvD_BwE&hvadid=241870593966&hvdev=c&hvlocphy=9031520&hvnetw=g&hvqmt=e&hvrand=14727432204780906609&hvtargid=kwd-20040243067&hydadcr=16409_10304044&keywords=cracking+the+coding+interview&qid=1633452610&sr=8-1', user: @admin)
  Gift.create!(name: 'Tech Interview Pro', image: 'https://i.imgur.com/2VhUQYy.jpg', price: 197, buy_link: 'https://www.techseries.dev/', user: @admin)
  Gift.create!(name: 'Bobbi Brown Primer', image: 'https://i.imgur.com/Vo28JWu.jpg', price: 20, buy_link: 'https://www.ulta.com/p/mini-vitamin-enriched-face-base-pimprod2025025', user: @admin)
  Gift.create!(name: 'Carrie Underwood- Cry Pretty', image: 'https://i.imgur.com/jOKdOTs.jpg', price: 10.15, buy_link: 'https://www.amazon.com/Cry-Pretty-Carrie-Underwood/dp/B07CW76MX1', user: @admin)
  Gift.create!(name: 'Bobbi Brown Makeup Manual', image: 'https://i.imgur.com/SYEg0qj.jpg', price: 14.98, buy_link: 'https://www.amazon.com/Bobbi-Brown-Makeup-Manual-Everyone/dp/0446581356', user: @admin)
  Gift.create!(name: 'Frakenstein', image: 'https://i.imgur.com/HmoLKoV.jpg', price: 8.95, buy_link: 'https://www.amazon.com/Frankenstein-Original-Readers-Library-Classics/dp/1954839081/ref=sr_1_2?crid=1GQRWP2ELPAT6&dchild=1&keywords=frakenstein&qid=1633638095&s=books&sprefix=frak%2Cstripbooks%2C207&sr=1-2', user: @admin)
  Gift.create!(name: 'Banana Republic Cashmere Cartigan', image: 'https://bananarepublic.gap.com/webcontent/0027/214/693/cn27214693.jpg', price: 219, buy_link: 'https://bananarepublic.gap.com/browse/product.do?pid=747390012&cid=1044269&pcid=5032&vid=1&grid=pds_67_323_1#pdp-page-content', user: @admin)
  Gift.create!(name: 'Rogue Barbell Collars', image: 'https://www.roguefitness.com/media/catalog/product/cache/1/image/1500x1500/472321edac810f9b2465a359d8cdc0b5/o/s/oso-rogue-collars-web1.jpg', price: 59.50, buy_link: 'https://www.roguefitness.com/rogue-oso-barbell-collars', user: @admin)
 

@gifts = Gift.all

puts "#{Gift.count} gifts created"

@krachas = Group.create!(name: 'Krachas!', image: 'https://i.imgur.com/hDmWp7M.jpg?1', members: 'Cathleen')
@chickadee = Group.create!(name: 'Chickadee', image: 'https://i.imgur.com/XxxwFfY.png', members: 'Cathleen')
@groups = Group.all

puts "#{Group.count} groups created!"

@admin.groups.push(@krachas)