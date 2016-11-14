class AddSelectionIdToHighlights < ActiveRecord::Migration[5.0]
  def change
    add_column :highlights, :selection_id, :integer
  end
end
