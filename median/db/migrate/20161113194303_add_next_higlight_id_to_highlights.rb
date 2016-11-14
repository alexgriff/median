class AddNextHiglightIdToHighlights < ActiveRecord::Migration[5.0]
  def change
    add_column :highlights, :next_highlight_id, :integer
    remove_column :highlights, :selection_id
  end
end
