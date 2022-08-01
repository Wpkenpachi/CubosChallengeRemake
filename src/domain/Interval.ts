import PeriodValidator from "../utils/PeriodValidator";
import IPeriodValidator from "../utils/interfaces/IPeriodValidator";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

export default class Interval {
    private validator: IPeriodValidator;

    constructor(readonly startTime: string, readonly endTime: string) {
        this.validator = new PeriodValidator();
        if(!this.validator.isValidTimePeriod(startTime, endTime)) throw new Error("Invalid Time Period");
    }

    private extractHour(datetime: string): number {
        return parseInt(datetime.split(":")[0])
    }

    private extractMin(datetime: string): number {
        return parseInt(datetime.split(":")[1])
    }

    isBetweenInterval(targetDate: Date, targetInterval: Interval): boolean {
        const standStartTime    = dayjs(targetDate).hour(this.extractHour(this.startTime)).minute(this.extractMin(this.startTime));
        const standEndTime      = dayjs(targetDate).hour(this.extractHour(this.endTime)).minute(this.extractMin(this.endTime));
        const targetStartTime   = dayjs(targetDate).hour(this.extractHour(targetInterval.startTime)).minute(this.extractMin(targetInterval.startTime));
        const targetEndTime     = dayjs(targetDate).hour(this.extractHour(targetInterval.endTime)).minute(this.extractMin(targetInterval.endTime));
        return  dayjs(targetStartTime).isBetween(standStartTime, standEndTime) ||
                dayjs(targetEndTime).isBetween(standStartTime, standEndTime);
    }
}