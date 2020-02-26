class CreatePortfolios < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios do |t|
      t.string :title
      t.string :subtitle
      t.text :content
      t.text :main_image
      t.text :thumb_image
      t.boolean :sketch

      t.timestamps
    end
  end
end
