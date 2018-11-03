import * as React from "react";

interface IProps {
  title?: string;
}

export default class Header extends React.Component<IProps, any> {
  render() {
    const { title } = this.props;
    return (
      <div>
        <span>{title || 'Header'}</span>
      </div>
    );
  }
}
