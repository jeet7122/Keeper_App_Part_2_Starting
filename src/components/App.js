import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
function App() {
  return (
    <div>
      <Header />
      {notes.map((arr) => {
        return <Note key={arr.key} title={arr.title} content={arr.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
