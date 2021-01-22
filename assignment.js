//https://github.com/Swapno5896/Assainment-3
var ErrorMessage = "Invaid Input.You can't enter 0 or negetive value. Please check and try again";
// first problem
function kilometerToMeter(kiloMeter){
    if(kiloMeter<=0){
        return(ErrorMessage);
    }
    else{
        return kiloMeter * 1000;
    }
}




//second problem
function budgetCalculator(watchNo,phnNo,LaptopNo){
    if(watchNo>0 && phnNo>0 && LaptopNo>0){
        return (watchNo*50) + (phnNo*100) + (LaptopNo *500)
    }
    else{
        return(ErrorMessage);
    }
}



//third problem
function hotelCost(daysNo){
    if(daysNo>0){
        if(daysNo<=10){
            return daysNo*100
        }
        else if(daysNo<=20){
            return (10*100) + [(daysNo-10)*80]// days-10 = 10 din ar porer din sonka
        }
        else if(daysNo>20){
            return (10*100) + (10*80) + (daysNo-20)*50// days-10 = 10 din ar porer din sonka, days-20 =20 din ar porer din shonka
        }
    }
    else{
        return(ErrorMessage);
    }
}



//fourth problem
function megaFriend(array){
   if(array==''){
       return("Invalid input. Please enter valid array")
   }
   else{
    var biggestName =array[0];
    for(i=0; i<array.length; i++){
        var itemlenth = array[i].length//potita element ar length store korbe
        var biggestNameNO = biggestName.length//boro nam ar lenght
        if(biggestNameNO<itemlenth){
        biggestName = array[i]

        }
      }
    return(biggestName);
    }
}





