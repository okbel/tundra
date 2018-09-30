import React, { ReactText, ReactNode } from "react";
import cn from "classNames";
import * as styles from "./Button.css";

interface InnerProps {
  className?: string;
  children: ReactNode | ReactText;
  size?: "small" | "default" | "large";
  fullWidth?: boolean;
  type?: "default" | "filled" | "outlined";
}

class Button extends React.Component<InnerProps> {
  public static defaultProps: Partial<InnerProps> = {
    fullWidth: false,
    size: "default",
    type: "default"
  };

  render() {
    const { children, className, fullWidth, type } = this.props;

    const rootClassName = cn(styles.root, className, {
      [styles.typeDefault]: type,
      [styles.fullWidth]: fullWidth
    });

    return <button className={rootClassName}>{children}</button>;
  }
}

export default Button;
