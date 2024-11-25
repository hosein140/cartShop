import React from "react";

const CartFormLayout = ({ children, className }) => {
  const classes = `costantCF ${className}`;
  return <div className={classes}>{children}</div>;
};

export default CartFormLayout;
