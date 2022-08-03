import Schedule from "../../domain/Schedule";
import ScheduleRuleRepository from "../../domain/ScheduleRuleRepository";
import JsonFileHandler from "../localdb/JsonFileHandler";

export default class ScheduleRuleMemoryRepository implements ScheduleRuleRepository {
    private scheduleRules: Schedule[] = [];

    async register(payload: any): Promise<void> {
        this.scheduleRules.push(payload);
    }

    async list(): Promise<any[]> {
        return this.scheduleRules;
    }
    
    async remove(index: number): Promise<void> {
        this.scheduleRules = this.scheduleRules.filter((item, idx) => idx !== index);
    }

}