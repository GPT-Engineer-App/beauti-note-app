import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
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
              {/* Placeholder for note items */}
              <div className="space-y-2">
                <div className="p-2 bg-white rounded shadow">Note 1</div>
                <div className="p-2 bg-white rounded shadow">Note 2</div>
                <div className="p-2 bg-white rounded shadow">Note 3</div>
              </div>
            </ScrollArea>
            <Button className="mt-4 w-full">Add Note</Button>
          </CardContent>
        </Card>

        {/* Note Editor Section */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Edit Note</CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="Note Title" className="mb-4" />
            <Textarea placeholder="Note Content" className="h-64" />
            <Button className="mt-4 w-full">Save Note</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;