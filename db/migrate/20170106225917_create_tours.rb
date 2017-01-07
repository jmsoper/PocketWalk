class CreateTours < ActiveRecord::Migration[5.0]
  def change
    create_table :tours do |t|
      t.string :name
      t.text :description
      t.string :image
      t.string :user_id
      t.references :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
