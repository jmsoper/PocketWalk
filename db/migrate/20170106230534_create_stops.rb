class CreateStops < ActiveRecord::Migration[5.0]
  def change
    create_table :stops do |t|
      t.references :tour, foreign_key: true
      t.decimal :latitude
      t.decimal :longitude
      t.string :name
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
