const Manager = require("../lib/Manager");
const test = new Manager("Jacob", 123123, "123@gmail.com", 321)
describe("Manager", () => {
    describe("Init", () =>{
        it(" should save the values called name, id ,email, and number", () =>{
            expect("name" in test).toEqual(true);
            expect("id" in test).toEqual(true);
            expect("email" in test).toEqual(true);
            expect("number" in test).toEqual(true);
        })
    })
    describe("getRole()", () =>{
        it("should return Manager", ()=>{
            const result = test.getRole();

            expect(result).toEqual("Manager")
        });
        
    })
    describe("getOfficeNumber", ()=>{
        it("should return the value called number", () =>{
            const result = test.getOfficeNumber();

            expect(result).toEqual(321);
        })
    })
});

