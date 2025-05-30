import { Pencil, Clock, Paperclip, AlignLeft } from "lucide-react";
import { formatDate } from "../utils/dateUtils";
import { STATUS_COLORS } from "../config/color";

const TaskCard = ({ item, onEdit, onContextMenu, onClick }) => {
  return (
    <div
      onClick={onClick}
      onContextMenu={onContextMenu}
      className="group relative p-3 rounded-lg shadow bg-white hover:ring-1 ring-gray-300 ring-offset-0 ring-inset cursor-pointer transition"
    >
      {/* Header: Title + Edit icon */}
      <div
        className={`w-10 h-2 rounded text-xs  ${
          STATUS_COLORS[item.status] || "text-gray-600 bg-gray-600"
        }`}
      ></div>
      <div className="flex justify-between items-start">
        <p className="text-md font-normal text-gray-800">{item.title}</p>
        <button
          onClick={onEdit}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 rounded hover:bg-gray-200"
        >
          <Pencil size={16} />
        </button>
      </div>
      {/* Description */}
      <p className="text-sm text-gray-500">
        {item.description || "No description"}
      </p>
      {/* Footer: Time + Status */}
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-1">
          <Clock size={12} className="text-gray-500" />
          <span className="text-gray-500">{formatDate(item.dueDate)}</span>
        </div>
        <div className="flex items-center gap-1">
          <AlignLeft size={12} className="text-gray-500" />
          <Paperclip size={12} className="text-gray-500" />
          <span className="text-gray-500">2</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
