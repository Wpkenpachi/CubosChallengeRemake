import JsonFileHandler from "../src/infra/localdb/JsonFileHandler";

let jsonHandler: any;
beforeEach(() => {
    jsonHandler = new JsonFileHandler('database.json');
    jsonHandler.clear();
});

test("Must load a json file", function() {
    const jsonHandler = new JsonFileHandler('database.json');
    expect(jsonHandler.getAll()).toHaveLength(0);
});

test("Must insert new item to json file", function() {
    const jsonHandler = new JsonFileHandler('database.json');
    const obj = {a: 1};
    jsonHandler.insert(obj);
    jsonHandler.insert(obj);
    expect(jsonHandler.getAll()).toHaveLength(2);
});

test("Must remove the item of index 1 in json file", function() {
    const jsonHandler = new JsonFileHandler('database.json');
    jsonHandler.insert({n: 1});
    jsonHandler.insert({n: 2});
    jsonHandler.insert({n: 3});
    jsonHandler.delete(1)
    console.log(jsonHandler.getAll());
    expect(jsonHandler.getAll()[1]).toEqual({n: 3});
});