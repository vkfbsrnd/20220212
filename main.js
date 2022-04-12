const circle=document.querySelector(".circle");
const HL=document.querySelector(".horizontal_line");
const VL=document.querySelector(".vertical_line");
document.addEventListener("mousemove",(e)=>{
    console.log(e.clientX);
    console.log(e.clientY);
    const mouseX= e.clientX;
    const mouseY= e.clientY;
    circle.style.top= mouseY+'px';
    circle.style.left= mouseX+'px';
    HL.style.top= mouseY+'px';
    VL.style.left= mouseX+'px';
    var XY = mouseX + " px , " + mouseY + " px ";
    document.getElementById("result").innerHTML=XY;
    document.getElementById("result").style.top= mouseY+'px';
    document.getElementById("result").style.left= mouseX+'px';

})