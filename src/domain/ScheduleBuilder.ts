export default interface ScheduleBuilder {
    build(): Times[]
}

export type Times = {
    day: string;
    intervals: { start: string, end: string }[]
}