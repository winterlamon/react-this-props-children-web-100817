import React from 'react';

export default class SomeComponent extends React.Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return (
        <div className="some-component-special-class">{child}</div>
      );
    });

    return (
      <div className="some-component">
        <p>This component has {React.Children.count(this.props.children)} children.</p>
        {childrenWithWrapperDiv}
      </div>
    );
  }
}
