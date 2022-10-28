function duplicate(a){
    let result = [];
    let count = 0;
    let start = false;
    for(let i=0;i<a.length;i++){
        for(let j=0;j<result.length;j++){
           if(a[i] === result[j]){
            start = true
            }  
        }
        count++;
        if(count == 1 && start == false){
            result.push(a[i]);
        }
        start = false;
        count = 0 ;
    }
    return result;

}
console.groupCollapsed(duplicate(['a','b','c','a','b','c']));