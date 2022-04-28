const Intern = require("../lib/assets/js/intern");

test("create a new intern", () => {
    const intern = new Intern("Kayla");

    intern.id = 1111;
    intern.email = "Kayla@mail.com";
    intern.school = "UNC";

    expect(intern.name).toBe("Kayla");
    expect(intern.id).toEqual(expect.any(number));
    expect(intern.email).toBe("Kayla@mail.com");
    expect(intern.school).toBe("UNC");
});