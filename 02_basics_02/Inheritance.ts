class User{
    // private city: string='Noida';
    protected city: string='Noida';             //protected means that you can access this property inside inherited child class but outside of class is still big no no
    constructor(
        public email: string,
        public name: string,
    ){
    }
    get greeting(): string{
        return `hello goodmorning ${this.name} .You are in ${this.city}`;
    }
}

class SubUser extends User{
    country: string= 'India'; 
    //You can't access private property of a parent class
    changeCity(){
        this.city = 'Muzaffarnagar'
    }
}
export {}