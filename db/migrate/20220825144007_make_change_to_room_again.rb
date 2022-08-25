class MakeChangeToRoomAgain < ActiveRecord::Migration[5.2]
  def change
    add_column :rooms, :country, :string, null: false
  end
end
