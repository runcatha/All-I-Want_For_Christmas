class CreateGifts < ActiveRecord::Migration[6.1]
  def change
    create_table :gifts do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.string :image
      t.integer :price
      t.string :buy_link

      t.timestamps
    end
  end
end
