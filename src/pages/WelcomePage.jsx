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
    <div className="flex flex-col items-center h-full w-full lg:justify-around p-2 text-center gap-y-20 lg:gap-y-5">
      {/* Title */}
      <div className="flex lg:flex-row flex-col justify-around text-3xl lg:text-6xl">
        <h1>welcome to&nbsp;</h1>
        <div className="flex flex-row">
          <h1 className="text-purple-600 ">journal</h1><h1 className="text-blue-600">logger</h1>
        </div>
      </div>

      {/* Paragraph */}
      <p className="lg:text-3xl/15 text-xl text-gray-700 lg:w-1/2 w-3/4 mt-3">we are happy to have you here!<br/>
      let's get started with your first name.</p>
      {/* name */}
      {!isSubmitted ? (
        <>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="enter name here :)"
              className="lg:text-3xl text-xl text-center my-8"
            />
            <button type="submit" className="mt-4 px-4 py-2  w-full text-black border rounded-lg lg:text-2xl text-lg hover:bg-gray-200">
              submit
            </button>
          </form>
        </>
      ) : (
        <p className="mt-4 text-lg">Thank you, {name}! Your name has been saved.</p>
      )}
    </div>
  );
};

export default WelcomePage;