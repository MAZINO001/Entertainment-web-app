/* eslint-disable react/prop-types */

export default function SearchContainer({ query, onClose }) {

  const handleContainerClose = () => {
    onClose();
  };

  return (
    <div className="search-container">
      <button onClick={handleContainerClose}>Close</button>
      Search results for: {query}
    </div>
  );
}
