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
