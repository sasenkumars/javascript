function duplicate(arr){
    const obj = {};
    arr.map(item =>{
        if(obj[item])
         obj[item] += 1;
        else 
         obj[item] = 0;
    })
    return Object.keys(obj);
           
    }


console.log(duplicate(['a','b','c','a','c','a','a']));