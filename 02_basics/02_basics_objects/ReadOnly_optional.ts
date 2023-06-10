type User = {
   readonly  _id:  Array<string> ,    //not be able to manipulate _id 
    name: string,
    email: string,
    isActive: boolean
    creaditCard?:number
}
let myUser :User = {
    _id:['sfasf'],
    name: "John Doe",
    email: "john@example.com",
    isActive: true
}
myUser.email = 'john@example12.com'
// myUser._id = myUser._id.push('hello there')

export {}