import IScheduleTimePeriodValidator from "./interfaces/IPeriodValidator";
import dayjs from "./Days";

export default class PeriodValidator implements IScheduleTimePeriodValidator {
    
    isValidTimePeriod(startTime: string, endTime: string): boolean {
        if (!this.isValidTimeString(startTime) || !this.isValidTimeString(endTime)) throw new Error("Invalid Time String");
        const start_time    = dayjs(new Date(`2000-01-01T${startTime}:00`), "HH:mm");
        const end_time      = dayjs(new Date(`2000-01-01T${endTime}:00`), "HH:mm");
        return start_time < end_time ;
    }

    private isValidTimeString(time: string): boolean {
        const rgx = new RegExp("^[0-9]{2}\:[0-9]{2}$", "gm");
        return time.match(rgx) as unknown as boolean
    }
    
    isValidDatePeriod(startDate: Date, endDate: Date): boolean {
        return startDate.getDate() < endDate.getDate();
    }
}