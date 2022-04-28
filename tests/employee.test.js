const Employee = require("../lib/assets/js/employee");

test("creates an employee object", () => {
    const employee = new Employee("Bob");
    employee.id = 0001;
    employee.email = "bobbob@mail.com";

    expect(employee.name).toBe("Bob");
    expect(employee.id).toBe(0001);
    expect(employee.email).toBe("bobbob@mail.com");
});