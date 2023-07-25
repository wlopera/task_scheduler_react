import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const TooltipButton = ({ id, message, children }) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={id}>{message}</Tooltip>}
    >
      {children}
    </OverlayTrigger>
  );
};

export default TooltipButton;
