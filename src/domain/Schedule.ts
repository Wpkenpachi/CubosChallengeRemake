export default interface Schedule {
    generate(): Times[]
}

export type Times = {
    day: string;
    intervals: { start: string, end: string }[]
}