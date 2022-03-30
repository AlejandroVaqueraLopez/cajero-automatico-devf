function validateBalance(requestedAmount,balance){
    if((balance + requestedAmount) >= 10 && (balance + requestedAmount) <= 990){
        return true;//transaction succeed
    }else{
        return false;//transaction failed 
    }
}