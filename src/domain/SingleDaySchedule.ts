import Interval from "./Interval";
import Schedule, { Times } from "./Schedule";
import dayjs from "../utils/Days";

export default class SingleDaySchedule implements Schedule {
    days: string[] | number[] = [];
    constructor(readonly intervals: Interval[]){}

    generate(targetDate: Date): Times[] {
        this.days = this.days = [targetDate.toDateString()];
        const day = dayjs(targetDate, "YYYY-MM-DDTHH:mm:ss").toDate();
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