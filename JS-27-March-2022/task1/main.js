
let lang=document.getElementsByClassName("lang");
let z=" ";
function store(){
localStorage.setItem("name",document.getElementById("fname").value); 
localStorage.setItem("age",document.getElementById("age").value); 
localStorage.setItem("desc",document.getElementById("desc").value); 
localStorage.setItem("major",document.getElementById("major").value); 
localStorage.setItem("uni",document.getElementById("uni").value);
localStorage.setItem("date",document.getElementById("start").value); 
localStorage.setItem("file",document.getElementById("myFile").value); 
localStorage.setItem("display","block")
localStorage.setItem("img","icon-5887126_1280.png")


if(document.getElementsByClassName("gender")[0].value==1){

    localStorage.setItem("gender","male");
} else{
     localStorage.setItem("gender","female");}


for(let i=0 ; i<lang.length ; i++){
      
    if(lang[i].checked){
       z+=" "+lang[i].value;}
}
localStorage.setItem("lang",`${z}`);

}


document.getElementById("card").style.display=localStorage.getItem("display")
document.getElementById("img").src=localStorage.getItem("img")
 document.getElementById("card").innerHTML=`
    
    your name is: ${localStorage.getItem("name")} </br>
    your age is: ${localStorage.getItem("age")} </br>
    your gender is: ${localStorage.getItem("gender")} </br>
    about you:${localStorage.getItem("desc")} </br>
    your major: ${localStorage.getItem("major")} </br>
    your university: ${localStorage.getItem("uni")} </br>
    you fav languages: ${localStorage.getItem("lang")} </br>
   
    `;
    localStorage.clear()