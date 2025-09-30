import React, { useState } from "react";

interface ColorButtonProps {
  label: string;                 // text hiển thị trên nút
  color?: string;                // màu được truyền vào
  onClick?: () => void;          // hàm callback khi click (optional)
}

const getRandomColor = () => {
  const colors = ["red", "green", "blue", "purple", "orange", "pink"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ColorButton = ({ label, color, onClick }: ColorButtonProps) => {
  const [btnColor, setBtnColor] = useState<string>(color || getRandomColor());

  const handleClick = () => {
    if (!color) {
      setBtnColor(getRandomColor());  // nếu không truyền color → random khi click
    }
    if (onClick) {
      onClick(); // chạy thêm callback nếu có
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: btnColor,
        color: "white",
        padding: "8px 16px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default ColorButton;
