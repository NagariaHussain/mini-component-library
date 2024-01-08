/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZE_HEIGHT_MAP = {
  small: "8px",
  medium: "12px",
  large: "24px",
};

const ProgressBar = ({ value, size }) => {
  return <Progress max="100" value={value} size={size}></Progress>;
};

function getBorderRadius(value) {
  return `${value >= 99 ? -4 * (99 - value) : 0}px`;
}

const Progress = styled.progress`
  /* reset the default appearance */
  -webkit-appearance: none;
  appearance: none;

  height: ${(props) => SIZE_HEIGHT_MAP[props.size]};
  width: 370px;

  &[value]::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: ${(props) => (props.size === "large" ? "8px" : "4px")};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    padding: ${(props) => (props.size === "large" ? "4px" : 0)};
  }

  &[value]::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: 4px ${(p) => getBorderRadius(p.value)}
      ${(p) => getBorderRadius(p.value)} 4px;
  }
`;

export default ProgressBar;
