class SelectionsController < ApplicationController
  # render :json => selection.to_json(:include => [:highlight_head])
  def index
    @selections = Selection.all
    @highlights = Highlight.all
    render :json => {selections: @selections, highlights: @highlights}
  end

  def create
    highlight = Highlight.create(highlight_params)
    selection = Selection.create(selection_params.merge(highlight_id: highlight.id))

    render nothing: true
  end

  private

  def selection_params
    params.require(:selection).permit(:article_id)
  end

  def highlight_params
    params.require(:highlight).permit(:paragraph_id, :start_index, :length)
  end

end
