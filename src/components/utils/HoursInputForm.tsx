import React from "react";
import { useForm, Controller } from "react-hook-form";
import TimePicker from "react-time-picker";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

import "react-time-picker/dist/TimePicker.css";

interface HoursInputFormProps {
  onSubmit: (data: unknown) => void;
  defaultValues?: {
    pattern: string;
    time?: { start: string; end: string };
    schedule?: {
      [key: string]: { start: string; end: string };
    };
  };
}

export const HoursInputForm: React.FC<HoursInputFormProps> = ({
  defaultValues,
  onSubmit,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { control, watch, setValue, handleSubmit } = useForm({
    defaultValues: defaultValues || {
      pattern: "no-time",
      time: { start: "00:00", end: "23:59" },
      schedule: {
        mon: { start: "00:00", end: "23:59" },
        tue: { start: "00:00", end: "23:59" },
        wed: { start: "00:00", end: "23:59" },
        thu: { start: "00:00", end: "23:59" },
        fri: { start: "00:00", end: "23:59" },
        sat: { start: "00:00", end: "23:59" },
        sun: { start: "00:00", end: "23:59" },
      },
    },
  });

  const timePattern = watch("pattern");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="w-full bg-background border-slate-800">
        <CardContent className="pt-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Controller
                name="pattern"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    onValueChange={(value) => field.onChange(value)}
                    value={field.value}
                    className="flex gap-6"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no-time" id="no-time" />
                      <Label
                        htmlFor="no-time"
                        className="text-sm cursor-pointer"
                      >
                        時間設定なし
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="fixed-time" id="fixed-time" />
                      <Label
                        htmlFor="fixed-time"
                        className="text-sm cursor-pointer"
                      >
                        固定時間
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem
                        value="flexible-time"
                        id="flexible-time"
                      />
                      <Label
                        htmlFor="flexible-time"
                        className="text-sm cursor-pointer"
                      >
                        曜日別設定
                      </Label>
                    </div>
                  </RadioGroup>
                )}
              />
            </div>

            {timePattern === "fixed-time" && (
              <div className="flex items-center gap-4 bg-slate-900/50 p-3 rounded-md">
                <Label className="text-sm">営業時間</Label>
                <div className="flex items-center gap-2">
                  <Controller
                    name="time.start"
                    control={control}
                    render={({ field }) => (
                      <TimePicker
                        onChange={(value) => field.onChange(value)}
                        value={field.value}
                        format="HH:mm"
                        disableClock={true}
                        className="bg-background border border-slate-700 rounded-md px-2 py-1 text-sm"
                      />
                    )}
                  />
                  <span className="text-sm">〜</span>
                  <Controller
                    name="time.end"
                    control={control}
                    render={({ field }) => (
                      <TimePicker
                        onChange={(value) => field.onChange(value)}
                        value={field.value}
                        format="HH:mm"
                        disableClock={true}
                        className="bg-background border border-slate-700 rounded-md px-2 py-1 text-sm"
                      />
                    )}
                  />
                </div>
              </div>
            )}

            {timePattern === "flexible-time" && (
              <div className="space-y-2">
                <Label className="text-sm">曜日別営業時間</Label>
                <div className="grid grid-cols-7 gap-2 bg-slate-900/50 p-3 rounded-md">
                  {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map(
                    (day, index) => (
                      <div key={day} className="space-y-1">
                        <div className="text-sm font-medium text-center">
                          {["月", "火", "水", "木", "金", "土", "日"][index]}
                        </div>
                        <Controller
                          name={`schedule.${day}.start`}
                          control={control}
                          render={({ field }) => (
                            <TimePicker
                              onChange={(value) => field.onChange(value)}
                              value={field.value}
                              format="HH:mm"
                              disableClock={true}
                              className="w-full bg-background border border-slate-700 rounded-md px-1 py-1 text-xs"
                            />
                          )}
                        />
                        <div className="text-xs text-center text-slate-400">
                          〜
                        </div>
                        <Controller
                          name={`schedule.${day}.end`}
                          control={control}
                          render={({ field }) => (
                            <TimePicker
                              onChange={(value) => field.onChange(value)}
                              value={field.value}
                              format="HH:mm"
                              disableClock={true}
                              className="w-full bg-background border border-slate-700 rounded-md px-1 py-1 text-xs"
                            />
                          )}
                        />
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </form>
  );
};
