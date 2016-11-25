import React from 'react';

export default (props) => {
  console.log(props.onClick)
  return(
    <button
      className="btn btn-primary"
      onClick={props.onClick} >
      Save Selection
    </button>
  );
}
