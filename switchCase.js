function switchCase(num){
    switch(true){
        case (num > 0) :
            return 'positive';
            break;
        case (num < 0) :
            return 'negative';
            break;
        case (num == 0) :
            return 'neutrol';
            break;
        default :
           return false;
    }

}
console.log(switchCase(0));