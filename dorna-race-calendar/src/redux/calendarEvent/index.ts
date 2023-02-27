import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalendarInfo } from "../../interfaces/calendarInfo";
import { EventRace } from "../../interfaces/eventRace";

export interface CalendarInfoState {
    information: CalendarInfo | null;
    filteredRaces: EventRace[] | null;
}

const initialState: CalendarInfoState = {
    information: null,
    filteredRaces: null
}

const calendarInfoSlice = createSlice({
    name: 'calendarInfo',
    initialState: initialState,
    reducers: {
        setCalendarInfo: (state, action: PayloadAction<CalendarInfo | null>) => {
            state.information = action.payload
        },
        setFilteredCalendar: (state, action: PayloadAction<EventRace[] | null>) => {
            state.filteredRaces = action.payload
        }
    }
});

export const {setCalendarInfo, setFilteredCalendar} = calendarInfoSlice.actions;
export default calendarInfoSlice.reducer;