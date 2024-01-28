import { useEffect, useState } from "react";
import { Note as NoteModel } from "./models/note";
import * as NotesApi from "@/network/notes_api";
import Note from "./components/Note";
import AddNote from "./components/AddNote";
import { Toaster } from "./components/ui/toaster";

function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);

  useEffect(() => {
    async function loadNotes() {
      try {
        const notes = await NotesApi.fetchNotes();
        setNotes(notes);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadNotes();
  }, []);

  return (
    <main className="p-4 flex flex-col justify-center items-center">
      <AddNote />
      <section className="m-5 w-full flex flex-wrap gap-5 justify-center xl:max-w-5xl xl:justify-start">
        {notes.map((note) => (
          <Note note={note} key={note._id} />
        ))}
      </section>
      <Toaster />
    </main>
  );
}

export default App;
