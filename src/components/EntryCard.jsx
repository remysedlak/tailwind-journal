import React from 'react';

function EntryCard({ title, content, date, onDelete }) {
  return (
    <div>
      <h2>title: {title}</h2>
    
    <li className="bg-gray-100 flex flex-col entry-card border text-lg p-2 my-2 rounded">
        
        <p>text: {content}</p>
        <p>date: {date}</p>
    </li>
    </div>
  );
}
export default EntryCard;