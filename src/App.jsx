import "./tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/Upload";
import HomePage from "./pages/Home";
import EntriesPage from "./pages/Entries";
import WelcomePage from "./pages/WelcomePage";
import { useState, useEffect } from "react";

function App() {
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
  useEffect(() => {
    if (!userName) {
      const storedName = localStorage.getItem("userName");
      if (storedName) {
        setUserName(storedName);
      }
    }
  }, []);
  const handleSaveName = (name) => {
    setUserName(name);
    localStorage.setItem("userName", name);
  };
  return (
    <div className="bg-gray-300 w-screen h-screen flex flex-col text-gray-800 font-mono overflow-hidden">
    <Router>
      <Routes>
        {/* condtional welcome page */}
        <Route path="/" element={userName ? <HomePage userName={userName}/> : <WelcomePage onSaveName={handleSaveName} /> } />
        <Route path="/upload" element={<UploadPage userName={userName} />} />
        <Route path="/entries" element={<EntriesPage />} />
      </Routes>
    </Router>
    </div>
  );
}
export default App;
