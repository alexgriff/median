class Selection < ApplicationRecord
  belongs_to :highlight_head, class_name: 'Highlight', optional: true, foreign_key: :highlight_id

end
