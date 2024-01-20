import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Note as NoteModel } from "@/models/note";

interface NoteProps {
  note: NoteModel;
}

const Note: React.FC<NoteProps> = ({ note }) => {
  const { title, text, createdAt, updatedAt } = note;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{text}</p>
      </CardContent>
      <CardFooter>
        <p>Created: {createdAt}</p>
        <p>Last Updated: {updatedAt}</p>
      </CardFooter>
    </Card>
  );
};

export default Note;
