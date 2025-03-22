import React from 'react'
import EntryCard from './EntryCard'

const PastEntries = ({ entries }) => {
    const recentEntries = entries.slice(-3).reverse();
    return (
        <>
            {recentEntries.map((entry, index) => (
                <EntryCard 
                    key={index}
                    title={entry.title}
                    content={entry.text}
                    date={entry.date}
                    onDelete={() => deleteEntry(entries.length - 3 + index)}
                />
            ))}
        </>
    );
};
export default PastEntries;