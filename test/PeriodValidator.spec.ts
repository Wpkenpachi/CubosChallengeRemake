import PeriodValidator from "../src/domain/PeriodValidator";

test("Must create a invalid date period", function () {
    const validator = new PeriodValidator();
    const isValid = validator.isValidDatePeriod(new Date("2022-01-02T00:00:00"), new Date("2022-01-01T00:00:00"));
    expect(isValid).toBeFalsy();
});

test("Must create a time period with invalid time string", function () {
    const validator = new PeriodValidator();
    expect(() => validator.isValidTimePeriod("S8:00", "S7:00")).toThrow(new Error("Invalid Time String"));
});

test("Must create a invalid time period", function () {
    const validator = new PeriodValidator();
    const isValid = validator.isValidTimePeriod("08:00", "07:00");
    expect(isValid).toBeFalsy();
});