
function addTwo(num:number):number{                      //this function should return a number
    return num + 2;
    // return 'hello there'
}
addTwo(5)

// function as string argument
function getUpper(val:string){
    return val.toUpperCase();
}
getUpper('hello')
 

// arrow function as default value argument
let loginUser = (name:string, email:string, isPaid:boolean=false ) => {}
loginUser('paras','paras@gmail.com')


// function that can return different types 
// case:1
// function getValue(myVal:number):boolean{
//     if(myVal > 0){
//         return true;
//     }
//     return '200 OK'
// }


// const Hello = (val:string | number):string| number => {                            #multiple types
//     return ``
// }
// console.log(Hello(1));


/*
// const heros = ['thor', 'spiderman', 'jack', 'codewithharry', 'technical thapa', 'technical suneja']
const heros = ['thor', 'spiderman', 'jack', 'codewithharry', 'technical thapa', 'technical suneja', 11]
heros.map((hero) => {
    return `${hero} is hero`
})
export {}
*/


/*
// function with void 
function consoleError(errMsg:string):void{                           //void means it's not going to return anything ever
    console.log('errMsg');
    // return 1
}
*/



// function with never 
function consoleError(errMsg:string):never{                           //NEVER means that the function throws an exception or terminates execution of the program.
     throw new Error(errMsg);
}
export {}