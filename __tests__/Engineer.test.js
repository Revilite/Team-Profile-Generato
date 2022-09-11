const Engineer = require("../lib/Engineer");
const test = new Engineer("Jacob", 123123, "321@gmail.com", "Revilite")
describe("Engineer", () => {
    describe("Init", () =>{
        it(" should save the values called name, id ,email, and github", () =>{
            expect("name" in test).toEqual(true);
            expect("id" in test).toEqual(true);
            expect("email" in test).toEqual(true);
            expect("github" in test).toEqual(true);
        })
})
    describe("getRole", () =>{
        it("should return Engineer", () =>{
            const result = test.getRole();

            expect(result).toEqual("Engineer");
        })
    })
    describe("getGithub", () =>{
        it("should return a value named github", () =>{
            const result = test.getGithub();

            expect(result).toEqual("Revilite");
        })
    })
});

