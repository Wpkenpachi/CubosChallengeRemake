import Period from "../src/domain/Period";

test("Must create a period", function() {
    new Period(new Date("2022-01-01T00:00:00"), new Date("2022-01-02T00:00:00"));
});

test("Must create a invalid period", function() {
    expect(() => new Period(new Date("2022-01-02T00:00:00"), new Date("2022-01-01T00:00:00")))
        .toThrow(new Error("Invalid Date Period"));
});