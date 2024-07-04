import React, { FC } from "react";

interface Type {
  text: string;
  onClick?: () => void;
  icon?: any;
  iconDirection?: "left" | "right";
  customStyles?: any;
  color?: string;
  isDropdown?: boolean;
  disabled?: boolean;
}

const CustomButton: FC<Type> = ({
  text,
  onClick,
  icon,
  iconDirection,
  customStyles,
  color,
  isDropdown,
  disabled,
}) => {
  return (
    <div>
      <button
        data-bs-toggle={isDropdown ? "dropdown" : "button"}
        disabled={disabled}
        onClick={onClick}
        style={customStyles}
        className="bg-white text-secondary"
      >
        {iconDirection === "left" && icon ? (
          <div className="d-flex me-2">{icon}</div>
        ) : null}
        {text}
        {iconDirection === "right" && icon ? (
          <div className="d-flex ms-2">{icon}</div>
        ) : null}
      </button>
    </div>
  );
};

export default CustomButton;
