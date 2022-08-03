import Interval from "./Interval";
import Schedule, { Times } from "./Schedule";
import dayjs from "../utils/Days";
import Period from "./Period";

export default class WeeklySchedule implements Schedule {
    days: string[] | number[] = [];
    constructor(readonly intervals: Interval[]){}

    generate(period: Period, weekDays: number[]): Times[] {
        this.days = weekDays;
        const startDate = dayjs(period.startDate);
        const endDate   = dayjs(period.endDate);
        const diff      = endDate.diff(startDate, 'days');
        const times: Times[] = [];
        for (let i = 0; i <= diff; i++) {
            const day = dayjs(period.startDate, "YYYY-MM-DDTHH:mm:ss").add(i, 'day');
            if ( !weekDays.includes(day.day()) ) continue;
            times.push({
                day: day.toDate(),
                intervals: this.intervals.map( interval => ({ start: interval.startTime, end: interval.endTime }))
            })
        }
        return times;
    }

}