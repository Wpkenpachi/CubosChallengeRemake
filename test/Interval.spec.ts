import Interval from "../src/domain/Interval";

test("Must create an Interval", function() {
    new Interval("08:00", "09:00");
});

test("Must create an invalid Interval", function() {
    expect(() => new Interval("10:00", "09:00")).toThrow(new Error("Invalid Time Period"));
});