const employee =require("./employee");

class Intern extends employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;