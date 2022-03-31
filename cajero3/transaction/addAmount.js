var year = new Date().getFullYear();
var month = new Date().getMonth() + 1; 
var day = new Date().getDate();

//balance argument is viewBalance (function) returned value
function addAmountFn(requestedAmount,user){
    console.log(requestedAmount,user.balance);
    (validateBalance(requestedAmount,user.balance) === true)
        ? (user.balance += requestedAmount,
            console.log(user.balance),
            user.transactions.push({
                date: `${year}-${month}-${day}`,
                amount: requestedAmount,
                action: "Ingreso" 
            }))
        : console.log("transaction failed");
    
}