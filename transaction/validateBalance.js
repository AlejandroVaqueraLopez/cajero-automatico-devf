function validateBalance(requestedAmount,balance,action){
    if(action === "add"){
        if((balance + requestedAmount) >= 10 && (balance + requestedAmount) <= 990){
            return true;//transaction succeed
        }else{
            return false;//transaction failed 
        }
    }else if(action === "reduce"){
        if((balance - requestedAmount) >= 10 && (balance - requestedAmount) <= 990){
            return true;//transaction succeed
        }else{
            return false;//transaction failed 
        }
    }
}