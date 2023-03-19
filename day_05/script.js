
// let t = document.body.firstElementChild.firstElementChild;
// console.log(t);  // gives us tableNode
// console.log(t.rows) ; // gives us list of NODES
// console.log(t.caption); // gives us captions

// there are many methods related to tables;
//t.rows , t.captions , t.thead, t.tfoor , t.tbodies etc ;
// console.log(t.rows[1]);

// type of (document) & typeof(window) . for both ans is "object";





// ``````````````````````````````````Searching In the DOM`````````````````````````````````````````````

// document.getElementById("string") ; // this will return the unique class which is attach to this id;
// document.getElementsByClassName("string") // this will return the list of classes / tags which is reffered to this tag


// let ctitle = document.getElementsByClassName("card-title");
// // function chalo() {
// //     ctitle.style.color = "red";
// // }

// // console.log(ctitle.length);
// for(let x = 0 ; x < ctitle.length ;x ++){
//     ctitle[x].style.color = "blue";
// }

// let cssSelectorJs = document.querySelectorAll(".card-title");
// // console.log(cssSelectorJs); // returns all the class which has class card-title
// cssSelectorJs[0].style.color = "red";
// cssSelectorJs[1].style.color = "Yellow";
// cssSelectorJs[2].style.color = "Green";


// we can select by tagName also
// console.log(document.getElementsByTagName("a"));
// console.log(document.querySelector(".card").getElementsByTagName("a"));


// ``````````````````````````````````Matches , closest , contains```````````````````````````````````````
// matches -> it matches the Element 
// closest -> it matches the closest/nearset  element 
// contains -> it chcek whether this element contains this or not ?

// Element.matches(css) , Element.closest(css) , Element.contains(css);



// ````````````````````````````````````Change the first elem of navbar  ````````````````````
// let navTitle = document.getElementsByClassName("navbar-brand") ;
// // console.log(navTitle);
// navTitle[0].style.color = "red";

// let navTitle = document.querySelector(".navbar-brand");
// console.log(navTitle);
// navTitle.style.color = "red";

//`````````````` ```````````````````````````````EVENTS & OTHER DOM ````````````````````````````````````

// console.dir -> print the values in object form 
// console.log -> print the value in DOM tree

// innerHtml is valid for firstElementChild only

// console.log(document.body.textContent); // gives whole body content;
// console.log(InnerExample);