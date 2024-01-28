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
    <Card className="flex flex-col flex-grow-0 justify-between w-full min-w-40 max-w-80 rounded-lg bg-amber-50 shadow-md hover:cursor-pointer transform hover:scale-105 hover:bg-amber-100 hover:shadow-xl hover:animate-spin transition-transform ">
      <div className="h-44 overflow-hidden mask-image">
        <CardHeader className="p-5">
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="whitespace-pre-line px-5 text-sm">
          <p>{text}</p>
        </CardContent>
      </div>
      <CardFooter className="px-5 py-3 flex flex-col items-start gap-1 text-xs text-muted-foreground bg-muted border-t border-t-muted-foreground rounded-lg rounded-tr-none rounded-tl-none">
        <p>Created: {formatDate(createdAt)}</p>
        <p>Last Updated: {formatDate(updatedAt)}</p>
      </CardFooter>
    </Card>
  );
};

export default Note;
