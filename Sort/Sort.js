

function removeDuplicates(arr){
    arr.sort();    
    let arrLen = arr.length;
    if(arrLen === 0 ||  arrLen === 1) return arr;
    let temp = [];
    let j = 0;
    for (let i=0; i< arrLen-1; i++){
        if (arr[i] != arr[i+1])
            temp[j++] = arr[i];
    }

    temp[j++] = arr[arrLen-1];
 
    for (let i=0; i<j; i++)
        arr[i] = temp[i];
 
    return temp;

}

module.exports = removeDuplicates;