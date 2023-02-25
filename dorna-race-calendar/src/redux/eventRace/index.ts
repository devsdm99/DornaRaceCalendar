import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventRace } from "../../interfaces/eventRace";

export interface EventRaceState {
    selectedEvent: EventRace | null;
}

const initialState: EventRaceState = {
    selectedEvent: null,
}

const eventRaceSlice = createSlice({
    name: 'eventRace',
    initialState: initialState,
    reducers: {
        setSelectedEvent: (state, action: PayloadAction<EventRace | null>) => {
            state.selectedEvent = action.payload
        },
       
    }
});


export const { setSelectedEvent} =  eventRaceSlice.actions;
export default eventRaceSlice.reducer;