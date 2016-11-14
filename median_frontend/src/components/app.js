import React, { Component } from 'react';
import Article from './article';
import { connect } from 'react-redux';
import { getArticle, setVisible, createSelection } from '../actions';
import SaveSelection from './save_selection';

class App extends Component {
  constructor() {
    super();

    this.handleSelection = this.handleSelection.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSelection() {
    let selection = window.getSelection().toString();

    this.props.setVisible(selection);
    console.log('after action', this.props)
  }

  handleClick(){
    this.props.createSelection(window.getSelection().toString());
  }

  componentDidMount() {
    this.props.getArticle(1);
  }

  render() {
    return (
      <div onMouseUp={this.handleSelection}>
        { this.props.text ? <Article text={this.props.text} /> : "Loading"}
        <SaveSelection
          visible={this.props.visible.visible}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {text: state.article.text, visible: state.visible};
}

function mapDispatchToProps(dispatch, props) {
  return {
    getArticle: (id) => dispatch(getArticle(id)),
    setVisible: (selection) => dispatch(setVisible(selection)),
    createSelection: (selection) => dispatch(createSelection(selection))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
