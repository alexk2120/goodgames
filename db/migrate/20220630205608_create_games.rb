class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :title
      t.string :release_date
      t.string :developer
      t.text :description
      t.integer :star_rating

      t.timestamps
    end
  end
end
