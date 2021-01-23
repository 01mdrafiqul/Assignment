function kilometerToMeter (kilometer){
    if(kilometer < 0){
        return "kilometer can't be negetive";
    }
    else{ 
        var meter = kilometer * 1000;
        return meter;
    }
}

function budgetCalculator (noOfWatch , noOfPhone , noOflaptop){
    if(noOfWatch < 0 || noOfPhone < 0 || noOflaptop < 0){
        return "No. of item can't be negetive";
    }
    else{
        var watchCost = noOfWatch * 50;
        var phoneCost = noOfPhone * 100;
        var laptopCost = noOflaptop * 500;
        var totalBudget = watchCost + phoneCost + laptopCost;
        return totalBudget;
    }
}

function hotelCost (livingDay){
    if(livingDay < 0){
        return "Living day can't be negetive";
    }
    else{
        var totalCost;
        if (livingDay <= 10){
            totalCost = livingDay * 100;
        }
        else if (livingDay <= 20){
            totalCost = 1000 + (livingDay - 10) * 80;
        }
        else {
            totalCost = 1800 + ((livingDay - 20) * 50);
        }
    return totalCost;
    }
}

function megaFriend(){ 
        var max = friendName[0];
        for(var i = 0 ; i < friendName.length ; i++){
            var element = friendName[i];
            if(element.length > max.length){
                max = element;
            }
        }
        return max;
}

    

    friendName = ["lamfdsffal" , "talbosto" , "trevatson"];
 var a = megaFriend(friendName);
 console.log(a);
