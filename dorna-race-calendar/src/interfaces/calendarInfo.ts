import { EventRace } from "./eventRace";

export interface CalendarInfo {
    id: string;
    season: number;
    name: string;
    sequence: number;
    dateOfStart: string;
    dateOfEnd: string;
    events: EventRace[];
}