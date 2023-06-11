// Generics a;low you to create reusable components and functions that can work with a variety of data types. They provide a way to define placeholders for types that will be specified when the component or function is used. This allows you to write more flexible and type-safe code.

const score: Array<number> = [1,2,3,4534,35]
const name: Array<string> = ["John", "Mary", "Mike", "Jack"]


function identityOne(val: boolean | number):boolean | number{                   //we can't use string as an argument
    return val
}

function identityTwo(val: any):any{                         //we can use string but using `any` is not good practice in Ts
    return val
}

function identityThree<type>(val: type):type{      //once you actually pass on anything that value type is locked  and will return the locked type
      return val
}

function identityFour<T>(val: T):T{                      //short form
    return val
}

// More example 
interface glassBottle{
    bottle_name: string,
    bottle_type:  number
}
function identityFive<glassBottle>(obj:glassBottle):glassBottle{
    return obj
}
let value = identityFive({bottle_name: "Cock", bottle_type: 1})
console.log(value);
// identityThree
export {}