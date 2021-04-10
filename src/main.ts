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

// 3- The object in typeScript:
const user:{name:string, age:number} = {
    name: "Jhon",
    age: 70  
}

const user2:{name:string, age:number} = {
    name: "me",
    //missing age here
}

// 4-How to create Interface, using entities inside of interface:
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

// 5-Union operator to combine data types:
let pageName:string | number = "1";
let errorMessage: string | null = null;
// =null is the default value, if we don't specify the value will be undefine


// 6-Type Alliases in typeScript:
// we can create alliases and use them everywhere:
type ID = string;
type PopularTag = string;
const popularTags: PopularTag[] = ["dragon", "coffee"] ;
     // or inside the interface:
     interface Userinterface {
         id: ID;
         name: string
     }

// 7-Unions + type alliases, how to combine them:
type PPopularTag = string;
type MaybePopularTag = PPopularTag | null;

const dragonsTage: MaybePopularTag =  "dragon";



