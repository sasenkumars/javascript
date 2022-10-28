function partition(a,l,h){
    let pivot = a[h];
    let i = (l-1);
    for(let j=l;j <= h- 1;j++){
        if(a[j] <= pivot){
            i++;
            [a[i],a[j]] = [a[j],a[i]];
        }
    }
    [a[i+1],a[h]] =[a[h],a[i+1]];
 return i+1;
}
function quickSortIterative(a,l,h){
    let stack = new Array(h - 1 + 1);
    stack.fill(0);
    let top = -1;
    stack[++top] = l;
    stack[++top] = h;
    while(top >= 0){
        h = stack[top--];
        l = stack[top--];
        let p = partition(a,l,h);
        if(p - 1 > l){
            stack[++top] = l;
            stack[++top] = p - 1;
        }
        if(p + 1 < h){
            stack[++top] = p + 1;
            stack[++top] = h;
        }
    }
}
let a = [3,6,5,2,10];
let n = a.length;
quickSortIterative(a,0,n-1);
for(let i=0;i < n;i++)
    console.log(a[i] + " ");
