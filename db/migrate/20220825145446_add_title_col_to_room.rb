class AddTitleColToRoom < ActiveRecord::Migration[5.2]
  def change
    add_column :rooms, :title, :string, null: false
  end
end
