class CreateSelections < ActiveRecord::Migration[5.0]
  def change
    create_table :selections do |t|
      t.string :highlight_ids
      t.integer :article_id
      t.timestamps
    end
  end
end
