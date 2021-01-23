import React from "react";
import "./Table.css";

const COLOR = ["dark", "light"];

export const Table = ({ children, color }) => {
  const tableColor = COLOR.includes(color) ? color : COLOR[0];
  return <table className={`table ${tableColor}`}>{children}</table>;
};
