
// Simple generic example
/*
function anotherFunction<T,U>(valOne:T,valTwo:U):object{
    return {valOne, valTwo};
}
anotherFunction(1, 'hello')
*/




// when we use extend it make typeU to type:number so what is the use of generic now ?? why are we using generics ?
/*
function anotherFunction<T,U extends number>(valOne:T,valTwo:U):object{
    return {valOne, valTwo};
}
anotherFunction(1, 'hello')    //shows type error
anotherFunction(1,5)
*/




// *******************generic classes*******************
/*
interface database{
    connection: string,
    username: string,
    password: string,
}
// T could be of any type but U should follow a protocol
function anotherFunction<T,U extends database>(valOne:T,valTwo:U):object{
    return {valOne, valTwo};
}
// anotherFunction(1, 'hello')    //shows type error
anotherFunction(1,{connection:'www.monogDb.com',username:'monogdb',password:'123245'})
    */



// Another example
interface Quiz{
    name: string,
    type: string
}
interface Course{
    name: string,
    author: string, 
    subject: string,
}

class sellAble<T>{
    public cart: T[] = []
    addToCart(products:T){
        this.cart.push(products)
    }
}
const myArr = new sellAble()
myArr.addToCart(5)
myArr.addToCart('hello')
myArr.addToCart(['hello123',234])
console.log(myArr);

export {}