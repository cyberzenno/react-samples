//primitives: number, string boolean
//complex: arrays, objects
//functions, parameters

type Person = {
    name: string,
    age: number
}

var p1: Person;
p1 = {
    name: "Mario",
    age: 32
};


document.getElementById("feedback").innerHTML = p1.name + " " + p1.age;


//generics (like C#)
function insertAtTheBeginning<T>(array: T[], value: T) {
    return [value, ...array];
}


var arrayOfStrings = ["B", "C", "D"];

insertAtTheBeginning(arrayOfStrings, "A");