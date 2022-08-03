import ScheduleRuleMemoryRepository from "../src/infra/memory/ScheduleRuleMemoryRepository";

test("Must create a schedule rule repository", function () {
    new ScheduleRuleMemoryRepository();
});