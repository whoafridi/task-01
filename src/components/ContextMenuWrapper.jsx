import React from "react";
import ContextMenu from "./ContextMenu";

const ContextMenuWrapper = ({
  contextMenu,
  setContextMenu,
  contextMenuRef,
  currentColumnIndex,
  columns,
  onMoveItem,
}) => {
  if (!contextMenu) return null;

  return (
    <div ref={contextMenuRef}>
      <ContextMenu
        position={{ x: contextMenu.x, y: contextMenu.y }}
        currentColumnIndex={contextMenu.colIndex}
        columns={columns}
        onSelect={(targetIndex) => {
          onMoveItem(targetIndex);
          setContextMenu(null);
        }}
        onClose={() => setContextMenu(null)}
      />
    </div>
  );
};

export default ContextMenuWrapper;
