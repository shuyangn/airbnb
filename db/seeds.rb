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
room1 = Room.create!(lat:40.73633, long: -73.99383, description: 'This course was crafted to provide you with a fully immersive in-person experience! Not only will you get exposure to what a real tech start-up space feels like, with our office-like classroom design, you will also enjoy easy access to live resources and interactive lectures.', max_guests: 20, num_beds: 20, num_baths: 3, price: 230, city: 'New York', image_urls: ['https://c2.staticflickr.com/4/3035/2309664044_486f5a0327_z.jpg?zz=1'])
room2 = Room.create!(lat:31.20260, long: 121.44025, description: 'eat well', max_guests: 6, num_beds: 6, num_baths: 3, price: 880, city: 'Shanghai', image_urls: ['http://www.concretedecor.net/CD/assets/Image/archives/CD1405/1405i_Page_32_Image_0001_600.jpg'])
room3 = Room.create!(lat:36.66132, long: 117.02129, description: 'hi', max_guests: 7, num_beds: 20, num_baths: 3, price: 270, city: 'Jinan', image_urls: ['https://c2.staticflickr.com/4/3035/2309664044_486f5a0327_z.jpg?zz=1'])
room4 = Room.create!(lat:39.97577, long: 116.35186, description: 'Accessible pet friendly waterfront A-line with breathtaking views only 50 feet from lake.', max_guests: 5, num_beds: 20, num_baths: 3, price: 280, city: 'Beijing', image_urls: ['http://www.concretedecor.net/CD/assets/Image/archives/CD1405/1405i_Page_32_Image_0001_600.jpg'])
room5 = Room.create!(lat:22.35400, long: 113.51936, description: 'uic -- so expensive', max_guests: 4, num_beds: 4, num_baths: 2, price: 1800, city: 'Zhuhai', image_urls: ['https://a0.muscache.com/im/pictures/miso/Hosting-46695796/original/a0965aa5-3907-466e-b727-0900e2a7e8c7.jpeg?im_w=1200'])
