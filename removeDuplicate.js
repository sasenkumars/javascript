function removeDuplicate(arr){
 return  arr.filter((item ,index) => arr.indexOf(item) == index);
}
console.log(removeDuplicate(['a','b','c','a','c','b','c','a']));