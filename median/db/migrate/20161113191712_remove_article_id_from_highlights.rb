class RemoveArticleIdFromHighlights < ActiveRecord::Migration[5.0]
  def change
    remove_column :highlights, :article_id
  end
end
