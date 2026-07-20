/*function loadTheme(){
  let them1= localStorage.getItem("theme");
  
  console.log(thme1);

}
loadTheme();*/

function DarkOrLight(){//function bnya dark or ligh 
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){//conditon mai checek kiya ki windos ka them kon sa hai to automaticly ye same theme le lega 
  document.body.classList.add("dark");
  document.body.classList.remove("light");
}
else{
    document.body.classList.add("light");
    document.body.classList.remove("dark");
}
}
DarkOrLight();
localStorage.getItem("theme")
window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change",()=>{
    DarkOrLight();
})


let toggel=document.querySelector(".circle");
toggel.addEventListener("click",()=>{
 if(document.body.classList.contains("dark")){
    document.body.classList.remove("dark")
    document.body.classList.add("light")
    localStorage.setItem("theme","light");
 }
 else{
    document.body.classList.remove("light")
    document.body.classList.add("dark")
     localStorage.setItem("theme","dark");

 }
})