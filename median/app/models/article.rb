class Article < ApplicationRecord
  has_many :selections
  has_many :highlights, through: :selections

  MOST_HIGHLIGHTED_SQL = <<-SQL
      WITH aggregated_highlights
      AS (
        SELECT *, count(highlights.paragraph_id) AS highlighters FROM highlights
        WHERE highlights.article_id=?
        GROUP BY highlights.paragraph_id, highlights.start_index, highlights.length)
      ) SELECT aggregated_highlights.*
        ORDER BY aggregated_highlights.highlighters DESC
        LIMIT 1;
  SQL

  def most_highlighted
    self.connection.execute("WITH aggregated_highlights AS (SELECT * FROM highlights WHERE highlights.article_id=? GROUP BY highlights.paragraph_id, highlights.start_index, highlights.length)")
    # => {[1,1,1]=> 2, [2,1,2] => 1}
    info = self.highlights.group(:paragraph_id, :start_index, :length).count
    info.key(info.values.max)
  end
end
