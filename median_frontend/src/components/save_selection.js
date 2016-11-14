import React from 'react';

export default (props) => {
  return(
    <div style={ props.visible ? {} : {visibility: "hidden"}} >
      <button
        onClick={props.onClick}
        className="btn btn-primary">
          Save Current Selection
      </button>
    </div>
  );
}
