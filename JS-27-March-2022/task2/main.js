


function store(){


sessionStorage.setItem("name",document.getElementById("sub").value); 
sessionStorage.setItem("decs",document.getElementById("desc").value); 
sessionStorage.setItem("user",document.getElementById("user").value); 
sessionStorage.setItem("tech",document.getElementById("tech").value); 
sessionStorage.setItem("display","block")
sessionStorage.setItem("img","icon-5887126_1280.png")


}

document.getElementById("img").src=sessionStorage.getItem("img");
document.getElementById("card").style.display=sessionStorage.getItem("display");


 document.getElementById("card").innerHTML=`
    
 the subject is: ${sessionStorage.getItem("name")} </br>
   about the project ${sessionStorage.getItem("desc")} </br>
    targted audience:${sessionStorage.getItem("user")} </br>
    Technology used: ${sessionStorage.getItem("tech")} </br>
   
    `;
    
 sessionStorage.clear();