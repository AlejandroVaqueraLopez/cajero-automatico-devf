function viewBalanceFn(user){
    //return the balance of user
    return user.balance;
}

//for the date transaction history
function dateTransactionItemCreator(user){
    var dateTransactionItem = ``;
    var cont = user.transactions.length - 1;

    for(cont = user.transactions.length - 1; cont >= 0; cont--){
        dateTransactionItem += `
            <li>${user.transactions[cont].date}</li>
        `;
    }
    return dateTransactionItem;
}
//for the amount history
function amountTransactionItemCreator(user){
    var amountTransactionItem = ``;
    var cont = user.transactions.length - 1;

    for(cont = user.transactions.length - 1; cont >= 0; cont--){
        amountTransactionItem += `
            <li>${user.transactions[cont].amount}</li>
        `;
    }
    return amountTransactionItem;
}
//for the transaction action history
function actionTransactionItemCreator(user){
    var actionTransactionItem = ``;
    var cont = user.transactions.length - 1;

    for(cont = user.transactions.length - 1; cont >= 0; cont--){
        actionTransactionItem += `
            <li>${user.transactions[cont].action}</li>
        `;
    }
    return actionTransactionItem;
}

