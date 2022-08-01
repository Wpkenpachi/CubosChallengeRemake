import Interval from "./Interval";
import ScheduleBuilder, { Times } from "./ScheduleBuilder";
import dayjs from "../utils/Days";

export default class SingleDaySchedule implements ScheduleBuilder {
    constructor(readonly targetDate: Date, readonly intervals: Interval[]){}

    generate(): Times[] {
        const day = dayjs(this.targetDate).format('DD-MM-YYYY');
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