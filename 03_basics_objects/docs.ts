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


export {}