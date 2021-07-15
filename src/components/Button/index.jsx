import React from "react";

import "./styles.css";

export const Button = ({ onclick, children, disabled }) => {
  return (
    <button onClick={onclick} disabled={disabled} type="button">
      {children}
    </button>
  );
};
