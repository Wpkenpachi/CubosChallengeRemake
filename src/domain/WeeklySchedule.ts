import Interval from "./Interval";
import Schedule, { Times } from "./Schedule";
import dayjs from "../utils/Days";
import Period from "./Period";

export default class WeeklySchedule implements Schedule {
    constructor(readonly period: Period, readonly weekDays: number[], readonly intervals: Interval[]){}

    generate(): Times[] {
        const startDate = dayjs(this.period.startDate);
        const endDate   = dayjs(this.period.endDate);
        const diff      = endDate.diff(startDate, 'days');
        const times: Times[] = [];
        for (let i = 0; i <= diff; i++) {
            const day = dayjs(this.period.startDate, "YYYY-MM-DDTHH:mm:ss").add(i, 'day');
            if ( !this.weekDays.includes(day.day()) ) continue;
            times.push({
                day: day.toDate(),
                intervals: this.intervals.map( interval => ({ start: interval.startTime, end: interval.endTime }))
            })
        }
        return times;
    }

}