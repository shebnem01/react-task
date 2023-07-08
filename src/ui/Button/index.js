import React, { Component } from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";
class Button extends Component {
  static defaultProps = {
    bg: "danger",
  };
  render() {
    return (
      <div className={`${styles["count-btn"]}  ${styles[this.props.bg]}`}>
        {this.props.children}
      </div>
    );
  }
}
export default Button;
Button.propTypes = {
  // color: "danger" || "primary" || "success",
  color: PropTypes.oneOf(["danger", "primary", "success"]),
};
