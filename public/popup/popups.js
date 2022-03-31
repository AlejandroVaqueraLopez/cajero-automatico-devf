//variables
var toggleTurn = false;
var transactionRegexPass = false; 

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

// render values 
var lblBalanceValue = document.getElementById("lblBalanceValue");
var dateTransactionList = document.getElementById("dateTransactionList");
var amountTransactionList = document.getElementById("amountTransactionList");
var actionTransactionList = document.getElementById("actionTransactionList");

function renderData(){
	//first rendering (they render when again change)
	//rendering view amount data
	lblBalanceValue.innerHTML = viewBalanceFn(cuentas[userLogged]);
	//rendering view transaction history data
	dateTransactionList.innerHTML = dateTransactionItemCreator(cuentas[userLogged]);
	amountTransactionList.innerHTML = amountTransactionItemCreator(cuentas[userLogged]);
	actionTransactionList.innerHTML = actionTransactionItemCreator(cuentas[userLogged]);
	console.log("data rendered")
}

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
		: (openPopupFn(viewBalancePopup),
			renderData()
		);
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
	if(transactionRegexPass=== true ){
		//we make the transaction
		addAmountFn(parseInt(txtAddAmountValue.value),cuentas[userLogged]);
		//we make render the data again to update 
		renderData()
		//we finish (close current view and open view balance popup)
		successFn(addAmountPopup);
	}else{
		console.log("Must be numbers in value")
	}
})

btnReduceAmountSuccess.addEventListener("click",function(){
	if(transactionRegexPass=== true ){
		//we make the transaction
		reduceAmountFn(parseInt(txtReduceAmountValue.value),cuentas[userLogged]);
		//we make render the data again to update 
		renderData()
		//we finish (close current view and open view balance popup)
		successFn(reduceAmountPopup);
	}else{
		console.log("Must be numbers in value")
	}
})

