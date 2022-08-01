import PeriodValidator from "../utils/PeriodValidator";
import IPeriodValidator from "../utils/interfaces/IPeriodValidator";

export default class Interval {
    private validator: IPeriodValidator;

    constructor(readonly startTime: string, readonly endTime: string) {
        this.validator = new PeriodValidator();
        if(!this.validator.isValidTimePeriod(startTime, endTime)) throw new Error("Invalid Time Period");
    }
}