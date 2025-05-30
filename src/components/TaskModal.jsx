import React from "react";
import { X } from "lucide-react";
import { formatDate } from "../utils/dateUtils";
import { STATUS_COLORS } from "../config/color";

const TaskModal = ({ task, onClose }) => {
  if (!task) return null;

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-96 p-5 rounded-lg shadow relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 hover:bg-gray-200 rounded"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
        <p className="text-sm text-gray-600 mb-4">{task.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-700 mb-2">
          <div className="flex items-center gap-1">
            <span className="font-semibold">Due:</span>
            <span>{formatDate(task.dueDate)}</span>
          </div>
          <span
            className={`px-2 py-0.5 rounded text-xs font-semibold ${
              STATUS_COLORS[task.status]
            }`}
          >
            {task.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
