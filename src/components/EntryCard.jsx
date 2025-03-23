import React from 'react';

function EntryCard({ title, content, date, onDelete }) {
  return (
    <div>
      {/* title */}
      <h2>title: {title}</h2>

        
    <div className="pb-2 mb-2">
    <li className="bg-gray-100 flex flex-col entry-card border text-md rounded p-2">
        <p>text: {content}</p>
        <p>date: {date}</p>
    </li>
    </div>
    </div>

  );
}
export default EntryCard;