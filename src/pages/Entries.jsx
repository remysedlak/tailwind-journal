import react from 'react'
import PastEntries from '../components/PastEntries'
import { useState } from 'react'
import EntryCard from '../components/EntryCard'
import { useNavigate } from 'react-router-dom'

const Entries = () => {
  const navigate = useNavigate();
    const goToUploadPage = () => {
      navigate("/entries");
    };
    const goToHomePage = () => {
      navigate("/");
    };
    const [entries, setEntries] = useState(() => {
            const savedEntries = localStorage.getItem("journalEntries");
            return savedEntries ? JSON.parse(savedEntries) : [];
          });
    
    const [isSearching, setSearching] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const deleteEntry = (index) => {
        const updatedEntries = entries.filter((_, i) => i !== index);
        setEntries(updatedEntries);
      };
    
    return(
      <div className="flex flex-col items-centers p-5 m-4 ">
          {/* title */}
          <h1 className="mt-4 text-3xl pb-4">{isSearching ? `Search results: `+ searchQuery: `your recent entries:`}</h1>
          {/* shows recent entries or search results */}
          {isSearching ? entries.filter((entry) => entry.title.toLowerCase().includes(searchQuery.toLowerCase())).map((entry, index) => (
            <EntryCard
                key={index}
                title={entry.title}
                content={entry.text}
                date={entry.date}
                onDelete={() => deleteEntry(index)} 
            />
          )) : entries.slice(-3).reverse().map((entry, index) => (
            <EntryCard
                key={index}
                title={entry.title}
                content={entry.text}
                date={entry.date}
                onDelete={() => deleteEntry(entries.length - 3 + index)}
            />
          ))}
          
          {/* search bar */}
          <input 
            type="text" 
            placeholder="search for entries" 
            value={searchQuery} 
            onChange={(e) =>{ setSearchQuery(e.target.value); searchQuery == '' ? setSearching(true): setSearching(false);}}
            className="p-2 border rounded mt-2 text-center"
          />
          {/* nav button */}
          <button className="justify-bottom border bg-gray-100 rounded text-center mt-2 text-xl p-2 hover:bg-blue-200"
            onClick={goToHomePage}>
            click here to go back home...
          </button>
      </div>
    )
}
export default Entries