import React from 'react';

export default class Todo extends React.Component {
  render() {
    const {onClick, completed, text} = this.props;
    return (
        <li
        onClick={onClick}
        style={
          {
            textDecoration: completed? 'line-through': 'none',
            userSelect: "none"
          }
        }
        >{text}</li>
    )
  }
}