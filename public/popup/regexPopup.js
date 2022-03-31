//regex for input values(ingresar, retirar)
var transactionRegex = /^[0-9]+$/;

txtAddAmountValue.addEventListener("input",function(){
	transactionRegexPass = transactionRegex.test(txtAddAmountValue.value);
	(transactionRegexPass=== true)
	?(
		lblWarningSignAddAmount.style.display = "none"
	):(
		lblWarningSignAddAmount.style.display = "block"
	)
})
txtReduceAmountValue.addEventListener("input",function(){
	transactionRegexPass= transactionRegex.test(txtReduceAmountValue.value);
	(transactionRegexPass=== true)
	?(
		lblWarningSignReduceAmount.style.display = "none"
	):(
		lblWarningSignReduceAmount.style.display = "block"
	)
})