import React, { useContext, useState, useEffect, useRef } from "react";
import { AppWindow } from "lucide-react";
import { TaskContext } from "../context/TaskContext";

import AddCard from "./AddCard";
import TaskCard from "./TaskCard";
import TaskModal from "./TaskModal";
import ColumnTitle from "./ColumnTitle";
import { useContextMenu } from "../hooks/useContextMenu";
import ContextMenuWrapper from "./ContextMenuWrapper";

const TaskBoard = () => {
  const { allTasks, setAllTasks } = useContext(TaskContext);
  const bdata = allTasks.columns[allTasks.active];

  const { contextMenu, setContextMenu, contextMenuRef, openContextMenu } =
    useContextMenu();
  const [selectedTask, setSelectedTask] = useState(null);

  const handleContextMenu = (e, item, colIndex, itemIndex) => {
    openContextMenu(e, { x: e.pageX, y: e.pageY, item, colIndex, itemIndex });
  };

  const moveItemToColumn = (targetColIndex) => {
    if (!contextMenu) return;
    const { colIndex, itemIndex, item } = contextMenu;

    if (targetColIndex === colIndex) return;

    const updatedTasks = { ...allTasks };
    const currentList = updatedTasks.columns[updatedTasks.active].list;

    const movingItem = currentList[colIndex].items.splice(itemIndex, 1)[0];
    movingItem.status = currentList[targetColIndex].title;

    currentList[targetColIndex].items.push(movingItem);

    setAllTasks(updatedTasks);
    setContextMenu(null);
  };

  return (
    <div className={`w-full bg-[${bdata.bgcolor}]`}>
      <div className="mb-1 pb-2 left-0 right-0 top-0 bottom-0 p-3 grid grid-cols-1 gap-4 lg:grid-cols-3 relative">
        {bdata.list.map((col, colIndex) => (
          <div
            key={colIndex}
            className="w-full h-fit rounded-lg p-2 bg-gray-100"
          >
            <div className="list-body">
              <ColumnTitle title={col.title} />

              <div className="py-1 space-y-1 max-h-[300px] overflow-auto pr-1">
                {col.items.map((item, itemIndex) => (
                  <TaskCard
                    key={item.id || itemIndex}
                    item={item}
                    onEdit={() => console.log("Edit", item)}
                    onClick={() => setSelectedTask(item)}
                    onContextMenu={(e) =>
                      handleContextMenu(e, item, colIndex, itemIndex)
                    }
                  />
                ))}
              </div>
            </div>
            {/* AddCard click */}
            {col.title !== "" && (
              <div className="flex items-center justify-between">
                <AddCard
                  isNewColumn={true}
                  onAddCard={(newCard) => {
                    const updatedTasks = { ...allTasks };
                    updatedTasks.columns[updatedTasks.active].list[
                      colIndex
                    ].items.unshift(newCard);
                    setAllTasks(updatedTasks);
                  }}
                />
                <span className="p-1">
                  <AppWindow size={16} className="text-gray-500 mt-0.5" />
                </span>
              </div>
            )}
          </div>
        ))}

        {selectedTask && (
          <TaskModal
            task={selectedTask}
            onClose={() => setSelectedTask(null)}
          />
        )}
        {/* Context Menu */}
        <ContextMenuWrapper
          contextMenu={contextMenu}
          setContextMenu={setContextMenu}
          contextMenuRef={contextMenuRef}
          currentColumnIndex={contextMenu?.colIndex}
          columns={bdata.list}
          onMoveItem={moveItemToColumn}
        />
      </div>
    </div>
  );
};

export default TaskBoard;
