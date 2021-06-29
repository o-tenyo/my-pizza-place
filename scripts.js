let priceOfSize;
let priceOfCrust;
let priceOfTopping;

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

function pricebyCrust(){
    if(document.getElementById('crispy').checked){   
        let size = document.getElementById('crispy');
        priceOfCrust = 220;
        return priceOfCrust;
    }
    else if(document.getElementById('stuffed').checked){    
        let size = document.getElementById('stuffed');
        priceOfCrust = 300;
        return priceOfCrust;
    }
    else if(document.getElementById('sicillian').checked){
        let size = document.getElementById('sicillian');
        priceOfCrust = 190;
        return priceOfCrust;
    }
    else if(document.getElementById('gluten-free').checked){
        let size = document.getElementById('gluten-free');
        priceOfCrust = 350;
        return priceOfCrust;
    }
    else if(document.getElementById('thick').checked){
        let size = document.getElementById('thick');
        priceOfCrust = 400;
        return priceOfCrust;
    }
}

function submissionClicked(){
    if(document.getElementById('yes').checked){  
        let delivery = document.getElementById('yes');
        deliverFood();
    }
    if(document.getElementById('female').checked){    
        let delivery = document.getElementById('no');
        eatAtRestaurant();
    }
}





// function deliverFood(){
    
// }

// function eatAtRestaurant(){

// }

