import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalendarInfo } from "../../interfaces/calendarInfo";

export interface CalendarInfoState {
    information: CalendarInfo | null;
}

const initialState: CalendarInfoState = {
    information: null
}

const calendarInfoSlice = createSlice({
    name: 'calendarInfo',
    initialState: initialState,
    reducers: {
        setCalendarInfo: (state, action: PayloadAction<CalendarInfo | null>) => {
            state.information = action.payload
        }
    }
});

export const {setCalendarInfo} = calendarInfoSlice.actions;
export default calendarInfoSlice.reducer;