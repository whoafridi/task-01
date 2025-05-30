import { Ellipsis } from "lucide-react";

const ColumnTitle = ({ title }) => {
  return (
    <div className="flex justify-between p-1">
      <span>{title}</span>
      <button className="hover:bg-gray-200 p-1 rounded-sm">
        <Ellipsis size={16}></Ellipsis>
      </button>
    </div>
  );
};

export default ColumnTitle;
