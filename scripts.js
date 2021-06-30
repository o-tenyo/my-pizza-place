//defining some variables
let priceOfSize;
let priceOfCrust;
let priceOfTopping;
let numberOfPizza;
let priceOfPizza;
let deliveryFee = 250;
//this function returns the price of a specific pizza size
let valueOfSize = document.getElementById('pizza-size').value;
if(valueOfSize == 2){
    console.log('medium');
}

function pricebySize(){
    if(document.getElementById('small').checked){   
        let size = document.getElementById('small');
        priceOfSize = 300;
        return priceOfSize;
    }
    else if(document.getElementById('medium').checked){    
        let size = document.getElementById('medium');
        priceOfSize = 600;
        return priceOfSize;
    }
    else if(document.getElementById('large').checked){
        let size = document.getElementById('large');
        priceOfSize = 1000;
        return priceOfSize;
    }
    else if(document.getElementById('extra-large').checked){
        let size = document.getElementById('extra-large');
        priceOfSize = 1500;
        return priceOfSize;
    }
}
//this function returns the price of a specific pizza crust
function pricebyCrust(){
    if(document.getElementById('crispy').checked){   
        let crust = document.getElementById('crispy');
        priceOfCrust = 220;
        return priceOfCrust;
    }
    else if(document.getElementById('stuffed').checked){    
        let crust = document.getElementById('stuffed');
        priceOfCrust = 300;
        return priceOfCrust;
    }
    else if(document.getElementById('sicillian').checked){
        let crust = document.getElementById('sicillian');
        priceOfCrust = 190;
        return priceOfCrust;
    }
    else if(document.getElementById('gluten-free').checked){
        let crust = document.getElementById('gluten-free');
        priceOfCrust = 350;
        return priceOfCrust;
    }
    else if(document.getElementById('thick').checked){
        let crust = document.getElementById('thick');
        priceOfCrust = 400;
        return priceOfCrust;
    }
}
//this function returns the price of a specific pizza topping
function pricebyToppings(){
    if(document.getElementById('mushroom').checked){   
        let toppings = document.getElementById('mushroom');
        priceOfTopping = 110;
        return priceOfTopping;
    }
    else if(document.getElementById('pepperoni').checked){    
        let toppings = document.getElementById('pepperoni');
        priceOfTopping = 1050;
        return priceOfTopping;
    }
    else if(document.getElementById('onion').checked){
        let toppings = document.getElementById('onion');
        priceOfTopping = 130;
        return priceOfTopping;
    }
    else if(document.getElementById('sausage').checked){
        let toppings = document.getElementById('sausage');
        priceOfTopping = 120;
        return priceOfTopping;
    }
}
//delivery==YES
function deliverFood(){  
    numberOfPizza = document.getElementById('num').value;
    priceOfPizza = deliveryFee + (numberOfPizza * (pricebySize() + pricebyCrust() + pricebyToppings()));
}
//delivery==NO
function eatAtRestaurant(){
    pnumberOfPizza = document.getElementById('num').value;
    priceOfPizza = numberOfPizza * (pricebySize() + pricebyCrust() + pricebyToppings());
}
//submissiom
function submissionClicked(){
    // alert("OK!");
    if(document.getElementById('yes').checked){  
        let delivery = document.getElementById('yes');
        deliverFood();
    }
    else if(document.getElementById('no').checked){    
        let delivery = document.getElementById('no');
        eatAtRestaurant();
    }
}

if(document.getElementById('medium').value){
    // alert('Ready!!');
}