import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useCallback } from "react";
import { Control, ControllerRenderProps, FieldValues } from "react-hook-form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";

export type InputType =
  | "text"
  | "email"
  | "select"
  | "checkbox"
  | "radio"
  | "textField";

type Option = {
  value: string;
  label: string;
};

type DynamicFormFieldProps = {
  form: Control<FieldValues>;
  name: string;
  label: string;
  inputType: InputType;
  description?: string;
  placeholder?: string;
  options?: Option[];
  rows?: number;
};

export const DynamicFormField = ({
  form,
  name,
  label,
  inputType,
  description,
  placeholder,
  options,
  rows = 3,
}: DynamicFormFieldProps) => {
  const formControl = useCallback(
    (field: ControllerRenderProps<FieldValues, string>): React.ReactNode => {
      switch (inputType) {
        case "text":
        case "email":
          return (
            <Input
              placeholder={placeholder}
              {...field}
              type={inputType}
              className="bg-gray-700 border-gray-600 text-white"
            />
          );
        case "textField":
          return (
            <Textarea
              placeholder={placeholder}
              {...field}
              rows={rows}
              className="bg-gray-700 border-gray-600 text-white"
            />
          );
        case "select":
          return (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          );
        case "checkbox":
          return (
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              className="bg-gray-700 border-gray-600"
            />
          );
        case "radio":
          return (
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              {options?.map((option) => (
                <FormItem
                  className="flex items-center space-x-3 space-y-0"
                  key={option.value}
                >
                  <FormControl>
                    <RadioGroupItem value={option.value} />
                  </FormControl>
                  <FormLabel className="font-normal">{option.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          );
        default:
          return null;
      }
    },
    [inputType, placeholder, options, rows],
  );
  return (
    <FormField
      control={form}
      name={name}
      render={({ field }) => (
        <FormItem
          className={
            inputType === "checkbox"
              ? "flex flex-row items-start space-x-3 space-y-0"
              : undefined
          }
        >
          {inputType !== "checkbox" && <FormLabel>{label}</FormLabel>}
          <FormControl>{formControl(field)}</FormControl>
          <div
            className={
              inputType === "checkbox" ? "space-y-1 leading-none" : undefined
            }
          >
            {inputType === "checkbox" && <FormLabel>{label}</FormLabel>}
            {description && <FormDescription>{description}</FormDescription>}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
