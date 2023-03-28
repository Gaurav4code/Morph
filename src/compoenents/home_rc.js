import react from "react";

const HomeRC = () => {
  return (
    <>
      <div className="main--container border-solid border-2 border-sky-500 h-screen w-full text-left p-2 flex flex-col items-center justify-center bg-red-500">
        <div className="main--title border-solid border-2 border-red-200">
          <h1 id="tmain " className="  ">
            Art + Design + Technology
          </h1>
          <p id="subtitle">
            We blend your stories with future tech, to create engaging and
            immersive experiences.
          </p>

          <div className="icon--container p-20">
            <p>Icons here </p>
          </div>

          <div className="button-main bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRC;
