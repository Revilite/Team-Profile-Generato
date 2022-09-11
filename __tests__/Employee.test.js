const Employee = require("../lib/Employee");

describe("Employee", () => {
    const employee = new Employee("Jacob", 123123, "1312@gmail.com")
    describe("Init", () =>{
        it("should return an object containing a name, id and email", () =>{
            const name = new Employee();
            const id = new Employee();
            const email = new Employee();

            expect("name" in name).toEqual(true);
            expect("id" in id).toEqual(true);
            expect("email" in email).toEqual(true);
            
        })
    })
    
    describe("getName()", () =>{
        it("should return a value named name", () =>{
            const result = employee.getName();
            expect(result).toEqual("Jacob")
        })
    })
    describe("getID()", () =>{
        it("should return a value named id", () =>{
            const result = employee.getId();
            expect(result).toEqual(123123);
    })
})
    describe("getEmail()", () =>{
        it("should return a value named email", () =>{
            const result = employee.getEmail();
            expect(result).toEqual("1312@gmail.com");
        })

    })

    
});
