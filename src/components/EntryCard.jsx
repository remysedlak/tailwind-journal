import React from 'react';

function EntryCard({ title, content, date, onDelete }) {
  return (
    <li className="bg-gray-100 flex flex-col entry-card border text-lg p-2 rounded">
        <h2>title: {title}</h2>
        <p>text: {content}</p>
        <p>date: {date}</p>
    </li>
  );
}
export default EntryCard;