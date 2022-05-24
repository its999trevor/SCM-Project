var modal = document.getElementById('popup-modal');
var btn = document.getElementById("open-popup-modal");
var span = document.getElementsByClassName("close-modal")[0];
var subc = document.getElementById("sub");
btn.onclick = function() {
modal.style.display = "block";
}
span.onclick = function() {
modal.style.display = "none";
}
window.onload = function() {
setTimeout(function() {
modal.style.display = 'block';
},1000);
}
subc.onclick=function(){
    alert("Subscribed!!!")
}
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}