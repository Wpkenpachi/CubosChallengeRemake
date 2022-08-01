export default interface Schedule {
    generate(): Times[]
}

export type Times = {
    day: Date;
    intervals: { start: string, end: string }[]
}