import React from "react";
import Header from "./components/Header";

function App() {
  return (
    // TODO: change w/h to 550px when removing border
    <div className="w-[554px] h-[554px] mt-10 mx-auto border-2 border-red-700 border-solid">
      <Header />
    </div>
  );
}

export default App;
