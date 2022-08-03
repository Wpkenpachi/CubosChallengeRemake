import Schedule from "../../domain/Schedule";
import ScheduleRuleRepository from "../../domain/ScheduleRuleRepository";
import JsonFileHandler from "../localdb/JsonFileHandler";

export default class ScheduleRuleFileRepository implements ScheduleRuleRepository {
    private filehandler: JsonFileHandler;

    constructor(readonly filename: string) {
        this.filehandler = new JsonFileHandler(filename);
    }

    async register(payload: any): Promise<void> {
        this.filehandler.insert(payload);
    }

    async list(): Promise<any[]> {
        return this.filehandler.getAll();
    }
    
    async remove(index: number): Promise<void> {
        this.filehandler.delete(index);
    }

}