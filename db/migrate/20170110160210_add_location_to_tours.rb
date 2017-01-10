class AddLocationToTours < ActiveRecord::Migration[5.0]
  def change
    add_column :tours, :location, :string
  end
end
