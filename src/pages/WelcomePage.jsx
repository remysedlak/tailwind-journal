import { useState } from "react";

const WelcomePage = ({ onSaveName }) => {
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveName(name);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center h-full w-full justify-around p-2 text-center">
      <div className="flex flex-row justify-around text-6xl">
        <h1>welcome to&nbsp;</h1>
        <h1 className="text-purple-600 ">journal</h1>
        <h1 className="text-blue-600">logger</h1>
      </div>
      <p className="text-3xl/15 text-gray-700 w-1/2">we are happy to have you here!<br/>
      let's get started with your first name.</p>
      {!isSubmitted ? (
        <>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="enter name here :)"
              className="text-3xl text-center pb-4"
            />
          </form>
        </>
      ) : (
        <p className="mt-4 text-lg">Thank you, {name}! Your name has been saved.</p>
      )}
    </div>
  );
};

export default WelcomePage;