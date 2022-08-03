import Interval from "./Interval";
import { Times } from "./Schedule";

export default class ScheduleRuleValidator {
    hasConflictedSchedules(firstRule: Times[], secondRule: Times[]): boolean {
        // Times[] ->  { day: Date, intervals:[{start: "08:00", end: "09:00"}, {{start: "09:00", end: "09:10" }}] }
        return firstRule.some(rule1 => {
            //console.log('=============================================================');
            //console.log(`Day ${d1+1}`);
            return secondRule.some(rule2 => {
                const conflictingDates = rule1.day.getTime() == rule2.day.getTime();
                //console.log(`Dates [${conflictingDates}]`, rule1.day.toLocaleDateString(), ' == ', rule2.day.toLocaleDateString());
                return conflictingDates && rule1.intervals.some( interval1 => {
                    return rule2.intervals.some(interval2 => {
                        const conflictingTimes = (new Interval(interval1.start, interval1.end).isBetweenInterval(rule2.day, new Interval(interval2.start, interval2.end)))
                        //console.log(`Times [${conflictingTimes}]`, `|${rule2.day.getDate()}|`, interval1.start, interval1.end, '=>', interval2.start, interval2.end);
                        return conflictingTimes;
                    })
                });
            });
        });
    }
}