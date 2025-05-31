import { useEffect, useRef, useState } from "react";

export const useContextMenu = () => {
  const [contextMenu, setContextMenu] = useState(null);
  const contextMenuRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(e.target)
      ) {
        setContextMenu(null);
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const openContextMenu = (e, data) => {
    e.preventDefault();
    setContextMenu(data);
  };

  return { contextMenu, setContextMenu, contextMenuRef, openContextMenu };
};
