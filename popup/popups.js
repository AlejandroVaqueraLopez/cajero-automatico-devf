//variables
var toggleTurn = false;
var transactionPass = false; 

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
//btnSuccess
var btnAddAmountSuccess = document.getElementById("btnAddAmountSuccess");
var btnReduceAmountSuccess = document.getElementById("btnReduceAmountSuccess");

//reduce & add input values
var txtReduceAmountValue = document.getElementById("txtReduceAmountValue");
var txtAddAmountValue = document.getElementById("txtAddAmountValue");
//warning sign 
var lblWarningSignAddAmount= document.getElementById("lblWarningSignAddAmount");
var lblWarningSignReduceAmount= document.getElementById("lblWarningSignReduceAmount");

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

//transactionSuccess button events
function successFn(elementName){
	console.log("closed element view");
	closePopupFn(elementName);
	console.log("opened balance view");
	viewBalancePopup.style.transform = "scale(1)"
	toggleTurn = !toggleTurn;//true
}

//Open popup events
btnViewBalancePopup.addEventListener("click",function(){
	(toggleTurn === true)
		? console.log("block is some window opened")
		: openPopupFn(viewBalancePopup);
})
btnViewAddAmount.addEventListener("click",function(){
	(toggleTurn === true) 
		? (console.log("block is some window opened")
		):(openPopupFn(addAmountPopup),
			txtAddAmountValue.value = ""
		);
})
btnViewReduceAmount.addEventListener("click",function(){
	(toggleTurn === true)
		? (console.log("block is some window opened")
		):( openPopupFn(reduceAmountPopup),
			txtReduceAmountValue.value = ""
		)
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
//transaction success (ingresar,retirar monto) events
btnAddAmountSuccess.addEventListener("click",function(){
	(transactionPass === true)
	? successFn(addAmountPopup)
	: console.log("Must be numbers in value")
	
})
btnReduceAmountSuccess.addEventListener("click",function(){
	(transactionPass === true)
	? successFn(reduceAmountPopup)
	: console.log("Must be numbers in value")
})

//regex for input values(ingresar, retirar)
var transactionRegex = /^[0-9]+$/;

txtAddAmountValue.addEventListener("input",function(){
	transactionPass = transactionRegex.test(txtAddAmountValue.value);
	(transactionPass === true)
	?(
		lblWarningSignAddAmount.style.display = "none"
	):(
		lblWarningSignAddAmount.style.display = "block"
	)
})
txtReduceAmountValue.addEventListener("input",function(){
	transactionPass = transactionRegex.test(txtReduceAmountValue.value);
	(transactionPass === true)
	?(
		lblWarningSignReduceAmount.style.display = "none"
	):(
		lblWarningSignReduceAmount.style.display = "block"
	)
})
