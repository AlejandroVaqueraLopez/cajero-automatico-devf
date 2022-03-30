//variables
var toggleTurn = false;
var isLogged = false;
//popup views
var viewBalancePopup = document.getElementById("viewBalancePopup");
var addAmountPopup = document.getElementById("addAmountPopup");
var reduceAmountPopup = document.getElementById("reduceAmountPopup");
var loginPopup = document.getElementById("loginPopup");
//btnOpen
var btnViewBalancePopup = document.getElementById("btnViewBalance");
var btnViewAddAmount = document.getElementById("btnViewAddAmount");
var btnViewReduceAmount = document.getElementById("btnViewReduceAmount");
var btnViewLogin= document.getElementById("btnViewLogin");
//btnClose
var btnCloseBalancePopup = document.getElementById("btnCloseBalancePopup");
var btnCloseAddAmount = document.getElementById("btnCloseAddAmount");
var btnCloseReduceAmount = document.getElementById("btnCloseReduceAmount");
var btnCloseLogin = document.getElementById("btnCloseLogin");

//entire page view
var pagePlattform = document.getElementById("pagePlattform");
var controlView = document.getElementById("controlView");

//close & open functions
function openPopupFn(elementName){
	console.log("open");
	elementName.style.transform = "scale(1)";
	toggleTurn = !toggleTurn;//true
}
function closePopupFn(elementName){
	console.log("close");
	elementName.style.transform = "scale(0)";
	toggleTurn = !toggleTurn;//false
}

//Open popup events
btnViewBalancePopup.addEventListener("click",function(){
	(toggleTurn === true)
		? console.log("block is some window opened")
		: openPopupFn(viewBalancePopup)
})
btnViewAddAmount.addEventListener("click",function(){
	(toggleTurn === true)
		? console.log("block is some window opened")
		: openPopupFn(addAmountPopup)
})
btnViewReduceAmount.addEventListener("click",function(){
	(toggleTurn === true)
		? console.log("block is some window opened")
		: openPopupFn(reduceAmountPopup)
})
btnViewLogin.addEventListener("click",function(){
	(toggleTurn === true)
		? console.log("block is some window opened")
		: openPopupFn(loginPopup)
})
//Close popup events
btnCloseBalancePopup.addEventListener("click",function(){
	(toggleTurn === true)
		? closePopupFn(viewBalancePopup)
		: console.error(new Error("close event error"));
})
btnCloseAddAmount.addEventListener("click",function(){
	(toggleTurn === true)
		? closePopupFn(addAmountPopup)
		: console.error(new Error("close event error"));
})
btnCloseReduceAmount.addEventListener("click",function(){
	(toggleTurn === true)
		? closePopupFn(reduceAmountPopup)
		: console.error(new Error("close event error"));
})
btnCloseLogin.addEventListener("click",function(){
	(toggleTurn === true)
		? closePopupFn(loginPopup)
		: console.error(new Error("close event error"));
})

