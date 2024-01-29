/* eslint-disable react/prop-types */
import { FaXmark } from "react-icons/fa6";
export default function SearchContainer({ query, onClose, setQuery }) {
  const handleContainerClose = () => {
    onClose();
    setQuery("");
  };

  return (
    <div className="flex aitetms-center justify-between">
      <h2 className="title mt-2">Found 999 results for '{query}'</h2>
      <button onClick={handleContainerClose} className="text-lg">
        <FaXmark />
      </button>
    </div>
  );
}
