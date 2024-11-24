
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
function App() {
  return (
    <div>
      <Header />
        //array maps through data file notes to get elements rendered as title and content
      {notes.map((arr) => {
        return <Note key={arr.key} title={arr.title} content={arr.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
