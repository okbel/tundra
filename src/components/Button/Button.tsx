import React, { ReactText, ReactNode } from "react";

interface InnerProps {
  children: ReactNode | ReactText;
}

class Button extends React.Component<InnerProps> {
  render() {
    const { children } = this.props;
    return <button>{children}</button>;
  }
}

export default Button;
