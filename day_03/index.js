// alert("hey there");


            // Advantage of scrpit tag 
// 1 - seperation of concern 
// 2 - memory catching

                    // ALl console  methods
// console has many objects or methods -> log, error , info ..... , you can check with console.log(console);

// console.log("hey saurabh")  -> prints Normally
// console.error("this is an error") -> prints  in red line 
// console.assert(55 > 3) // assert is for checking condition
// console.clear()
// console.table() // showing the object in table form key : value ;
// console.log() && console.info() // both are same

// console.time() //
// // write 
// //         code
// //                  here

// console.timeEnd()

// let a = prompt("enter value here" , 5688);
// // console.log(a); // this print in insepect console window ;
// document.write(a); // print on html page

// ````````````````````````````````````````````````````````````````````````````````````
                        //window features;
// everything is comes under window object .. window.clear() , window.console.log() , window.prompt() etc;
// console.log(document); prints all the document ;
// console.log(document.body); // gives the body of the html;

// DOM & BOM -> BOM means Broswer object model && for DOM documenent object Model 
//DOM represent the html of the page 
//BOM used alert , prompt , confim 

// document.body.style.backgroundColor = "red" . // it sets the bg color red;


// let a = prompt("which color do you want on browser" , "green") ;
// document.body.style.backgroundColor = `${a}` ; 


// let a = prompt("enter number greator then 4") ;
// if(a > 4){
//     location.href = "https://google.com";
// }
// else{
//     location.href = "https://youtube.com";
// }


// let val = ["sanke" , "water" , "gun"] ;
// let x = Number.parseInt((Math.floor(Math.random() * 10) + 1) % val.length);
// let s = prompt("enter your choice") ;
// if(s == "snake" && val[x] == "snake"){
//     console.log("draw") ;
// }
// else if(s == "water" && val[x] == "snake"){
//     console.log("your opponent win") ;
// }
// else{
//     console.log("you win");
// }


                            //Documeny Tree
// document. // there is many methods
// document.title // returns title tage in string format ;
// document.head // return head tags;
// document.body // return body tags;
// document.documentElement // returns an object
// we access only in the top to bottom format;


                        // accessing children

console.log(document.childNodes);
console.log(document.firstChild);
console.log(document.body.firstChild);

                    // following is also true;
// Element.firstChild == Element.childNodes[0]
// Element.lastChild = Element.childNodes[childNodes.size  - 1];
