function calculator(a,b,operation){
    let result ;
    {
        switch(operation){
            case "+" : 
             result = a+b ;
             break ;

            case "-" :
              result = a-b ;
              break ;
              
             case "*" :
                result = a*b ;
                break ;

            case "/" :
                result = a/b ;
                break ;

            case "%" :
                result =  a%b ;
               break ;
            default :
                result = false ;
                break ;   

        }
    return console.log(result) ;
    }
}

calculator(10,12,"=");