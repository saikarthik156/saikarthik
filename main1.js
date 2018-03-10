



function loadJSON(file,callback){

   var rawFile = new XMLHttpRequest();
   rawFile.overrideMimeType("application/json");
   rawFile.open("GET",file,true);
   rawFile.onreadystatechange=function () {
     if (rawFile.readyState===4 && rawFile.status=="200"){
callback(rawFile.responseText);
     }

   }
   rawFile.send();

}

loadJSON("resume.json",function(text) {
  var data =JSON.parse(text);
  console.log(data.basics.name);
basic(data.basics);



});

var mainDiv=document.getElementById('mainDiv');
var leftDiv=document.getElementById('leftDiv');
var rightDiv=document.getElementById('rightDiv');
function basic(basics) {
  var lchild=document.createElement("div");
  lchild.classList.add("lchlid");
  var image=document.createElement("img");
  image.classList.add("img")
image.src=basics.picture;
var head1=document.createElement("h1");
head1.textContent=basics.name;
var head2=document.createElement("h2");
  head2.textContent=basics.phone;
  lchild.appendChild(image);
lchild.appendChild(head1);
lchild.appendChild(head2);
leftDiv.appendChild(lchild);



var career=document.createElement("div");
career.classList.add("career");
var head2=document.createElement("h2");
head2.innerHTML="career objective";
career.appendChild(head2);
var rhr=document.createElement("hr");
var rhp=document.createElement("p");
rhp.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac interdum nisi. Sed in consequat mi. Sed pulv";
career.appendChild(head2);
Career.appendChild(rhr);
career.appendChild(rhp);
rightDiv.appendChild(career);




}
