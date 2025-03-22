import "./tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/Upload";
import HomePage from "./pages/Home";
import EntriesPage from "./pages/Entries";

function App() {
  return (
    <div className="bg-gray-300 w-screen h-screen flex flex-col">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/entries" element={<EntriesPage />} />
      </Routes>
    </Router>
    </div>
  );
}
export default App;
