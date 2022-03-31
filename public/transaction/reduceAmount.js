//balance argument is viewBalance (function) returned value
function reduceAmountFn(requestedAmount,user){
    console.log(requestedAmount,user.balance);
    (validateBalance(requestedAmount,user.balance,"reduce") === true)
        ? (user.balance -= requestedAmount,
            console.log("transaction aproved"),
            user.transactions.push({
                date: `${year}-${month}-${day}`,
                amount: requestedAmount,
                action: "Retiro" 
            }))
        : console.log("transaction denied (less than $10)");
    
}