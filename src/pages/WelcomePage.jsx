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
    <div className="flex flex-col items-center h-full w-full justify-around">
      <h1 className="text-6xl">welcome to journallogger</h1>
      {!isSubmitted ? (
        <>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="what's your name?"
              className="text-3xl border border-gray-300 rounded-md text-center"
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