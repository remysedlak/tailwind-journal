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
        }
      };
return (
    
<div className="flex flex-col items-center justify-around py-5 m-4 ">
      <h1 className="text-4xl pb-5">how are you, {userName}?</h1>
      <div className="bg-gray-100 border rounded flex flex-col my-4 p-2 gap-y-4 w-3/4">
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
          className="bg-gray-200 border rounded px-2 mt-2 hover:bg-blue-300" 
          type="button" 
          onClick={addEntry}
        >
          click to save entry
        </button>
      </div>

      <button className="border bg-gray-100  rounded text-center mt-4 text-xl p-1 hover:bg-blue-200"
      onClick={goToUploadPage}>
        click here to view past entries...
      </button>

      <button className="border bg-gray-100  rounded text-center mt-4 text-xl p-1 hover:bg-blue-200"
      onClick={goToHomePage}>
        click here to go back home...
      </button>
    </div>
    )
}
export default UploadPage;