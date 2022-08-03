import Interval from "../src/domain/Interval";
import SingleDaySchedule from "../src/domain/SingleDaySchedule";
import dayjs from "../src/utils/Days";

test("Must crate a single day schedule", function() {
    const targetDate = new Date("2022-01-01T00:00:00");
    const intervals = [
        new Interval("09:00", "10:00")
    ];
    const singleday = new SingleDaySchedule(intervals);
    const [generated] = singleday.generate(targetDate);
    expect(generated).toEqual({
        day: dayjs(targetDate).toDate(),
        intervals: [{start: "09:00", end: "10:00"}]
    });
});