import React from "react";
// import ".../src/index.js";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import New from "./New";
import notes from "../notes";

function createEntry(note) {
  return (
    <Note 
      key={note.key}
      title={note.title}
      content={note.content}
    />
  )
}

export default function App() {
  return (
    <div className="App">
      <Header />
      {/* <New /> */}
      {notes.map(createEntry)}
      <Footer />
    </div>
  );
}