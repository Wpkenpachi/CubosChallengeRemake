export default interface FileHandler {
    getAll(): any[];
    insert(payload: any): void;
    delete(index: number): void;
    clear(): void;
}