import React from 'react'
import EntryCard from './EntryCard'

const PastEntries = ({ entries }) => {
return (
    <ul className="text-md gap-y-2 flex-grid">
        {entries.map((entry, index) => (
        <EntryCard 
            key={index}
            title={entry.title}
            content={entry.text}
            date={entry.date}
            onDelete={() => deleteEntry(index)}
        />
        ))}
    </ul>

);
};
export default PastEntries;