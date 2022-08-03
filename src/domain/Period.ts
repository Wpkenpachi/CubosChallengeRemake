import PeriodValidator from "./PeriodValidator";
import IPeriodValidator from "../utils/interfaces/IPeriodValidator";

export default class Period {
    private validator: IPeriodValidator;

    constructor(readonly startDate: Date, readonly endDate: Date) {
        this.validator = new PeriodValidator();
        if(!this.validator.isValidDatePeriod(startDate, endDate)) throw new Error("Invalid Date Period");
    }
}