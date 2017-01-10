class RemoveLatitudeAndLongitudeFromStops < ActiveRecord::Migration[5.0]
  def change
    remove_column :stops, :latitude
    remove_column :stops, :longitude
  end
end
