export default interface IPeriodValidator {
    isValidTimePeriod(startTime: string, endTime: string): boolean;
    isValidDatePeriod(startDate: Date, endDate: Date): boolean;
}