import Interval from "./Interval";
import Period from "./Period";
import ScheduleBuilder, { Times } from "./ScheduleBuilder";
import dayjs from "../utils/Days";

export default class DailySchedule implements ScheduleBuilder {
    constructor(readonly period: Period, readonly intervals: Interval[]){}

    generate(): Times[] {
        const startDate = dayjs(this.period.startDate);
        const endDate = dayjs(this.period.endDate);
        const diff = endDate.diff(startDate, 'days');
        const times: Times[]= [];
        for (let i = 0; i <= diff; i++) {
            times.push({
                day: i > 0 ? dayjs(this.period.startDate).add(1, 'day').format('DD-MM-YYYY') : dayjs(this.period.startDate).format('DD-MM-YYYY'),
                intervals: this.intervals.map(interval => ({ start: interval.startTime, end: interval.endTime }))
            });
        }
        return times;
    }

}