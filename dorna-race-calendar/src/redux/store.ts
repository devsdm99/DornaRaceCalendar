import {configureStore} from '@reduxjs/toolkit';
import eventRaceSlice from './eventRace/index';
import calendarInfoSlice from './calendarEvent/index';
const store = configureStore({
    reducer: {
        eventRace: eventRaceSlice,
        calendarInfo: calendarInfoSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;