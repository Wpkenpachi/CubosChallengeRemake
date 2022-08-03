import DailySchedule from "../src/domain/DailySchedule";
import ScheduleRuleMemoryRepository from "../src/infra/memory/ScheduleRuleMemoryRepository";

test("Must create a schedule rule repository", function () {
    new ScheduleRuleMemoryRepository();
});

test("Must register a schedule rules", async function () {
    const scheduleRepository = new ScheduleRuleMemoryRepository();
    // const schedule = {};
    // scheduleRepository.register();
    // await expect(() => {}).toHaveLength(0);
});

test("Must list schedule rules", async function () {
    const scheduleRepository = new ScheduleRuleMemoryRepository();
    await expect(() => scheduleRepository.list()).toHaveLength(0);
});