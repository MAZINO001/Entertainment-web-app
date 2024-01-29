/* eslint-disable react/prop-types */
export default function SearchContainer({ query, onClose, setQuery }) {
  const handleContainerClose = () => {
    onClose();
    setQuery("");
  };

  return (
    <div className=" ">
      Search results for: {query}
      <button onClick={handleContainerClose}>Close</button>
    </div>
  );
}
