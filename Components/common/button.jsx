import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, variant }) => {
  let styles = "";

  //* Switch case for button variants
  switch (variant) {
    case "outline":
      styles = "text-[#1E3C72] border-[#1E3C72] border-2";
      break;

    case "gradient":
      styles = "text-white bg-gradient-to-r from-btngrad_1 to-btngrad_2";
      break;

    default:
      styles = "text-white bg-[#1E3C72]";
  }

  return (
    <button
      className={`${styles} flex justify-center items-center w-max py-3 px-4 rounded-lg font-urbanist`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

export default Button;
