import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerCom() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer   components={['DatePicker']}>
           
            <DatePicker label="Appointment Book" 
            sx={{
              '& input': {
                height: '20px', // Set the desired height here
              },
            }}
            />
      </DemoContainer>
    </LocalizationProvider>
  );
}