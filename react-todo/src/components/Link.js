import React from 'react';

export default class Link extends React.Component {
  render() {
    const {active, children, onClick} = this.props;
    if (active) {
      return (<span>{children}</span>)
    }
    return (
      <a 
        href=""
        onClick={ e => {
          e.preventDefault();
          onClick();
          }
        }
      >{children}</a>
    )
  }
}