let totalItems = 0;
const applePrice = 10;
const mangoPrice = 30;
const orangePrice = 20;
let balanceAmount = 0;

let totalAmount;
let amountSubmit;

function submit(){
    amountSubmit = parseInt(document.querySelector('#userAmount').value);
    document.querySelector('#amountEntered').innerHTML = amountSubmit;
}

function plus(){

    if (amountSubmit == null ) {
        alert("Plz ! Submit Your Amount First ");
        totalItems = 0;
    }
    else{
        totalItems+=1;
        balanceAmount = amountSubmit - (applePrice*totalItems);

        totalAmount = applePrice*totalItems;
        
        if(balanceAmount < 0){
            alert("Your Amount Ended!!");
            balanceAmount=0;
            totalItems--;
            document.querySelector('#balance').innerHTML=balanceAmount;
            totalAmount -= applePrice; 
        }

        document.querySelector('.numOfItems').innerHTML=totalItems;
        document.querySelector('.numOfItem').innerHTML=totalItems;
        document.querySelector('#balance').innerHTML=balanceAmount;        
        document.querySelector('#userTotalAmount').innerHTML=totalAmount;        
    }
    
    
}

function minus(){
    if (amountSubmit == null ) {
        alert("Plz ! Submit Your Amount First ");
        totalItems = 0;
    }
    else{

    
    totalItems-=1;
    balanceAmount = balanceAmount + applePrice;
    totalAmount -= applePrice;
    
    if (totalItems < 0 ) {
        alert("Order Can't Be Zero !!! ");
        totalItems++;
        balanceAmount -= applePrice;
        totalAmount += applePrice;
    }
    
    document.querySelector('#userTotalAmount').innerHTML=totalAmount;
    document.querySelector('#balance').innerHTML=balanceAmount; 
    document.querySelector('.numOfItems').innerHTML=totalItems;
    document.querySelector('.numOfItem').innerHTML=totalItems;
    }
}

