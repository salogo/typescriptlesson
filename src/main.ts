// 1-Variales in typeScript:
const a ="1";
console.log("aaa", a)

let hello = "world";

//  specify types explicily:
let hi:string = "hi"

// 2-Function in typeScript:
const getFullName = (name:string, surname:string): string => {
    return name + " " + surname;
};
console.log(getFullName("great", "lessons"));

