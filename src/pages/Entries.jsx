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
    const deleteEntry = (index) => {
        const updatedEntries = entries.filter((_, i) => i !== index);
        setEntries(updatedEntries);
      };
    
    return(
      <div className="flex flex-col items-centers p-5 m-4 ">
          <h1 className="mt-4 text-3xl pb-4">your past entries:</h1>
          <PastEntries
          entries={entries}/>
          <button className="justify-bottom border bg-gray-100  rounded text-center mt-4 text-xl p-1 hover:bg-blue-200"
            onClick={goToHomePage}>
            click here to go back home...
          </button>
      </div>
    )
}
export default Entries