import React from 'react';

function EntryCard({ title, content, date, onDelete }) {
  return (
<<<<<<< HEAD
    <div>
      <h2>title: {title}</h2>
    
    <li className="bg-gray-100 flex flex-col entry-card border text-lg p-2 my-2 rounded">
        
=======
    <div className="py-2 my-2">
    <div className="flex flex-row justify-between pl-2">
      <h2>title: {title}</h2> 
      <button onClick={onDelete}
      className="position-right text-gray-500 hover:text-red-600">delete</button>
    </div>
    <li className="bg-gray-100 flex flex-col entry-card border text-md rounded p-2">
>>>>>>> 20e4749d6f39e03387f10c80e35df8ec9e7bbe83
        <p>text: {content}</p>
        <p>date: {date}</p>
    </li>
    </div>
  );
}
export default EntryCard;