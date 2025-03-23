import React from 'react';

function EntryCard({ title, content, date, onDelete }) {
  return (
    <div className="py-2 my-2">
    <div className="flex flex-row justify-between pl-2">
      <h2>title: {title}</h2> 
      <button onClick={onDelete}
      className="position-right text-gray-500 hover:text-red-600">delete</button>
    </div>
    <li className="bg-gray-100 flex flex-col entry-card border text-md rounded p-2">
        <p>text: {content}</p>
        <p>date: {date}</p>
    </li>
    </div>
  );
}
export default EntryCard;