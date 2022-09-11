const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, number) {
    super(name, id, email);
    this.number = number;
  }

  getName(){
    return this.name;
  }

  getRole(){
    return "Manager"
  }

  getId(){
    return this.id;
  }

  getEmail(){
    return this.email;
  }

  getOfficeNumber(){
    return this.number;
  }
}

module.exports = Manager;
