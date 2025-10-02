import React, { useState } from "react";

interface ButtonProps {
  text: string;
  color?: string; // optional
  onClick?: ()=> void;
}

const Button: React.FC<ButtonProps> = ({ text, color ,onClick }) => {
  const [bgColor, setBgColor] = useState<string>(color || "gray");

  // Hàm random mã màu HEX
  const randomHexColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  };

  const handleClick = () => {
    if (color) {
      setBgColor(color); // nếu truyền thì giữ màu đó
    } else {
      setBgColor(randomHexColor()); // nếu không thì random hex
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: bgColor,
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
