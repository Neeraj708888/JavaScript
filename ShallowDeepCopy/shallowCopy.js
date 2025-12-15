// Only make a copy of Outer-Object and inner-object is shared. 
//  does not make other seperate copy
// Reference (Address) of a nested Array or nested Object is same
// So changing nested Array or Object, Original Array is also changed.
// Nested Array / Object share the same memory so appear the changes both side.
// Not support functions - remove, undefined - remove, Date - convert into the String

// one line -  Share the references of Nested Object and Array.

// Spread Operator {...obj}
let obj = {
    name: "Neeraj",
    age: 26,
    address: {
        city: "Bareilly"
    },
};

let obj1 = {...obj};

obj1.address.city = "Mumbai";

console.log(obj.address.city);  // Output: Mumbai

// Spread Operator [...arr]

let objArr = [1,2,[3,4]];

let objArr1 = [...objArr];

objArr1[2][0] = 50;

console.log(objArr[2][0]);  // Output: 50

// Using Object.assign()

let obj2 = {
    name: "Aarti",
    age: 26,
    address: {
        city: "Noida",
    },
};

let obj3 = Object.assign(obj2);
console.log(obj3);

obj3.address.city = "Greater Noida";

console.log(obj2.address.city);

// Using Array.slice()
let arrSlice = [[1,2], [3,4]];
let obj4 = arrSlice.slice();

obj4[0][0] = 100;

console.log(arrSlice[0][0]);

// Using arr.concat()
let arrConcat = [[10], [20]];

let obj5 = [].concat(arrConcat);

obj5[0][0] = 99;

console.log(arrConcat[0][0]);