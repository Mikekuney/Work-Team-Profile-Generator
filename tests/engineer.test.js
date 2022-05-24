const Engineer = require("../lib/assets/js/engineer");

test("creates a new engineer", () => {
    const engineer = new Engineer("Richard");

    engineer.id = 1111;
    engineer.email = "richard@mail.com";
    engineer.github = "richard2";

    expect(engineer.name).toBe("Richard");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe("richard@mail.com");
    expect(engineer.github).toBe("richard2");
});