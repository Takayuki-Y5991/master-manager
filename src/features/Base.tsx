import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DynamicFormField,
  InputType,
} from "@/components/utils/DynamicFormField";
import { TrapezoidButton } from "@/components/utils/TrapezoidButton";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import * as v from "valibot";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

// NOTE: Will DELETE
const formSchema = v.object({
  columnA: v.string(),
  columnB: v.string(),
});

const formFields = [
  {
    name: "columnA",
    label: "A column description",
    inputType: "text",
    placeholder: "Enter value for column A",
  },
  {
    name: "columnB",
    label: "B column description",
    inputType: "text",
    placeholder: "Enter value for column B",
  },
];

export const Base = () => {
  const form = useForm({
    resolver: valibotResolver(formSchema),
  });
  const onSubmit = (data: unknown) => {
    console.log(data);
    // Handle form submission
  };
  return (
    <div className="flex justify-between items-start h-screen bg-background　overflow-hidden">
      <div className="flex-grow p-6">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>Target</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {formFields.map((field) => (
                  <DynamicFormField
                    key={field.name}
                    form={form.control}
                    {...field}
                    inputType={field.inputType as InputType}
                  />
                ))}
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col justify-center p-6 space-y-2">
        <TrapezoidButton onClick={() => console.log("Page 1")}>
          1
        </TrapezoidButton>
        <TrapezoidButton onClick={() => console.log("Page 2")}>
          2
        </TrapezoidButton>
        <TrapezoidButton onClick={() => console.log("Page 3")}>
          3
        </TrapezoidButton>
      </div>
    </div>
  );
};
