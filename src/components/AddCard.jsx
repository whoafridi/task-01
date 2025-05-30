import React, { useState } from "react";
import { X, Plus } from "lucide-react";

const AddCard = ({ onAddCard, isNewColumn }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [hasError, setHasError] = useState(false); // validation state

  if (!isNewColumn) return null;

  const handleAdd = () => {
    if (!title.trim()) {
      setHasError(true);
      return;
    }

    onAddCard({
      id: Date.now().toString(),
      title,
      description,
      dueDate,
      status: "New",
    });

    setTitle("");
    setDescription("");
    setDueDate("");
    setIsFormVisible(false);
    setHasError(false);
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setDueDate("");
    setIsFormVisible(false);
    setHasError(false);
  };

  return (
    <div className="">
      {isFormVisible ? (
        <div className="space-y-2">
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (hasError && e.target.value.trim()) setHasError(false);
            }}
            className={`w-full px-3 py-1 rounded-lg bg-white border focus:outline-none focus:ring-2 transition duration-200 ease-in-out ${
              hasError
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            placeholder="Card Title"
          />
          {hasError && (
            <p className="text-sm text-red-600 px-1">Title is required.</p>
          )}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-1 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            rows="2"
            placeholder="Card Description"
          />
          <input
            type="datetime-local"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full px-3 py-1 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          />
          <div className="flex gap-2">
            <button
              onClick={handleAdd}
              className="bg-blue-600 text-white px-3 py-1 rounded cursor-pointer"
            >
              Add
            </button>
            <button
              onClick={handleCancel}
              className="p-1 rounded hover:bg-gray-300 cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsFormVisible(true)}
          className="flex items-center cursor-pointer gap-2 text-sm text-gray-700 hover:bg-gray-200 p-2 rounded"
        >
          <Plus size={16} /> Add a Card
        </button>
      )}
    </div>
  );
};

export default AddCard;
