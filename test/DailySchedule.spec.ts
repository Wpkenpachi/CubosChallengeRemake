import DailySchedule from "../src/domain/DailySchedule";
import Interval from "../src/domain/Interval";
import Period from "../src/domain/Period";

test("Must create a daily shcedule", function() {
    const period = new Period(new Date("2022-01-01T00:00:00"), new Date("2022-01-02T00:00:00"));
    const intervals = [
        new Interval("08:00", "09:00"),
        new Interval("09:00", "10:00")
    ];
    const daily = new DailySchedule(period, intervals);
    const generated = daily.generate();
    expect(generated).toEqual([
        {
            day: "01-01-2022",
            intervals: [{start: "08:00", end: "09:00"}, {start: "09:00", end: "10:00"}]
        },
        {
            day: "02-01-2022",
            intervals: [{start: "08:00", end: "09:00"}, {start: "09:00", end: "10:00"}]
        }
    ]);
});