class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.float :lat, null: false
      t.float :long, null: false
      t.text :description, null: false
      t.integer :max_guests, null: false
      t.integer :num_beds, null: false
      t.integer :num_baths, null: false
      t.integer :price, null: false
      t.string :city, null: false
      t.string :image_urls, default: [], array: true
      t.timestamps
    end
  end
end
