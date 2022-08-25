class MakeChangeToRoom < ActiveRecord::Migration[5.2]
  def change
    remove_column :rooms, :image_urls
  end
end
