export default interface ScheduleRuleRepository {
    register(payload: any): Promise<void>;
    list(): Promise<any[]>;
    remove(): Promise<void>;
}