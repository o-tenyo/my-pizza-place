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
//function to return prices of crust
function priceByCrust(){
    let valueOfCrust = document.getElementById('pizza-crust').value;
    if(valueOfCrust==1){
        priceOfSize = 220;
        return priceOfCrust;
    }
    else if(valueOfCrust==2){
        priceOfCrust = 300;
        return priceOfCrust;
    }
    else if(valueOfCrust==2){
        priceOfCrust = 190;
        return priceOfCrust;
    }
    else if(valueOfCrust==3){
        priceOfCrust = 350;
        return priceOfCrust;
    }
    else if(valueOfCrust==4){
        priceOfCrust = 400;
        return priceOfCrust;
    }
    else if(valueOfCrust==5){
        priceOfCrust = 280;
        return priceOfCrust;
    }
}
//function to return prices of toppings
function priceByToppings(){
    let valueOfToppings = document.getElementById('pizza-toppings').value;
    if(valueOfToppings==1){
        priceOfTopping = 110;
        return priceOfTopping;
    }
    else if(valueOfToppings==2){
        priceOfTopping = 105;
        return priceOfTopping;
    }
    else if(valueOfToppings==2){
        priceOfTopping = 130;
        return priceOfTopping;
    }
    else if(valueOfToppings==2){
        priceOfTopping = 120;
        return priceOfTopping;
    }
}
//delivery==YES
function deliverFood(){  
    numberOfPizza = document.getElementById('num').value;
    priceOfPizza = deliveryFee + (numberOfPizza * (priceBySize() + priceByCrust() + priceByToppings()));
    var location = prompt('Please enter your location: ');
    alert(`Your order will be delivered to ${location}\nTotal amount: ${priceOfPizza}\nYour pizza shall be delivered in 30min.`);
}
//delivery==NO
function eatAtRestaurant(){
    numberOfPizza = document.getElementById('num').value;
    priceOfPizza = numberOfPizza * (priceBySize() + priceByCrust() + priceByToppings());
    alert(`Total amount is ${priceOfPizza}\nWelcome to our Restaurant!!\nYour pizza shall be ready in 30min.\n`)
}
//submissiom
function submissionClicked(){
    if(document.getElementById('yes').checked){  
        deliverFood();
    }
    else if(document.getElementById('no').checked){    
        eatAtRestaurant();
    }
}


