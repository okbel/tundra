import React, { ReactText, ReactNode } from "react";
import cn from "classnames";
import * as styles from "./Button.css";

interface InnerProps {
  className?: string;
  children: ReactNode | ReactText;
  size?: "small" | "default" | "large";
  fullWidth?: boolean;
  type?: "filled" | "outlined";
}

class Button extends React.Component<InnerProps> {
  public static defaultProps: Partial<InnerProps> = {
    fullWidth: false,
    size: "default",
    type: "filled"
  };

  render() {
    const { children, className, fullWidth, type, size } = this.props;

    const rootClassName = cn(styles.root, className, {
      [styles.typeFilled]: type === "filled",
      [styles.typeOutlined]: type === "outlined",
      [styles.sizeSmall]: size === "small",
      [styles.sizeDefault]: size === "default",
      [styles.sizeLarge]: size === "large",
      [styles.fullWidth]: fullWidth
    });

    return <button className={rootClassName}>{children}</button>;
  }
}

export default Button;
