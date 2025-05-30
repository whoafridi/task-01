import React, { useEffect, useRef } from "react";

const ContextMenu = ({
  position,
  currentColumnIndex,
  columns,
  onSelect,
  onClose,
}) => {
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [onClose]);

  return (
    <ul
      ref={menuRef}
      className="fixed bg-white shadow-md rounded border border-gray-300 z-50"
      style={{ top: position.y, left: position.x, minWidth: 120 }}
    >
      {columns.map((col, i) => {
        if (i === currentColumnIndex) return null;
        return (
          <li
            key={i}
            onClick={() => onSelect(i)}
            className="cursor-pointer px-3 py-1 hover:bg-gray-200 text-sm"
          >
            Move to {col.title}
          </li>
        );
      })}
    </ul>
  );
};

export default ContextMenu;
