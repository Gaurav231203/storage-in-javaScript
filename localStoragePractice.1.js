/*


localStorage.setItem("name","gaurav" );
let val=localStorage.getItem("name")
localStorage.removeItem("name");
localStorage.setItem("name","gaurii" );
localStorage.clear();
*/

/*local storage mai hum bss string store krr sakte hai kuch orrnahi jes e array and object;
but usko karne ka tareeka hai JSON.stringify use krr kay*/

localStorage.setItem("names" ,JSON.stringify (["gaurav","SubmitEvent","dheeraj" ,"sahil" ,"manish"]));
let final= JSON.parse(localStorage.getItem("names"));
console.log(final);