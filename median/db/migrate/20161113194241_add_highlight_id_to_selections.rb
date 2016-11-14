class AddHighlightIdToSelections < ActiveRecord::Migration[5.0]
  def change
    add_column :selections, :highlight_id, :integer
    remove_column :selections, :highlight_ids
  end
end
