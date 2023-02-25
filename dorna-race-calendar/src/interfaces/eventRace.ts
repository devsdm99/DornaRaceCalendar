import { Circuit } from "./circuit";
import { Schedule } from "./schedule";

export interface EventRace {
    id: String;
    sequence: number;
    code: String;
    shortName: String;
    sponsoredName: String;
    circuit: Circuit;
    schedule: Schedule;
}
