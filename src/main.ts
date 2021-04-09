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

// 3 The object in typeScript:
const user:{name:string, age:number} = {
    name: "Jhon",
    age: 70  
}

const user2:{name:string, age:number} = {
    name: "me",
    //missing age here
}

// How to create Interface, using entities inside of interface:
interface Userr {
    name:string,
    age?:number,
    getMessage():string // function entity
    // age?: number 
    // if we type a question mark in front of entity that mean it's not mandatory
}

const userr:Userr = {
    name: "u"
}


