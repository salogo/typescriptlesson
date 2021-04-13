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


// 8-Void in typeScript:
// is set of undefined and null, mean we don't return anything

const doSomthing = ():void => {
    console.log("doSomething")
};


// any in typeScript:
// its not recomanded because it dosen't show you any error

let foo: any = "foo"; 
console.log(foo.bar());
//we don't get error even foo dosen't have function called bar()

// 9-never in typeScript:

const donotdosomthing =(): never => {
  throw "never";
}
// a function returning never cannot have a reachable end point.
// if we take out the second line = throw "never" or return it will show a error

