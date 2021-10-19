function insertionSort(arr)
{ 
    for (var i = 1; i < arr.length; i++)
    { 
        var current = arr[i]; 
        var j = i - 1; 
        while (j >= 0 && arr[j] > current)
        { 
            arr[j + 1] = arr[j]; 
            j--; 
            
        } 
        arr[j + 1] = current; 
    }
    return arr;
} 

console.log(insertionSort([1, 9, 8, 15, 76, 4, 2]));


