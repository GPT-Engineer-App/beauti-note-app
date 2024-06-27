import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Note 1", content: "Content of Note 1" },
    { id: 2, title: "Note 2", content: "Content of Note 2" },
    { id: 3, title: "Note 3", content: "Content of Note 3" },
  ]);

  const [currentNote, setCurrentNote] = useState({ id: null, title: "", content: "" });

  const handleAddNote = () => {
    const newNote = { id: Date.now(), title: "", content: "" };
    setCurrentNote(newNote);
  };

  const handleSaveNote = () => {
    if (currentNote.id) {
      setNotes(notes.map(note => (note.id === currentNote.id ? currentNote : note)));
    } else {
      const newNote = { ...currentNote, id: Date.now() };
      setNotes([...notes, newNote]);
      setCurrentNote(newNote);
    }
  };

  const handleNoteClick = (note) => {
    setCurrentNote(note);
  };

  const handleTitleChange = (e) => {
    setCurrentNote({
      ...currentNote,
      title: e.target.value,
    });
  };

  const handleContentChange = (e) => {
    setCurrentNote({
      ...currentNote,
      content: e.target.value,
    });
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-4xl flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {/* Note List Section */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96">
              <div className="space-y-2">
                {notes.map(note => (
                  <div
                    key={note.id}
                    className="p-2 bg-white rounded shadow cursor-pointer"
                    onClick={() => handleNoteClick(note)}
                  >
                    {note.title}
                  </div>
                ))}
              </div>
            </ScrollArea>
            <Button className="mt-4 w-full" onClick={handleAddNote}>Add Note</Button>
          </CardContent>
        </Card>

        {/* Note Editor Section */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Edit Note</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="Note Title"
              className="mb-4"
              value={currentNote.title}
              onChange={handleTitleChange}
            />
            <Textarea
              placeholder="Note Content"
              className="h-64"
              value={currentNote.content}
              onChange={handleContentChange}
            />
            <Button className="mt-4 w-full" onClick={handleSaveNote}>Save Note</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;