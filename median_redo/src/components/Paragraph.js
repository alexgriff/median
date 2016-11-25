import React, { Component } from 'react';



export default class Paragraph extends Component {
  constructor() {
    super();

    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.showHighlights = this.showHighlights.bind(this);
    this.showText = this.showText.bind(this);
  }

  showHighlights(selections, paragraph) {
    let _selections = selections.slice();

    if(_selections.length === 0){
      return paragraph;
    } else {
      let selection = _selections[0]
      let { start_index, length } = selection;
      let { text } = this.props

      // debugger;

      paragraph = (
        <p onMouseUp={this.handleMouseUp}>
          {text.slice(0, start_index)}
          <span className="highlight" style={{backgroundColor: 'rgba(0,255,0,0.25)'}} >
            {text.slice(start_index, start_index + length)}
          </span>
          {text.slice((start_index + length))}
        </p>
      );

      // debugger;

      return this.showHighlights(_selections.slice(1), paragraph)
    }
  }

  // showHighlights() {
  //   let selection = this.props.selections[0]
  //   let { start_index, length } = selection;
  //   let { text } = this.props
  //
  //   return (
  //       <p onMouseUp={this.handleMouseUp}>
  //         {text.slice(0, start_index)}
  //         <span className="highlight" style={{backgroundColor: 'rgba(0,255,0,0.25)'}} >
  //           {text.slice(start_index, start_index + length)}
  //         </span>
  //         {text.slice((start_index + length))}
  //       </p>
  //   );
  // }

  showText() {
    let { text } = this.props

    return (
      <p onMouseUp={this.handleMouseUp}>
        {text}
      </p>
    )
  }

  handleMouseUp() {
    let selection = window.getSelection().toString();
    let startIndex = this.props.text.indexOf(selection);

    this.props.handleSelect(selection, this.props.id, startIndex)
  }

  render() {
    console.log('Paragraph PROPS', this.props)
    let { selections } = this.props;

    if(selections.length > 0) {
      return this.showHighlights(selections, null);
    } else {
      return this.showText();
    }
  }
}
