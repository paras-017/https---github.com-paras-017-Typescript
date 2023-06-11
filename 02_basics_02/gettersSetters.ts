class User {
    private _courseCount = 1
    readonly city:string = "New York";
    constructor(
        public email: string,
        public name: string,
    ){}
    private deleteToken(){
        console.log('Token deleted');
    }
    get getAppleEmail(): string {                               //get used to get property  public/private
        return `apple${this.email}`;
        }
    get courseCount(): number{
        return this._courseCount       
    }
    set courseCount(courseNum){                                  //in setter there should not be return type 
      if(courseNum <=1){
      throw new Error("Couse count should be greater than 1");
    }
    this._courseCount = courseNum
   }
}
const paras = new User("email@email.com","Peter Parker");
console.log(paras);