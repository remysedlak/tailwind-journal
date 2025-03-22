import React from 'react';

function EntryCard({ title, content, date, onDelete }) {
  return (
    <li className="bg-gray-100 flex flex-col entry-card border text-lg justify-left p-2 rounded">
      <div className="flex flex-col justify-left">
        <h2>title: {title}</h2>
        <p>text: {content}</p>
        <p>date: {date}</p>
        
      </div>
    </li>
    
  );
}
export default EntryCard;