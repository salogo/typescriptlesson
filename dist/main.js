// 1-Variales in typeScript:
var a = "1";
console.log("aaa", a);
var hello = "world";
//  specify types explicily:
var hi = "hi";
// 2-Function in typeScript:
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("great", "lessons"));
// 3- The object in typeScript:
var user = {
    name: "Jhon",
    age: 70
};
var user2 = {
    name: "me"
};
var userr = {
    name: "u"
};
// 5-Union operator to combine data types:
var pageName = "1";
var errorMessage = null;
var popularTags = ["dragon", "coffee"];
var dragonsTage = "dragon";
// 8-Void in typeScript:
// is set of undefined and null, mean we don't return anything
var doSomthing = function () {
    console.log("doSomething");
};
// any in typeScript:
// its not recomanded because it dosen't show you any error
var foo = "foo";
console.log(foo.bar());
//we don't get error even foo dosen't have function called bar()
// 9-never in typeScript:
var donotdosomthing = function () {
    throw "never";
};
// a function returning never cannot have a reachable end point.
// if we take out the second line = throw "never" or return it will show a error
var vUnknown = 10;
var s1 = vUnknown; // it will show error because type unknown is not assignable 
// to type strung
// but we can use "as" operator to make type assertion = to convert to another type
var s2 = vUnknown;
