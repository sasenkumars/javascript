function checkSorted(arr, n) {
    if (n == 1)
      return true;
    let i;
    for (i = 1; i < n && arr[i - 1] < arr[i]; i++);
    if (i == n)
      return true;
  
    let j = i;
    while (j < n && arr[j] < arr[j - 1]) {
      if (i > 1 && arr[j] < arr[i - 2])
        return false;
      j++;
    }
    if (j == n) // when step 3 elements not present
      return true;
  
    let k = j;
    if (arr[k] < arr[i - 1])
      return false;
    while (k > 1 && k < n) {
      if (arr[k] < arr[k - 1])
        return false;
      k++;
    }
    return true;
  }
  
  
  
  let arr = [1, 2, 14, 10, 9, 8];
  let n = arr.length;
  
  if (checkSorted(arr, n)) {
    console.log("True");
  } else {
    console.log("False");
  }
  