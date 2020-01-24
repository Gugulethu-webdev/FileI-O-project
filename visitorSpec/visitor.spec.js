let test = require("../src/File");
let fs = require("fs");
describe("visitor class functionality", ()=>{
    let Lwazi = new test.Visitor("Lwazi Mtshali", 26, "12/02/1994", "12:30", "Awesome","Tadiwa");
    Lwazi.save();
    let obj = {
        fullName : "Lwazi Mtshali",
        age : 26,
        date : "12/02/1994",
        time : "12:30",
        comments : "Awesome",
        assistent : "Tadiwa"
    }
    it ("checks if the save() functionality works", ()=>{
        Lwazi.save()
        expect(Lwazi.save).toBeDefined()
    });
    it("checks if the data matches",()=>{
        let ObjArr = Object.values(obj);
        expect(ObjArr[0]).toEqual("Lwazi Mtshali");
        expect(ObjArr[1]).toEqual(26);
        expect(ObjArr[2]).toEqual("12/02/1994");
        expect(ObjArr[3]).toEqual("12:30");
        expect(ObjArr[4]).toEqual("Awesome");
        expect(ObjArr[5]).toEqual("Tadiwa")
    })
    it("checks the existance of the load() functionlaity",()=>{
        expect(Lwazi.load("Lwazi Mtshali")).toBeDefined()
    })
});