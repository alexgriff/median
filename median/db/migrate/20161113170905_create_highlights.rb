class CreateHighlights < ActiveRecord::Migration[5.0]
  def change
    create_table :highlights do |t|
      t.integer :article_id
      t.integer :paragraph_id
      t.integer :start_index
      t.integer :length

      t.timestamps
    end
  end
end
