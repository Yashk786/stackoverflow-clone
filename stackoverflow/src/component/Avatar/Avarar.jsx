import React from "react";

const Avarar = ({
  children,
  backgroundColor,
  color,
  px,
  py,
  borderRadius,
  fontSize,
  textAlign,
  cursor,
}) => {
  const style = {
    backgroundColor,
    color: color || "black",
    padding: `${py}  ${px}`,
    borderRadius,
    fontSize,
    textAlign: "centre",
    cursor: cursor || null,
  };
  return <div style={style}>{children}</div>;
};

export default Avarar;
