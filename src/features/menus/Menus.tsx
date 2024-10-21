import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Edit, Info, Trash2 } from "lucide-react";

const ListItem = ({ title }: { title: string }) => (
  <div className="p-4 rounded-lg bg-secondary mb-2 hover:bg-secondary/80 transition-colors flex items-center">
    <span className="flex-grow">{title}</span>
    <Button variant="ghost" size="sm" onClick={() => {}} className="mr-2">
      <Info className="h-4 w-4 mr-1" />
      Details
    </Button>
    <Button variant="ghost" size="sm" onClick={() => {}} className="mr-2">
      <Edit className="h-4 w-4 mr-1" />
      Edit
    </Button>
    <Button variant="ghost" size="sm" onClick={() => {}}>
      <Trash2 className="h-4 w-4 mr-1" />
      Delete
    </Button>
  </div>
);

export const Menus = () => {
  const listItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  return (
    <div className="flex-1 p-6">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Item List</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[calc(100vh-12rem)]">
            {listItems.map((item, index) => (
              <ListItem key={index} title={item} />
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};
