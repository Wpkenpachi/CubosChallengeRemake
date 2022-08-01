import Interval from "../src/domain/Interval";

test("Must create an Interval", function() {
    new Interval("08:00", "09:00");
});

test("Must create an invalid Interval", function() {
    expect(() => new Interval("10:00", "09:00")).toThrow(new Error("Invalid Time Period"));
});

test("Must validate left-center crossing interval", function () {
    const defaultInterval   = new Interval("08:00", "10:00");
    const targetDate        = new Date("2022-01-01T00:00:00");
    const targetInterval    = new Interval("07:30", "09:00");
    expect(defaultInterval.isBetweenInterval(targetDate, targetInterval)).toBeTruthy();
});

test("Must validate center-center crossing interval", function () {
    const defaultInterval   = new Interval("08:00", "10:00");
    const targetDate        = new Date("2022-01-01T00:00:00");
    const targetInterval    = new Interval("08:30", "09:00");
    expect(defaultInterval.isBetweenInterval(targetDate, targetInterval)).toBeTruthy();
});

test("Must validate center-right crossing interval", function () {
    const defaultInterval   = new Interval("08:00", "10:00");
    const targetDate        = new Date("2022-01-01T00:00:00");
    const targetInterval    = new Interval("08:30", "11:00");
    expect(defaultInterval.isBetweenInterval(targetDate, targetInterval)).toBeTruthy();
});

test("Must validate non-crossing interval", function () {
    const defaultInterval   = new Interval("08:00", "10:00");
    const targetDate        = new Date("2022-01-01T00:00:00");
    const targetInterval    = new Interval("11:00", "11:30");
    expect(defaultInterval.isBetweenInterval(targetDate, targetInterval)).toBeFalsy();
});