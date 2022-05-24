const employee = require("./employee");

class Engineer extends employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;