
// In TypeScript, the abstract keyword is used to define abstract classes and abstract methods within those classes. An abstract class is a class that cannot be instantiated directly and serves as a blueprint for other classes to inherit from
abstract class TakePhoto{                    
    constructor(
        public cameraMode:string,
        public filter:string,
    ){}

    abstract getSepia():void                      //this getSepia method needs to be implemented compulsory
    sayCheese():void{
        console.log('say cheeseee!!!!');
    }
}

// const paras = new TakePhoto('front G_Cam4.5', 'moonlight')                       //can't use TakePhoto class
class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
    ){super(cameraMode, filter)}
    getSepia(): void {
        console.log('I am Sepia method');
    }
}

const paras = new Instagram('front G_Cam4.5', 'moonlight')
console.log(paras.sayCheese());


export {}