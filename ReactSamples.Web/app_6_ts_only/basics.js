//primitives: number, string boolean
//complex: arrays, objects
//functions, parameters
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var p1;
p1 = {
    name: "Mario",
    age: 32
};
document.getElementById("feedback").innerHTML = p1.name + " " + p1.age;
//generics (like C#)
function insertAtTheBeginning(array, value) {
    return __spreadArrays([value], array);
}
var arrayOfStrings = ["B", "C", "D"];
insertAtTheBeginning(arrayOfStrings, "A");
//# sourceMappingURL=basics.js.map