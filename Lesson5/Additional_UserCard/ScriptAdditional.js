
function userCard3 (num){
     return {balance:100,key:num , transLimit:100};

}
const card3 = userCard3(3)
console.log(card3);
console.log(card3.balance);

function userCard1(num){

    const card ={balance:100,key:num , transLimit:100 ,historyLogs:[]}
    return{
        getCardOptions: () =>{
            return{
                balance: card.balance,
                transactionLimit:card.transLimit,
                historyLogs:card.historyLogs,
                key:num,
            }
        },
        putCredits:(putMoney) =>{
            if(putMoney > 0){
                    card.balance += putMoney;
                    card.historyLogs.push({operationType:"Received  credits", credits: putMoney, operationTime: new  Date()})
            }
        },
        takeCredits:(takeCreditMoney) =>{
                if(card.transLimit > takeCreditMoney || card.balance > takeCreditMoney){
                    card.balance -= takeCreditMoney;
                    card.historyLogs.push({operationType:"Withdrawal of  credits", credits: takeCreditMoney, operationTime: new  Date()})
                }else{
                    throw new  Error ('Недостатньо коштів');
                }
        },
        setTransactionLimit:(limit) =>{
            if(limit > 0){
                card.transLimit = limit;
                card.historyLogs.push({operationType:"Transaction limit change", credits: limit, operationTime: new  Date()});
            }
        },
        transferCredit:(transMoneyCredits, cardRecipient) =>{
                if(card.balance > transMoneyCredits || card.transLimit >transMoneyCredits){
                    card.balance -= transMoneyCredits + (transMoneyCredits*0.005);
                    card3.balance += transMoneyCredits;

                }
        }
    }
}

const card1 = userCard1(1);
card1.putCredits(10000);
console.log(card1.getCardOptions());
card1.takeCredits(500);
console.log(card1.getCardOptions());
card1.transferCredit(100,card3);

card1.setTransactionLimit(200);
console.log(card1.getCardOptions());


console.log(card3.balance);