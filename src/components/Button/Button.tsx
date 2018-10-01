/**
 * https://github.com/pedronauck/docz/issues/240
 */

import * as React from "react";
import cn from "classnames";
import * as styles from "./Button.css";

interface InnerProps {
  children: React.ReactNode | React.ReactText;
  /**
   * A className passed to the Button Component
   */
  className?: string;
  /**
   * Size of the Button Component
   */
  size?: "small" | "default" | "large";
  /**
   * Mode of the Button Component
   */
  mode?: "primary" | "secondary" | "error" | "success";
  /**
   * Type of the Button Component
   */
  type?: "filled" | "outlined";
  /** If set renders a full width button */
  fullWidth?: boolean;
}

class Button extends React.Component<InnerProps> {
  public static defaultProps: Partial<InnerProps> = {
    fullWidth: false,
    size: "default",
    type: "filled",
    mode: "primary"
  };

  render() {
    const { children, className, fullWidth, type, size, mode } = this.props;

    const rootClassName = cn(styles.root, className, {
      [styles.modePrimary]: mode === "primary",
      [styles.modeSecondary]: mode === "secondary",
      [styles.modeError]: mode === "error",
      [styles.modeSuccess]: mode === "success",
      [styles.typeOutlined]: type === "outlined",
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
