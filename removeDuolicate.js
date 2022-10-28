function duplicate(arr){
    return [...new Set(arr)];
    
}
console.log(duplicate(['a','b','c','a','c','b','c','a']));