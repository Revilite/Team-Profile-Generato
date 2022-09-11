class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

  }
  
  printinfo(){
    console.log(this.name, this.id, this.email)
  }
}

module.exports = Employee;
