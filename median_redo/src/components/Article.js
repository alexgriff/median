import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getArticle, handleSelect, saveSelection, showSelections } from '../actions/index';
import Paragraph from './Paragraph';
import SaveSelection from './SaveSelection';
import ShowSelections from './ShowSelections';



class Article extends Component {
  constructor() {
    super();

    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.getHighlights = this.getHighlights.bind(this);
  }

  componentWillMount() {
    this.props.getArticle(1)
  }

  handleSaveClick () {
    window.getSelection().empty();
    let { selection, startIndex, id} = this.props;
    // params formatted for Rails controller
    this.props.saveSelection(
      {
        selection: {
          article_id: 1
        },
        highlight: {
          paragraph_id: id,
          start_index: startIndex,
          length: selection.length
        }
      });
  }

  getHighlights(p_id) {
    return this.props.selections ?
      this.props.selections
        .filter((hl) => hl.paragraph_id === p_id) :
        []
  }

  render() {
    // console.log('Article PROPS', this.props);
    let paragraphs = this.props.article
      .split("\n").map( (p, i) => {
      return <Paragraph
        key={i}
        id={i}
        text={p}
        selections={this.getHighlights(i)}
        handleSelect={this.props.handleSelect} />
    })
    return (
      <div>
        {paragraphs}
        <div>
          < ShowSelections onClick={this.props.showSelections}/>
          {this.props.selection ? <SaveSelection onClick={this.handleSaveClick}/> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log('STATE', state);
  return {
    article: state.article,
    selection: state.selection,
    id: state.id,
    startIndex: state.startIndex,
    selections: state.selections
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getArticle: (id) => dispatch(getArticle(id)),
    handleSelect: (selection, id, startIndex) => dispatch(handleSelect(selection, id, startIndex)),
    saveSelection: (params) => dispatch(saveSelection(params)),
    showSelections: () => dispatch(showSelections())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
