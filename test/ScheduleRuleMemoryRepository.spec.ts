import DailySchedule from "../src/domain/DailySchedule";
import ScheduleRuleMemoryRepository from "../src/infra/memory/ScheduleRuleMemoryRepository";

test("Must create a schedule rule repository", function () {
    new ScheduleRuleMemoryRepository();
});

test("Must register a schedule rules", async function () {
    const scheduleRepository = new ScheduleRuleMemoryRepository();
    const schedule = new DailySchedule([]);
    await expect(() => scheduleRepository.register(schedule)).not.toThrowError();
});

test("Must list schedule rules", async function () {
    const scheduleRepository = new ScheduleRuleMemoryRepository();
    const schedule = new DailySchedule([]);
    await scheduleRepository.register(schedule);
    const count = await scheduleRepository.list(); 
    expect(count).toHaveLength(1);
});

test("Must remove a schedule rule", async function () {
    const scheduleRepository = new ScheduleRuleMemoryRepository();
    const schedule = new DailySchedule([]);
    await scheduleRepository.register(schedule);
    await expect(() => scheduleRepository.remove(0)).not.toThrowError();
});