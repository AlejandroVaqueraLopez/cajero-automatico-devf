globalThis.user = [
    {
        id:1,
        name:"alejandro",
        email:"ale@gmail.com",
        password:"hola",
        balance:10,
        transactions:[
            {
                date:"2022-2-01",
                amount:10,
                action:"Retiro"
            }
        ]
    }
];

function viewBalanceFn(user){
    //return the balance of user
    return user.balance;
}


//for the date transaction history
function dateTransactionItemCreator(user){
    var dateTransactionItem = ``;
    var cont = 0;

    for(cont = 0; cont < user.transactions.length; cont++){
        dateTransactionItem += `
            <li>${user.transactions[cont].date}</li>
        `;
    }
    return dateTransactionItem;
}
//for the amount history
function amountTransactionItemCreator(user){
    var amountTransactionItem = ``;
    var cont = 0;

    for(cont = 0; cont < user.transactions.length; cont++){
        amountTransactionItem += `
            <li>${user.transactions[cont].amount}</li>
        `;
    }
    return amountTransactionItem;
}
//for the transaction action history
function actionTransactionItemCreator(user){
    var actionTransactionItem = ``;
    var cont = 0;

    for(cont = 0; cont < user.transactions.length; cont++){
        actionTransactionItem += `
            <li>${user.transactions[cont].action}</li>
        `;
    }
    return actionTransactionItem;
}

