import { useEffect, useState } from "react";
import { Note as NoteModel } from "./models/note";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);

  useEffect(() => {
    async function loadNotes() {
      try {
        const response = await fetch("/api/notes", {
          method: "GET",
        });
        const notes = await response.json();
        setNotes(notes);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadNotes();
  }, []);

  return (
    <section className="m-5 flex flex-wrap gap-5 justify-center">
      {notes.map((note) => (
        <Note note={note} key={note._id} />
      ))}
    </section>
  );
}

export default App;
