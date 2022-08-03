import Interval from "../src/domain/Interval";
import Period from "../src/domain/Period";
import WeeklySchedule from "../src/domain/WeeklySchedule";

test("Must create a weekly schedule", function () {
    const period = new Period(new Date("2022-08-01T00:00:00"), new Date("2022-08-10T00:00:00"));
    const weekDays = [1,3];
    const intervals = [
        new Interval("09:00", "10:00"),
        new Interval("12:00", "13:00")
    ];
    const weeklySchedule = new WeeklySchedule(period, weekDays, intervals);
    const schedule = weeklySchedule.generate();
    expect(schedule).toHaveLength(4);
});