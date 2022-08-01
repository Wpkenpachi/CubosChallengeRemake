export default interface ScheduleBuilder {
    generate(): Times[]
}

export type Times = {
    day: string;
    intervals: { start: string, end: string }[]
}