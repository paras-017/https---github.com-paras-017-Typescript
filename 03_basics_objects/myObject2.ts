type User = {
    name:string,
    email:string,
    isActive:boolean
}

function createUser(user:User):User{
    return {name:'paras', email:'paras@gmail.com', isActive:true}
}

createUser({name:'paras', email:'paras@gmail.com', isActive:true});




export {}