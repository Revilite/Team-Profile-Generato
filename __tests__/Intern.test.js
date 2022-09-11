const Intern = require("../lib/Intern");
const test = new Intern("Jacob", 123123, "098@gmail.com", "UNCC")
describe("Intern", () => {
    describe("Init", () =>{
        it(" should save the values called name, id ,email, and school", () =>{
            expect("name" in test).toEqual(true);
            expect("id" in test).toEqual(true);
            expect("email" in test).toEqual(true);
            expect("school" in test).toEqual(true);
        })
    })
    describe("getRole()", () =>{
        it("Should return Intern", () =>{
            const result = test.getRole();

            expect(result).toEqual("Intern");
        })
    })
    describe("getSchool()", () =>{
        it("Should return a value called school", () =>{
            const result = test.getSchool();

            expect(result).toEqual("UNCC");
        })
    })
});
