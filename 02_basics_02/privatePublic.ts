/*
class User {
    public email:string
    name:string                                                //default  is public
    private readonly  city:string = 'MOZ'
    constructor(email:string , name:string){
        this.email = email;
        this.name = email;
    }
}

const paras = new User("paras@gmail.com", "Paras");
console.log(paras);
// console.log(paras.city);
*/

class User {
    readonly city : string = 'MOZ';
    constructor(
        public email : string,
        public name : string,
    ){}
}

const paras = new User("paras@gmail.com", "Paras");
console.log(paras);
export {}
