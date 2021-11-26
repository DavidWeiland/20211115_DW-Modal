import './style/dw-react-modal.css';
import React from 'react';
export default function Modal({
  state,
  config,
  close,
  children
}) {
  const {
    backgroundColor,
    borderRadius,
    width,
    height,
    justifyContent,
    alignItems,
    fontWeight,
    color,
    fontSize
  } = config;
  const DWMWTstyle = {
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    width: width,
    height: height,
    justifyContent: justifyContent,
    alignItems: alignItems,
    fontWeight: fontWeight,
    color: color,
    fontSize: fontSize
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "DW-Modale-Wrapper",
    style: {
      display: state ? "flex" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "DW-Modale-Wrapper--Text",
    style: DWMWTstyle
  }, children, /*#__PURE__*/React.createElement("div", {
    className: "DW-Modale-Wrapper--Close",
    onClick: close
  })));
}