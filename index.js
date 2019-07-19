var randomNo1= Math.floor(Math.random() * (7 - 1)) + 1;
var imgsrc1="images/dice"+randomNo1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",imgsrc1);

var randomNo2= Math.floor(Math.random() * (7 - 1)) + 1;
var imgsrc2="images/dice"+randomNo2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",imgsrc2);

if(randomNo1>randomNo2){
  document.querySelector("h1").innerHTML="🌜Player 1 won";
}
else if (randomNo1<randomNo2){
  document.querySelector("h1").innerHTML="Player 2 won🌛";
}
else{
  document.querySelector("h1").innerHTML="It's a tie";
}
