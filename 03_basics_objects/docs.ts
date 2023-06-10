// let myName : string = 'paras'

// **************************Function Types**************************
// Parameter type annotation
function greet(name:string){
    console.log(name);
}

// greet(42) //would be a runtiime error if executed



// Return type annotation
function greet2():number{
  return 42;   
}


// **************************Object Types**************************
function printCoords(pt:{x:number, y:number}){
    console.log(pt.x);
    console.log(pt.y);
}

// object with optional properties
function printName(user:{first:string, last:string, age? : number}){
    console.log(`My name is ${user.first} ${user.last} and I am ${user.age}`);
    
}

// both OK
// printName({first:'John', last:'Doe'});
// printName({first:'John', last:'Doe', age:30});


function printName2(obj:{first:string, last?:string}){
//   console.log(obj.last.toUpperCase());     //'obj.last' is possibly 'undefined'.
//   if(obj.last !== undefined) console.log(obj.last.toUpperCase());  
  //                                              or
  console.log(obj.last?.toUpperCase());
}
// printName2({first:'John', last:'Doe'});



// **************************Union Types**************************
function printID(id:string | number){                                 //union typeis type formed from two or more types
  return id
}


function printID2(id:string | number){
  // return id.toUpperCase()             //TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string
  if(typeof id === 'string')console.log(id.toUpperCase());      
  else console.log(id);
}

function printID3(x: string[] | string){
   if(Array.isArray(x)){
    console.log(`hello ${x.join(' and ')}`);
   }
};
printID3(['paras','palak','dream'])


// ************************** Types Aliases**************************
type Point = {    
  x: number,
  y: number
}
function cords1(pt:Point){}   //it’s common to want to use the same type more than once and refer to it by a single name.
function cords2(pt:Point){}
function cords3(pt:Point){}
function cords4(pt:Point){}
function cords5(pt:Point){}
function cords6(pt:Point){}


export {}
