function LCM(num1, num2){
    if(num1 > num2)
    greater = num1;
    else
    greater = num2;
    while(true){
    if((greater % num1 == 0) && (greater % num2 == 0)){
    lcm = greater;
    break;
    }
    greater += 1;
    }
    return lcm;
}
console.log(LCM(12,16));