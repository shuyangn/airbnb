class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    drop_table :reservations
    create_table :reservations do |t|
      t.integer "num_guests", null: false
      t.date "check_in", null: false
      t.date "check_out", null: false
      t.integer "user_id", null: false
      t.integer "room_id", null: false

      t.timestamps
    end
    add_index :reservations, :user_id, unique: true
    add_index :reservations, :room_id, unique: true
  end
end
