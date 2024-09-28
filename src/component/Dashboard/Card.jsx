import { FaEdit, FaTrash } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const Card = ({ link, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 relative w-64 mx-auto">

      <iframe
        src={link}
        className="w-full h-32" // Reduced height for iframe
        title={link}
        loading="lazy"
        sandbox="allow-same-origin allow-scripts allow-popups"
      ></iframe>
      
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline text-lg font-semibold mt-4 block"
      >
        {link}
      </a>

      <div className="flex mt-4 gap-1">
        <button
          onClick={onEdit}
          className="flex-1 p-2 bg-gray-100 hover:bg-gray-200 rounded-l-md text-center"
          aria-label="Edit"
        >
          <FaEdit className="h-5 w-5 inline-block text-gray-500" /> Edit
        </button>
        <button
          onClick={onDelete}
          className="flex-1 p-2 bg-gray-100 hover:bg-gray-200 rounded-r-md text-center"
          aria-label="Delete"
        >
          <FaTrash className="h-5 w-5 inline-block text-red-500" /> Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
