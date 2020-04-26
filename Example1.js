const num1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const num2 = [1,"2","3",1,2];


//priklad 1
function Example(arr)
{
//sorting array
arr.sort((a,b) => a-b);

// create new array to sign in
var newArr = [];
var newArrindex = 0;

for(i = 0; i < arr.length; i++)
{   
if(arr[i] != arr[i + 1])
{   
arrFilter = arr.filter((a) => a == arr[i])
if(arrFilter.length > 1)
{
    newArr[newArrindex] = arrFilter;
} 
else 
{
    newArr[newArrindex] = arr[i];
}

newArrindex++; 
}
}
return(newArr);
}