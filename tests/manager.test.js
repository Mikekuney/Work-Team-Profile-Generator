const Manager = require("../lib/assets/js/manager");

test("creates a new manager object", () => {

    const manager = new Manager("Dillan");
    manager.id = 1111;
    manager.email = "Dillan@mail.com";
    manager.officeNumber = "123-456-7890";

    expect(manager.name).toBe("Dillan");
    expect(manager.id).toEqual(expect.any(number));
    expect(manager.email).toBe("Dillan@mail.com");
    expect(manager.officeNumber).toEqual(expect.any(number));
});