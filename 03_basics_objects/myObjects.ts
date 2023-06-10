const User = {
     name:"Paras",
     email:"Paras@paras.com",
     isActive:true
}

// Object as an argument
// function createUser({name:string, isPaid:boolean}){}
// createUser({name:"John", isPaid:true});

/* 
// function returning  object
function course():{name:string, price:number}{
    return {name:'react-course', price:0};
}
*/


// suppose we gives an extra argumetn to function when calling it
function createUser({name:string, isPaid:boolean}){}
// createUser({name:'john', isPaid:true,age:12});                      //gives error when we give an extra argument `age` 

/*   let newUser = {name:'John', isPaid:true, age:12}                       //doesn't gives error    "soltion in myObject2.ts"
createUser(newUser);   */

export {}