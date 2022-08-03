import Interval from "./Interval";
import Period from "./Period";

type dailyGenerator     = (period: Period) => Times[];
type weeklyGenerator    = (targetDate: Date) => Times[];
type singleDayGenerator = (period: Period, weekDays: number[]) => Times[];
export default interface Schedule {
    days?: string[] | number[],
    intervals: Interval[],
    generate: dailyGenerator | weeklyGenerator | singleDayGenerator;
}

export type Times = {
    day: Date;
    intervals: { start: string, end: string }[]
}