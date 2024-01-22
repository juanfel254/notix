import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Note as NoteModel } from "@/models/note";
import { formatDate } from "@/utils/formatDate";

interface NoteProps {
  note: NoteModel;
}

const Note: React.FC<NoteProps> = ({ note }) => {
  const { title, text, createdAt, updatedAt } = note;

  return (
    <Card className="flex flex-col justify-between w-full min-w-40 max-w-80 border-black border rounded-lg bg-lime-100 shadow-md hover:cursor-pointer transform hover:scale-105 hover:bg-lime-200 hover:shadow-xl transition-transform ">
      <div className="h-44 overflow-hidden mask-image">
        <CardHeader className="p-3">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="whitespace-pre-line px-3">
          <p>{text}</p>
        </CardContent>
      </div>
      <CardFooter className="p-3 flex flex-col items-start gap-2 text-xs text-slate-500 bg-slate-100 border-t border-t-black rounded-lg rounded-tr-none rounded-tl-none">
        <p>Created: {formatDate(createdAt)}</p>
        <p>Last Updated: {formatDate(updatedAt)}</p>
      </CardFooter>
    </Card>
  );
};

export default Note;
