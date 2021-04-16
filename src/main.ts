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


// 10-unknown
let vUnknown: unknown = 10;
let s1: string = vUnknown // it will show error because type unknown is not assignable 
                       // to type strung
// but we can use "as" operator to make type assertion = to convert to another type
let s2: string = vUnknown as string  ;                  

// the next example we convert first to unknown then to number;
let pageNumber: string = "1";
let numericPageNumber: number =(pageNumber as unknown) as number;

// 11-working with DOM:
const someElement = document.querySelector(".foo") as HTMLInputElement;
console.log("someElement", someElement.value);
// if we don't type as HTMLInputElement it will show that Property "value"
// doses not exist


// 12-Adding event listener:
const SomeElement = document.querySelector("foo");

SomeElement.addEventListener("blur", (event) => {
    const target = event.target as HTMLInputElement;
    console.log("event", target.value)
    // IT is just telling DOM what type we have
    // if we don't type the second line it will show error:
    // console.log("event", event.target.value)
});

// 13-class in typeScript:
class User {
    firstName: string;
    lastName : string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullname(): string {
        return this.firstName + " " + this.lastName;
    }
}

const user3 = new User(true, "lessons");
// if we  type boolean in the argument it will show a error that true is not assignable 
// to parameter of type "string"
// we can use: private, public, protected
// if we type: private firstNane: string;
// that mean firstName will not be accessible outside our class 

// 14- Implementing interfaces and readonly:
interface Userinterface {
    getFullname(): string;
}

class UUser implements Userinterface {
    firstName: string;
    readonly unchangableName: string;

    constructor(firstName: string) {
        this.firstName = firstName;
        this.unchangableName = firstName;
    }

    changeUnchangableName(): void {
        this.unchangableName = "foo"
        //it show error because its read only
    }
    /*
    getFullname(): string {
        return "full name"
    }
    */
   //it show error if we don't include getFullname() function
}


