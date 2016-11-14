class Highlight < ApplicationRecord
  belongs_to :next_highlight, class_name: 'Highlight', optional: true
  has_one :previous_highlight, class_name: 'Highlight', foreign_key: :next_highlight_id

  def head_highlight
    memo = previous_highlight
    while(memo.previous_highlight) do
      memo = memo.previous_highlight
    end
    memo
  end

end
