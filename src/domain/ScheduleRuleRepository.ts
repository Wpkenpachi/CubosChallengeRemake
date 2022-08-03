export default interface ScheduleRuleRepository {
    register(payload: any): Promise<void>;
    list(): Promise<any[]>;
    remove(index: number): Promise<void>;
}