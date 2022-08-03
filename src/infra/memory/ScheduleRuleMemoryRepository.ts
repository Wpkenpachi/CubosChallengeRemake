import Schedule from "../../domain/Schedule";
import ScheduleRuleRepository from "../../domain/ScheduleRuleRepository";

export default class ScheduleRuleMemoryRepository implements ScheduleRuleRepository {
    private scheduleRules: Schedule[] = []

    async register(payload: any): Promise<void> {
        
        throw new Error("Method not implemented.");
    }

    async list(): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    
    async remove(): Promise<void> {
        throw new Error("Method not implemented.");
    }

}