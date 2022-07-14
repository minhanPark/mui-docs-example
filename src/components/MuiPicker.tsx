import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";
import { Stack, TextField } from "@mui/material";
import { useState } from "react";

export const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  console.log({ selectedDateTime });
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        renderInput={(params: any) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue: any) => {
          setSelectedDate(newValue);
        }}
      />
      <TimePicker
        label="Time Picker"
        renderInput={(params: any) => <TextField {...params} />}
        value={selectedTime}
        onChange={(newValue: any) => {
          setSelectedTime(newValue);
        }}
      />
      <DateTimePicker
        label="Date Time Picker"
        renderInput={(params: any) => <TextField {...params} />}
        value={selectedDateTime}
        onChange={(newValue: any) => {
          setSelectedDateTime(newValue);
        }}
      />
    </Stack>
  );
};
