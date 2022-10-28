function reverse(a,start,end){
    while(start < end){
        [a[start],a[end]] = [a[end],a[start]];
        start += 1;
        end -= 1;
    }
    return a;
}
function printArray(a)
	{
		for (let i = 0; i < a.length; i++)
			console.log(a[i] + " ");
		
	}
    let a =[1,2,3,4,5];

printArray(a);
		reverse(a, 0, 5);
		console.log("Reversed array is - ");
		printArray(a);
		