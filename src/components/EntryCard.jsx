import React from 'react';

function EntryCard({ title, content, date, onDelete }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  const getShortContent = (text, limit = 20) => {
    if (text.length <= limit) return text;
    return text.substring(0, limit) + '...';
  };

  return (
    <div>
      {/* title */}
      <h2>title: {title}</h2>

      <div className="pb-2 mb-2">
        <li className="bg-gray-100 flex flex-col entry-card border text-md rounded p-2">
          <p>
            text: {isExpanded ? content : getShortContent(content)}
            {!isExpanded && content.length > 20 && (
              <button
                onClick={toggleContent}
                className="text-blue-500 ml-2 underline"
              >
                Expand
              </button>
            )}
            {isExpanded && (
              <button
                onClick={toggleContent}
                className="text-blue-500 ml-2 underline"
              >
                Collapse
              </button>
            )}
          </p>
          <p>date: {date}</p>
        </li>
      </div>
    </div>
  );
}
export default EntryCard;