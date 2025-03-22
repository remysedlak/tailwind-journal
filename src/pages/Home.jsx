// HomePage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home({ userName }) {
  const navigate = useNavigate();
  const goToUploadPage = () => {
    navigate("/upload");
  };

  const [name, setName] = useState("");

  useEffect(() => {
    setName(userName);
  }, [userName]);

  return (
    <div className="flex flex-col h-screen justify-around items-center p-2 m-2">
      {/* title */}
      <div className="flex flex-row justify-around text-6xl">
        <h1 className="text-purple-600 ">journal</h1>
        <h1 className="text-blue-600">logger</h1>
      </div>
      {/* directions */}
      <ul className="bg-gray-100 p-2 gap-y-6 border flex flex-col text-center justify-around rounded text-xl">
        <li>welcome to jl, {name}</li>
        <li>this app is made to log any thoughts you wish to save for later</li>
        <li>your entries will be stored on your device's browser cache</li>
        <li>feel free to check the about section</li>
      </ul>
      {/* nav button */}
      <button className="hover:bg-blue-200 bg-gray-100 rounded border p-2" onClick={goToUploadPage}>
        click here to start uploading
      </button>
    </div>
  );
}

export default Home;