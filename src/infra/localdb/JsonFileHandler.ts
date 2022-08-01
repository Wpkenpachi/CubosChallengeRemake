import FileHandler from "./FileHandler";
import fs from "fs";
import path from "path";

export default class JsonFileHandler implements FileHandler {
    private fileData: any;
    constructor(readonly filename: string){
        const exists = fs.existsSync( path.join(__dirname, this.filename) );
        if (!exists) fs.writeFileSync(`./${this.filename}`, JSON.stringify([]));
        this.fileData = JSON.parse(fs.readFileSync(this.filename).toString());
    }

    getAll(): any[] {
        return this.fileData;
    }

    insert(payload: any): void {
        const arr: any = this.fileData;
        arr.push(payload);
        this.fileData = arr;
        fs.writeFileSync(this.filename, JSON.stringify(this.fileData));
    }

    delete(index: number): void {
        let arr: any = this.fileData;
        arr = (arr as any[]).filter((item, idx) => idx !== index);
        this.fileData = arr;
        fs.writeFileSync(this.filename, JSON.stringify(this.fileData));
    }

    clear(): void {
        fs.writeFileSync(this.filename, JSON.stringify([]));
    }

}