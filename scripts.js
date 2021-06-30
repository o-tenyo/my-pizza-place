//defining some variables
let priceOfSize;
let priceOfCrust;
let priceOfTopping;
let numberOfPizza;
let priceOfPizza;
let deliveryFee = 250;
//this function returns the price of a specific pizza size

function priceBySize(){
    let valueOfSize = document.getElementById('pizza-size').value;
    if(valueOfSize==1){
        priceOfSize = 300;
        return priceOfSize;
    }
    else if(valueOfSize==2){
        priceOfSize = 600;
        return priceOfSize;
    }
    else if(valueOfSize==3){
        priceOfSize = 1000;
        return priceOfSize;
    }
    else if(valueOfSize==4){
        priceOfSize = 1500;
        return priceOfSize;
    }
    else if(valueOfSize==5){
        priceOfSize = 2000;
        return priceOfSize;
    }
}


