/*

// sibling of Dom's
// 1 - Same parent children called siblings of each other
// head & body are sibling of each other ;
/// body is the right child of html and head is the left child of html


console.log(document.body.firstChild) ; // giving the first children as div 

a = document.body.firstChild ;
console.log(a.parentNode) ;
console.log(a.parentElement) ;
console.log(a.firstChild.nextSibling); // if you didn't conpress your html then it will cnt the spaces (text Nodes)
// this will not give you the correct o/p until you format it;

*/

// `````````````````````````````````````Element Only Navigation``````````````````````````````````````````````


let a =  document.body;
console.log(a.firstChild); // this will cnt the spaces if you did'nt compress your html ;
console.log(a.firstElementChild); // this will not count the spaces gives you the perfect ans ;

// document.nextElementSibiling/firstElementChild / lastElementChild / previousElementChild