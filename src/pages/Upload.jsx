import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const UploadPage = ({ userName }) => {
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
    
      const [title, setTitle] = useState('');
      const [date, setDate] = useState('');
      const [text, setText] = useState('');
    
      useEffect(() => {
        localStorage.setItem("journalEntries", JSON.stringify(entries));
      }, [entries]);
    
      const addEntry = () => {
        if (title && date && text) {
          const newEntry = { title, date, text };
          const updatedEntries = [...entries, newEntry];
        
          setEntries(updatedEntries);
          setTitle(''); setDate(''); setText('');
          alert("Journal entry saved successfully!");
        } else {
          alert("Please fill out all fields before saving.");
        }
      };
return (
    
<div className="flex flex-col items-center justify-around py-5 bg-orange-200">
      <h1 className="text-4xl pb-5">how are you, {userName}?</h1>
      <div className="bg-orange-50 border rounded flex flex-col my-4 p-2 gap-y-4 md:gap-y-10 w-3/4">
        <h1 className="text-2xl text-center">log your thoughts here :)</h1>
        <input 
          type="text" 
          placeholder="entry title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded"
        />

        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded"
        />

        <textarea 
          placeholder="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          className="p-2 border rounded"
        />

        <button 
          className="bg-orange-100 border rounded px-2 mt-2 hover:bg-blue-300" 
          type="button" 
          onClick={addEntry}
        >
          click to save entry
        </button>
      </div>
    <div className="flex flex-col md:flex-row md:gap-x-4 gap-y-4">
      <button className="border bg-gray-100  rounded text-center mt-4 text-xl p-1 hover:bg-blue-200"
      onClick={goToUploadPage}>
        click here to view past entries...
      </button>

      <button className="border bg-gray-100  rounded text-center mt-4 text-xl p-1 hover:bg-blue-200"
      onClick={goToHomePage}>
        click here to go back home...
      </button>
      </div>
    </div>
    )
}
export default UploadPage;