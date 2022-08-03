import DailySchedule from "../src/domain/DailySchedule";
import Interval from "../src/domain/Interval";
import Period from "../src/domain/Period";
import ScheduleRuleValidator from "../src/domain/ScheduleRuleValidator";
import SingleDaySchedule from "../src/domain/SingleDaySchedule";

test("Must compare conflicting schedule rules center-center conflict", function () {
    const rule1 = new DailySchedule(
        [
            new Interval("08:00", "09:00"),
            new Interval("10:00", "11:00")
        ]
    ).generate(new Period(new Date("2022-08-01T00:00:00"), new Date("2022-08-05T00:00:00")));
    const rule2 = new SingleDaySchedule(
        [
            new Interval("10:10", "10:30")
        ]
    ).generate(new Date("2022-08-03T00:00:00"));
    const isValid = new ScheduleRuleValidator().hasConflictedSchedules(rule1, rule2);
    expect(isValid).toBeTruthy();
});

test("Must compare conflicting schedule rules exact-same conflict", function () {
    const rule1 = new DailySchedule(
        [
            new Interval("08:00", "09:00"),
            new Interval("10:00", "11:00")
        ]
    ).generate(new Period(new Date("2022-08-01T00:00:00"), new Date("2022-08-05T00:00:00")));
    const rule2 = new SingleDaySchedule(
        [
            new Interval("10:00", "11:00")
        ]
    ).generate(new Date("2022-08-03T00:00:00"));
    const isValid = new ScheduleRuleValidator().hasConflictedSchedules(rule1, rule2);
    expect(isValid).toBeTruthy();
});

test("Must compare conflicting schedule rules left-center conflict", function () {
    const rule1 = new DailySchedule(
        [
            new Interval("08:00", "09:00"),
            new Interval("10:00", "11:00")
        ]
    ).generate(new Period(new Date("2022-08-01T00:00:00"), new Date("2022-08-05T00:00:00")));
    const rule2 = new SingleDaySchedule(
        [
            new Interval("07:00", "08:30")
        ]
    ).generate(new Date("2022-08-03T00:00:00"));
    const isValid = new ScheduleRuleValidator().hasConflictedSchedules(rule1, rule2);
    expect(isValid).toBeTruthy();
});

test("Must compare conflicting schedule rules center-right conflict", function () {
    const rule1 = new DailySchedule(
        [
            new Interval("08:00", "09:00"),
            new Interval("10:00", "11:00")
        ]
    ).generate(new Period(new Date("2022-08-01T00:00:00"), new Date("2022-08-05T00:00:00")));
    const rule2 = new SingleDaySchedule(
        [
            new Interval("10:30", "12:00")
        ]
    ).generate(new Date("2022-08-03T00:00:00"));
    const isValid = new ScheduleRuleValidator().hasConflictedSchedules(rule1, rule2);
    expect(isValid).toBeTruthy();
});

test("Must compare non-conflicting schedule rules", function () {
    const rule1 = new DailySchedule(
        [
            new Interval("08:00", "09:00"),
            new Interval("10:00", "11:00")
        ]
    ).generate(new Period(new Date("2022-08-01T00:00:00"), new Date("2022-08-05T00:00:00")));
    const rule2 = new SingleDaySchedule(
        [
            new Interval("11:30", "12:00")
        ]
    ).generate(new Date("2022-08-03T00:00:00"));
    const isValid = new ScheduleRuleValidator().hasConflictedSchedules(rule1, rule2);
    expect(isValid).toBeFalsy();
});