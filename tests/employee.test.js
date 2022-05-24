const Employee = require("../lib/assets/js/employee");

test("creates an employee object", () => {
    const employee = new Employee("Bob");
    employee.id = 1111;
    employee.email = "bobbob@mail.com";

    expect(employee.name).toBe("Bob");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe("bobbob@mail.com");
});