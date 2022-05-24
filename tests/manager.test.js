const Manager = require("../lib/assets/js/manager");

test("creates a new manager object", () => {

    const manager = new Manager("Dillan");
    manager.id = 1111;
    manager.email = "Dillan@mail.com";
    manager.officeNumber = 1111;

    expect(manager.name).toBe("Dillan");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe("Dillan@mail.com");
    expect(manager.officeNumber).toEqual(expect.any(Number));
});