let text= document.getElementById('content');

function changefont(){
    let x=document.getElementById('font').value;
   text.style.fontFamily=x;
}


function fntsize(){
    let size=document.getElementById('fontSize').value;
   text.style.fontSize=(`${size}px`);

}
function italicfont(){
    let y=document.getElementById('italic1').value;
    text.style.fontStyle=y;

}

function boldfont(){
    let y=document.getElementById('bold1').value;
    text.style.fontWeight=y;

}

function underline(){
    let z=document.getElementById('underline1').value;
    text.style.textDecoration=z;

}