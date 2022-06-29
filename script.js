let menu=document.getElementById("menu");
let menuitem=document.getElementById("menuitem");
let clos=document.getElementById("clos");
let ham=document.getElementById("ham");

clos.style.display="none";

menu.addEventListener('click',showmenu);
clos.addEventListener('click',hidemenu);
function showmenu(){
     menuitem.style.transform="translateX(0%)";
     menu.style.display="none";
     clos.style.display="block";
     clos.style.color="black";
     ham.style.backgroundColor=("rgb(147 51 234)");

 }
function hidemenu(){
     menuitem.style.transform="translateX(100%)";
     menu.style.display="block";
     clos.style.display="none";
     ham.style.backgroundColor=("white");


 }

 let sec1_item1 =document.getElementById("sec1-item1");
 let sec1_item2 =document.getElementById("sec1-item2");
 let sec2_item1 =document.getElementById("sec2-item1");
 let sec2_item2 =document.getElementById("sec2-item2");

 let sec1_btn1=document.getElementById("sec1-btn1");
 let sec1_btn2=document.getElementById("sec1-btn2");

 let sec2_btn1=document.getElementById("sec2-btn1");
 let sec2_btn2=document.getElementById("sec2-btn2");

sec1_btn2.addEventListener('click',sec12);
function sec12(){
sec1_btn1.style.opacity="1";
sec1_item1.style.display="none";
sec1_item2.style.display="block";

}

sec1_btn1.addEventListener('click',sec11);
function sec11(){
sec1_btn1.style.opacity="0.5";
sec1_item1.style.display="block";
sec1_item2.style.display="none";

}

sec2_btn2.addEventListener('click',sec22);
function sec22(){
sec2_btn1.style.opacity="1";
sec2_item1.style.display="none";
sec2_item2.style.display="block";

}

sec2_btn1.addEventListener('click',sec21);
function sec21(){
sec2_btn1.style.opacity="0.5";
sec2_item1.style.display="block";
sec2_item2.style.display="none";

}
