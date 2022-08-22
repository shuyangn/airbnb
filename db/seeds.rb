# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

demo_user = User.create!(username:'Guest', email: 'guest@email.com', password:'112233')

Room.delete_all
room1 = Room.create!(lat:40.73627, long: -23.99369, description: 'sleep well', max_guests: 20, num_beds: 20, num_baths: 3, price: 230, city: 'New York', image_urls: ['https://c2.staticflickr.com/4/3035/2309664044_486f5a0327_z.jpg?zz=1'])
room2 = Room.create!(lat:42.73627, long: -53.99369, description: 'eat well', max_guests: 10, num_beds: 20, num_baths: 3, price: 260, city: 'New York', image_urls: ['http://www.concretedecor.net/CD/assets/Image/archives/CD1405/1405i_Page_32_Image_0001_600.jpg'])
room3 = Room.create!(lat:44.73627, long: -13.99369, description: 'hi', max_guests: 7, num_beds: 20, num_baths: 3, price: 270, city: 'New York', image_urls: ['https://c2.staticflickr.com/4/3035/2309664044_486f5a0327_z.jpg?zz=1'])
room4 = Room.create!(lat:50.73627, long: -63.99369, description: 'bye', max_guests: 5, num_beds: 20, num_baths: 3, price: 280, city: 'New York', image_urls: ['http://www.concretedecor.net/CD/assets/Image/archives/CD1405/1405i_Page_32_Image_0001_600.jpg'])
room5 = Room.create!(lat:60.73627, long: -73.99369, description: 'home', max_guests: 2, num_beds: 20, num_baths: 3, price: 290, city: 'New York', image_urls: ['https://a0.muscache.com/im/pictures/miso/Hosting-46695796/original/a0965aa5-3907-466e-b727-0900e2a7e8c7.jpeg?im_w=1200'])
