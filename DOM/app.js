
function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName("class1"));
}

function identifyByTag() {
    console.log(document.getElementsByTagName("p"));
}

function changeBackground(color) {
document.getElementById('block1').style.background=color;

}

function increaseFont() {
    var a=document.getElementById('block2');
    a.style["font-size"]="150%";
}

function changeFontColor() {
    var x = document.getElementById("block3");
   
    x.style.color = 'red';
   
}

function revertColor() {
    var y = document.getElementById("block3");
    y.style.color = 'black';
}

function hide() {
    var z= document.getElementById("block4");
    z.style.visibility="hidden";
}

function changeBack() 
{
    document.getElementsByClassName("box1")[0].style.backgroundColor='green';
    document.getElementsByClassName("box1")[1].style.backgroundColor='green';
    document.getElementsByClassName("box1")[2].style.backgroundColor='green';

}
function changeBackColor(){
    document.getElementsByClassName("box2")[0].style.backgroundColor='blue';
    document.getElementsByClassName("box2")[1].style.backgroundColor='blue';
    document.getElementsByClassName("box2")[2].style.backgroundColor='blue';

}


function numbersOnly(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    
}
function addAdjacent(){
    var div = document.getElementById('para2');
    
    div.innerHTML += "I got generated on the fly...";
}

function removePara() {
    var z= document.getElementById("para4");
    z.style.visibility="hidden";
}

function animatePara() {
        var elem = document.getElementById("box5");   
        var pos = 0;
        var id = setInterval(frame, 5);
        function frame() {
          if (pos == 350) {
            clearInterval(id);
          } else {
            pos++; 
            elem.style.right = pos + 'px'; 
            elem.style.left = pos + 'px'; 
          }
        }
      }

function upper(){
 var x=document.getElementById('inputBox1');
 x.value=x.value.toUpperCase();
}
function upper1(){
    var x=document.getElementById('inputBox2');
    x.value=x.value.toUpperCase();
}
function camel(){
    var x=document.getElementById('inputBox3');
    x.value=x.value.charAt(0).toUpperCase() + x.value.slice(1);
}
function func(){
    var x=document.getElementById('get');
    x.style.background="green";
}
function myfunction(){
    var x=document.getElementById("browsers").selectedIndex;
    console.log(document.getElementsByTagName("option")[x].value0);
}