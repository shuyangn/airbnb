class MakeChangeToReservation < ActiveRecord::Migration[5.2]
  def change
    remove_index :reservations, column: :user_id
  end
end
