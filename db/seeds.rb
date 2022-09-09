# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

demo_user = User.create!(username:'Guest', email: 'guest@email.com', password:'112233')

Reservation.delete_all
 
Room.delete_all

room10 = Room.create!(lat:44.88318, long: 4.19888, description: 'Charming wood and stone thatched cottage nestled on the South slopes of Mont Mézenc, near Gerbier de Jonc (where the source of the Loire river is located), in the Borée district of Ardèche, 8 mins from the ski resort of Les Estables.
An outstanding location!',
  max_guests: 3, num_beds: 2, num_baths: 1, price: 64, city: 'Borée, Rhône-Alpes', country: 'France', title: 'Thatched cottage surrounded by nature')
r10p1 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room10_1.jpg")
room10.photo.attach(io:r10p1, filename: 'bnb/room10_1.jpg')
r10p2 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room10_2.jpg")
room10.photo.attach(io:r10p2, filename: 'bnb/room10_2.jpg')
r10p3 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room10_3.jpg")
room10.photo.attach(io:r10p3, filename: 'bnb/room10_3.jpg')
r10p4 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room10_4.jpg")
room10.photo.attach(io:r10p4, filename: 'bnb/room10_4.jpg')
r10p5 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room10_5.jpg")
room10.photo.attach(io:r10p5, filename: 'bnb/room10_5.jpg')





room3 = Room.create!(lat:46.98090, long: -71.25399, description: 'The "MICA", high-end micro-housing located in the heart of the "Maelström" recreational-forestry area. Live the immersive experience of a boreal nature just 25 minutes from Old Quebec. Enjoy panoramic views of Laurentian Park as well as breathtaking sunsets at the highest peak of Lac-Beauport. Discover the unique topography of the mountain by exploring the some 20km of trails accessible in any season.',
 max_guests: 4, num_beds: 4, num_baths: 1, price: 308, city: 'Lac-Beauport, Quebec', country: 'Canada', title: 'MICA (Chalets Micro-Element) CITQ 303134')
r3p1 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room3_1.jpg")
room3.photo.attach(io:r3p1, filename: 'bnb/room3_1.jpg')
r3p2 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room3_2.jpg")
room3.photo.attach(io:r3p2, filename: 'bnb/room3_2.jpg')
r3p3 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room3_3.jpg")
room3.photo.attach(io:r3p3, filename: 'bnb/room3_3.jpg')
r3p4 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room3_4.jpg")
room3.photo.attach(io:r3p4, filename: 'bnb/room3_4.jpg')
r3p5 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room3_5.jpg")
room3.photo.attach(io:r3p5, filename: 'bnb/room3_5.jpg')



room7 = Room.create!(lat:63.84330, long: -20.38771, description: 'We are located on a lava desert in the south of Iceland. 5 minutes from the small town of Hella, close to all the popular attractions that southern Iceland has to offer, but also in a secret and secluded location.',
 max_guests: 2, num_beds: 1, num_baths: 1, price: 581, city: 'Hella', country: 'Iceland', title: 'Glass cottage with Hot tub "Blár"')
r7p1 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room7_1.jpg")
room7.photo.attach(io:r7p1, filename: 'bnb/room7_1.jpg')
r7p2 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room7_2.jpg")
room7.photo.attach(io:r7p2, filename: 'bnb/room7_2.jpg')
r7p3 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room7_3.jpg")
room7.photo.attach(io:r7p3, filename: 'bnb/room7_3.jpg')
r7p4 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room7_4.jpg")
room7.photo.attach(io:r7p4, filename: 'bnb/room7_4.jpg')
r7p5 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room7_5.jpg")
room7.photo.attach(io:r7p5, filename: 'bnb/room7_5.jpg')





room4 = Room.create!(lat:46.19463, long: -74.67315, description: 'Located in a private domain 8 minutes from Tremblant Station and 5 minutes from Lac Mercier, the XO Tremblant is an urban oasis in the heart of nature. Perched on a rock, the chalet offers a modern decor away from the neighborhood. The chalet is connected by Bell Fibe with high speed internet for teleworkers and fans of streaming TV.',
 max_guests: 14, num_beds: 6, num_baths: 5, price: 721, city: 'La Conception, Quebec', country: 'Canada', title: 'Chalet XO Tremblant - 5 bedrooms wt private bathroom, spa, sauna and rooftop')
r4p1 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room4_1.jpg")
room4.photo.attach(io:r4p1, filename: 'bnb/room4_1.jpg')
r4p2 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room4_2.jpg")
room4.photo.attach(io:r4p2, filename: 'bnb/room4_2.jpg')
r4p3 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room4_3.jpg")
room4.photo.attach(io:r4p3, filename: 'bnb/room4_3.jpg')
r4p4 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room4_4.jpg")
room4.photo.attach(io:r4p4, filename: 'bnb/room4_4.jpg')
r4p5 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room4_5.jpg")
room4.photo.attach(io:r4p5, filename: 'bnb/room4_5.jpg')



room5 = Room.create!(lat:45.81555, long: -74.22976, description: 'Located near Fiddler Lake, the Blue Moose is a luxurious log cabin offering all the attractions you need for a perfect getaway. Decorated according to the latest trends and built on a large piece of natural land, this chalet features an abundance of windows overlooking the incredible surrounding forest. The log cabin of your dreams!',
 max_guests: 10, num_beds: 6, num_baths: 2, price: 485, city: 'Mille-Isles, Quebec', country: 'Canada', title: 'BLUE MOOSE | spa, sauna and lake access - Citq: 272661')
r5p1 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room5_1.jpg")
room5.photo.attach(io:r5p1, filename: 'bnb/room5_1.jpg')
r5p2 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room5_2.jpg")
room5.photo.attach(io:r5p2, filename: 'bnb/room5_2.jpg')
r5p3 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room5_3.jpg")
room5.photo.attach(io:r5p3, filename: 'bnb/room5_3.jpg')
r5p4 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room5_4.jpg")
room5.photo.attach(io:r5p4, filename: 'bnb/room5_4.jpg')
r5p5 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room5_5.jpg")
room5.photo.attach(io:r5p5, filename: 'bnb/room5_5.jpg')



room6 = Room.create!(lat:65.68006, long: -18.03447, description: 'Architectural house in north Iceland.
 This is one of the apartments in Villa Lola, located in Vaðlaheiði near Akureyri, the capital of north Iceland.
 The villa is located in the exclusive residence area of Akureyri. This location offers you a quiet atmosphere and a touch of the nature. You will have a view over the bay and Akureyri . In the winter time you can enjoy the aurora borealis and in the summer time the midnight sun.',
 max_guests: 4, num_beds: 3, num_baths: 1, price: 158, city: 'Akureyri, Northeast', country: 'Iceland', title: 'Amazing view - Moderne apartment')
r6p1 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room6_1.jpg")
room6.photo.attach(io:r6p1, filename: 'bnb/room6_1.jpg')
r6p2 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room6_2.jpg")
room6.photo.attach(io:r6p2, filename: 'bnb/room6_2.jpg')
r6p3 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room6_3.jpg")
room6.photo.attach(io:r6p3, filename: 'bnb/room6_3.jpg')
r6p4 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room6_4.jpg")
room6.photo.attach(io:r6p4, filename: 'bnb/room6_4.jpg')
r6p5 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room6_5.jpg")
room6.photo.attach(io:r6p5, filename: 'bnb/room6_5.jpg')







room8 = Room.create!(lat:47.25518, long: 1.34217, description: 'Welcome to the Grotte du Moulin !
This natural loft is embedded in a limestone block and will surprise you with its irregularity.
It consists of a large kitchen open to the living room and a bedroom with bathroom separated by a sliding garage door.',
 max_guests: 4, num_beds: 3, num_baths: 1, price: 114, city: 'Noyers-sur-Cher, Centre-Val de Loire', country: 'France', title: 'La Grotte du Moulin de la Motte Baudoin')
r8p1 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room8_1.jpg")
room8.photo.attach(io:r8p1, filename: 'bnb/room8_1.jpg')
r8p2 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room8_2.jpg")
room8.photo.attach(io:r8p2, filename: 'bnb/room8_2.jpg')
r8p3 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room8_3.jpg")
room8.photo.attach(io:r8p3, filename: 'bnb/room8_3.jpg')
r8p4 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room8_4.jpg")
room8.photo.attach(io:r8p4, filename: 'bnb/room8_4.jpg')
r8p5 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room8_5.jpg")
room8.photo.attach(io:r8p5, filename: 'bnb/room8_5.jpg')







room9 = Room.create!(lat:42.34445, long: 3.20739, description: 'Beautiful 4 bedroom architecturally designed villa, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Spain.
The house has been featured in the New York Times and in Wallpaper.',
  max_guests: 10, num_beds: 5, num_baths: 3, price: 348, city: 'El Port de la Selva, Catalonia', country: 'Spain', title: 'Sunflower House')
r9p1 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room9_1.jpg")
room9.photo.attach(io:r9p1, filename: 'bnb/room9_1.jpg')
r9p2 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room9_2.jpg")
room9.photo.attach(io:r9p2, filename: 'bnb/room9_2.jpg')
r9p3 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room9_3.jpg")
room9.photo.attach(io:r9p3, filename: 'bnb/room9_3.jpg')
r9p4 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room9_4.jpg")
room9.photo.attach(io:r9p4, filename: 'bnb/room9_4.jpg')
r9p5 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room9_5.jpg")
room9.photo.attach(io:r9p5, filename: 'bnb/room9_5.jpg')









room11 = Room.create!(lat:45.91071, long: 9.13072, description: 'The villa is located foot dans l \'eau on the lake in the old town of Brienno, a small village 17 km north of Como and 7 km from the highway
The property is a beautifully restored 17th-century silk spinning mill. Stone coverings, high vaulted ceilings, and an antique chimney alternate with chic industrial interiors and contemporary artwork in a perfect, sophisticated mix.
Large windows offer stunning views of the lake.',
  max_guests: 8, num_beds: 6, num_baths: 5, price: 1990, city: 'Brienno, Lombardia', country: 'Italy', title: 'Filanda "Waterfront" On Lake Como')
r11p1 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room11_1.jpg")
room11.photo.attach(io:r11p1, filename: 'bnb/room11_1.jpg')
r11p2 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room11_2.jpg")
room11.photo.attach(io:r11p2, filename: 'bnb/room11_2.jpg')
r11p3 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room11_3.jpg")
room11.photo.attach(io:r11p3, filename: 'bnb/room11_3.jpg')
r11p4 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room11_4.jpg")
room11.photo.attach(io:r11p4, filename: 'bnb/room11_4.jpg')
r11p5 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room11_5.jpg")
room11.photo.attach(io:r11p5, filename: 'bnb/room11_5.jpg')


room1 = Room.create!(lat:41.94321, long: -73.83224, description: 'Unique experience, secluded.
Enjoy a weekend or a few days eco-friendly retreat in an architectural, geometric masterpiece on 30 preserved acres just minutes from all that Rhinebeck and the Hudson Valley have to offer.
The house is an open plan, and though it has zero bedrooms, it can sleep 3!', max_guests: 4, num_beds: 2, num_baths: 2, price: 475, city: 'Rhinbeck, New York', country: 'United States', title: 'Architectural wonder in the woods')
r1p1 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room1_1.jpg")
room1.photo.attach(io:r1p1, filename: 'bnb/room1_1.jpg')
r1p2 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room1_2.jpg")
room1.photo.attach(io:r1p2, filename: 'bnb/room1_2.jpg')
r1p3 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room1_3.jpg")
room1.photo.attach(io:r1p3, filename: 'bnb/room1_3.jpg')
r1p4 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room1_4.jpg")
room1.photo.attach(io:r1p4, filename: 'bnb/room1_4.jpg')
r1p5 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room1_5.jpg")
room1.photo.attach(io:r1p5, filename: 'bnb/room1_5.jpg')



room2 = Room.create!(lat:41.53515, long: -74.22328, description: 'Reconnect with nature at this unforgettable escape. Located in the Hudson Valley, The Step is a little piece of paradise built on 78 acres of operating farm land near the Walkill River. It is an off the grid glamping experience equipped with the luxury of a queen size memory foam mattress for a good nights sleep. The Step is a secluded get away where you can explore our farm land, show off your scrabble skills, gaze at the stars, and be woken up by the sun through your windows', 
 max_guests: 2, num_beds: 1, num_baths: 1, price: 180, city: 'Montgomery, New York', country: 'United States', title: 'The Step, a Quaint Cozy A-Frame, on a Farm + River')
r2p1 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room2_1.jpg")
room2.photo.attach(io:r2p1, filename: 'bnb/room2_1.jpg')
r2p2 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room2_2.jpg")
room2.photo.attach(io:r2p2, filename: 'bnb/room2_2.jpg')
r2p3 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room2_3.jpg")
room2.photo.attach(io:r2p3, filename: 'bnb/room2_3.jpg')
r2p4 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room2_4.jpg")
room2.photo.attach(io:r2p4, filename: 'bnb/room2_4.jpg')
r2p5 = URI.open("https://active-storage-enjoybnb-seed.s3.amazonaws.com/bnb/room2_5.jpg")
room2.photo.attach(io:r2p5, filename: 'bnb/room2_5.jpg')



reservation1 = Reservation.create!(user_id: demo_user.id, num_guests:1, room_id: room1.id, check_in: Time.new(2022,9,1).to_date, check_out: Time.new(2022,9,3).to_date)
reservation2 = Reservation.create!(user_id: demo_user.id, num_guests:1, room_id: room2.id, check_in: Time.new(2022,9,1).to_date, check_out: Time.new(2022,9,3).to_date)
reservation3 = Reservation.create!(user_id: demo_user.id, num_guests:1, room_id: room3.id, check_in: Time.new(2022,9,1).to_date, check_out: Time.new(2022,9,3).to_date)
reservation4 = Reservation.create!(user_id: demo_user.id, num_guests:1, room_id: room4.id, check_in: Time.new(2022,9,1).to_date, check_out: Time.new(2022,9,3).to_date)
reservation5 = Reservation.create!(user_id: demo_user.id, num_guests:1, room_id: room5.id, check_in: Time.new(2022,9,1).to_date, check_out: Time.new(2022,9,3).to_date)
reservation6 = Reservation.create!(user_id: demo_user.id, num_guests:1, room_id: room6.id, check_in: Time.new(2022,9,1).to_date, check_out: Time.new(2022,9,3).to_date)
reservation7 = Reservation.create!(user_id: demo_user.id, num_guests:1, room_id: room7.id, check_in: Time.new(2022,9,1).to_date, check_out: Time.new(2022,9,3).to_date)
reservation8 = Reservation.create!(user_id: demo_user.id, num_guests:1, room_id: room8.id, check_in: Time.new(2022,9,1).to_date, check_out: Time.new(2022,9,3).to_date)
reservation9 = Reservation.create!(user_id: demo_user.id, num_guests:1, room_id: room9.id, check_in: Time.new(2022,9,1).to_date, check_out: Time.new(2022,9,3).to_date)
reservation10 = Reservation.create!(user_id: demo_user.id, num_guests:1, room_id: room10.id, check_in: Time.new(2022,9,1).to_date, check_out: Time.new(2022,9,3).to_date)
reservation11 = Reservation.create!(user_id: demo_user.id, num_guests:1, room_id: room11.id, check_in: Time.new(2022,9,1).to_date, check_out: Time.new(2022,9,3).to_date)