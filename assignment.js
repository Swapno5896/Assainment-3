//https://github.com/Swapno5896/Assainment-3

function kilometerToMeter(kiloMeter){
    if(kiloMeter<=0){
        console.log("you can't enter 0 or negetive value");
    }
    else{
        return kiloMeter * 1000

    }
}
var a =kilometerToMeter(-4)
console.log(a)



//second problem
function budgeCalculator(wathNo,phnNo,LaptopNo){
    if(wathNo>0 && phnNo>0 && LaptopNo>0){
        return (wathNo*50) + (phnNo*100) + (LaptopNo *500)

    }
    else{
        console.log('Soorry, your can pass 0 , negetive or string value. Please check and try again');
    }
}

console.log(budgeCalculator('p',1,1))


//third problem

function hotelCost(daysNo){
    if(daysNo>0){
        if(daysNo<=10){
            return daysNo*100
        }
        if(daysNo<=20){
            return (10*100) + [(daysNo-10)*80]
        }
        if(daysNo>20){
            return (10*100) + (10*80) + (daysNo-20)*50
        }
    }
    else{
        console.log('you can not pass 0 negetive or string')
    }
}
console.log(hotelCost(50))