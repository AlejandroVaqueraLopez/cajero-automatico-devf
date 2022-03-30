var viewBalancePopup = document.getElementById("popupViewBalance");
var btnViewBalancePopup = document.getElementById("btnViewBalance");
var btnCloseBalancePopup = document.getElementById("btnClose");
var pagePlattform = document.getElementById("pagePlattform");

btnViewBalancePopup.addEventListener("click",function(){
	console.log("open");
	viewBalancePopup.style.transform = "scale(1)";
})

btnCloseBalancePopup.addEventListener("click",function(){
	console.log("close");
	viewBalancePopup.style.transform = "scale(0)";
})


