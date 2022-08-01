import Interval from "./Interval";
import Schedule, { Times } from "./Schedule";
import dayjs from "../utils/Days";

export default class SingleDaySchedule implements Schedule {
    constructor(readonly targetDate: Date, readonly intervals: Interval[]){}

    generate(): Times[] {
        const day = dayjs(this.targetDate, "YYYY-MM-DDTHH:mm:ss").toDate();
        let time: Times = {
            day,
            intervals: []
        };
        this.intervals.forEach(interval => {
            time.intervals.push({ start: interval.startTime, end: interval.endTime });
        });

        return [time];
    }
}