class MakeChangeToReservation2 < ActiveRecord::Migration[5.2]
  def change
    remove_index :reservations, column: :room_id
  end
end
