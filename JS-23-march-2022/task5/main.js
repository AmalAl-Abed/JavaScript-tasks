let psd1;
let psd2;
let btn;
function check()
{
    psd1=document.getElementById("password1").value;
    psd2=document.getElementById("password2").value;
    btn=document.getElementById("button")

    
    if(psd1.length<6){
        document.getElementsByClassName("err")[0].innerHTML="the password is too short";
        } 
        else
        {
            document.getElementsByClassName("err")[0].innerHTML=" ";
        }
        
        if(psd1 !== psd2){
            document.getElementsByClassName("err")[1].innerHTML="the two passwords dont match";
        } else { 
btn.style.display="block"
        }
}



