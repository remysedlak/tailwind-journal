// HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToUploadPage = () => {
    navigate("/upload");
  };

  return (
    <div className="flex flex-col h-screen justify-around items-center p-2 m-2">
      {/* title */}
      <div className="flex flex-row justify-around text-6xl">
        <h1 className="text-purple-600 ">journal</h1>
        <h1 className="text-blue-600">logger</h1>
      </div>
      {/* directions */}
      <ul className="bg-gray-100 border h-2/5 px-2 flex flex-col text-center justify-around rounded text-xl">
        <li>hey there, welcome to j:l</li>
        <li>this app is made to log any thoughts you wish to save for later</li>
        <li>your entries will be stored on your device's browser cache</li>
        <li>feel free to check the about section</li>
      </ul>
      {/* nav button */}
      <button className="hover:bg-blue-200  bg-gray-100 p-2 rounded border "
      onClick={goToUploadPage}>click here to start uploading</button>
    </div>
  );
};
export default Home;