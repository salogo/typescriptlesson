var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
// 10-unknown
var vUnknown = 10;
var s1 = vUnknown; // it will show error because type unknown is not assignable 
// to type strung
// but we can use "as" operator to make type assertion = to convert to another type
var s2 = vUnknown;
// the next example we convert first to unknown then to number;
var pageNumber = "1";
var numericPageNumber = pageNumber;
// 11-working with DOM:
var someElement = document.querySelector(".foo");
console.log("someElement", someElement.value);
// if we don't type as HTMLInputElement it will show that Property "value"
// doses not exist
// 12-Adding event listener:
var SomeElement = document.querySelector("foo");
SomeElement.addEventListener("blur", function (event) {
    var target = event.target;
    console.log("event", target.value);
    // IT is just telling DOM what type we have
    // if we don't type the second line it will show error:
    // console.log("event", event.target.value)
});
// 13-class in typeScript:
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.getFullname = function () {
        return this.firstName + " " + this.lastName;
    };
    return User;
}());
var user3 = new User(true, "lessons");
var UUser = /** @class */ (function () {
    function UUser(firstName) {
        this.firstName = firstName;
        this.unchangableName = firstName;
    }
    UUser.prototype.changeUnchangableName = function () {
        this.unchangableName = "foo";
        //it show error because its read only
    };
    return UUser;
}());
// 15 Inheritance:
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(UUser));
var admin = new Admin("foo");
console.log(admin.firstName);
// 16-Generics :
var addId = function (obj) {
    // <T> (obj: T) this is for Generic
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var uUser = {
    name: "Jack"
};
var result = addId(uUser);
console.log("result", result);
