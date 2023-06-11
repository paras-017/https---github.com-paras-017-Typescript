class User {
    email:string
    name:string
    city:string = 'MOZ'
    constructor(email:string , name:string){
        this.email = email;
        this.name = email;
    }
}

const paras = new User("paras@gmail.com", "Paras");
console.log(paras);
console.log(paras.city);

export {}
