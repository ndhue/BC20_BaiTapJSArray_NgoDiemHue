var arrNum = [];
function addElement(){
    //lấy giá trị từ form
    var num = Number(document.querySelector("#inputNum").value);
    arrNum.push(num);
    console.log(arrNum);
    document.querySelector("#printArray").innerHTML = arrNum;
}
document.querySelector("#btnNum").onclick = addElement;

// Cau 1
function sumOfPositive(){
    var sum=0;
    for(var i=0; i<arrNum.length; i++){
        if(arrNum[i]>0)
            sum+= arrNum[i];
    }
    console.log(sum);
    document.querySelector("#printSum").innerHTML = sum;
}
document.querySelector("#btnSum").onclick = sumOfPositive;

// Cau 2
function countPost(){
    var count=0;
    for(var i=0; i<arrNum.length; i++){
        if(arrNum[i]>0)
            count++;
    }
    console.log(count);
    document.querySelector("#printCountPost").innerHTML = count;
}
document.querySelector("#btnCountPost").onclick = countPost;

// Cau 3
function findMin(){
    var min=arrNum[0];
    for(var i=1; i<arrNum.length; i++){
        if(min > arrNum[i]){
            min = arrNum[i];
        }
    }
    console.log(min);
    document.querySelector("#printMin").innerHTML = min;
}
document.querySelector("#btnMin").onclick = findMin;

// Cau 4
function findMinPost(){
    var min;
    for(var i=0; i<arrNum.length; i++){
        if(arrNum[i]>0)
            min=arrNum[i];
            break;
    }
    for(var i=0; i<arrNum.length; i++){
        if(arrNum[i]>0 && arrNum[i]<min)
            mim=arrNum[i];
    }
    console.log(min);
    document.querySelector("#printMinPost").innerHTML = min;
}
document.querySelector("#btnMinPost").onclick = findMinPost;

// Cau 5
function findLastEven(){
    var last;
    for(var i=arrNum.length-1; i>=0; i--){
        if(arrNum[i]%2==0){
            last=arrNum[i];
            break;
        }else{
            last=-1;
        }
    }
    console.log(last);
    document.querySelector("#printEven").innerHTML = last;
}
document.querySelector("#btnEven").onclick = findLastEven;

// Cau 6
function changeIndex(){
    var arr=arrNum;
    idx1 = document.getElementById("so1").value;
    idx2 = document.getElementById("so2").value;
    var temp= arr[idx2];
    arr[idx2]=arr[idx1];
    arr[idx1]=temp;
    console.log(arr);
    document.querySelector("#printChange").innerHTML = arr;
}
document.querySelector("#btnChange").onclick = changeIndex;

// Cau 7
function sort(){
    arr=arrNum;
    for(var i=0; i<arr.length-1; i++){
        for(var j=0;j<arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j]; 
                    arr[j] = arr[j+1]; 
                    arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
    document.querySelector("#printSort").innerHTML = arr;
}
document.querySelector("#btnSort").onclick = sort;

// Cau 8
function isPrime(n){
   if (n<2)
      return false;
   for (var i=2; i<n; i++)
      if (n%i==0)
         return false;
   return true;
}
function findPrime(){
    var a;
    for(var i=0; i<arrNum.length; i++){
        if(isPrime(arrNum[i])){
            a=arrNum[i];
            break;
        }else{
            a=-1;
        }
    }
    console.log(a);
    document.querySelector("#printPrime").innerHTML = a;
}
document.querySelector("#btnPrime").onclick = findPrime;

// Cau 9
var arr2=[];
function addElement2(){
    var num = Number(document.querySelector("#inputNum1").value);
    arr2.push(num);
    console.log(arr2);
    document.querySelector("#printPositiveArr").innerHTML = arr2;
}
document.querySelector("#btnPositiveArr").onclick = addElement2;
function countPositive(){
    var count=0;
    for(var i=0; i<arr2.length; i++){
        if(Number.isInteger(arr2[i]))
            count++;
    }
    console.log(count);
    document.querySelector("#printPositive").innerHTML = count;
}
document.querySelector("#btnPositive").onclick = countPositive;

// Cau 10
function soSanh(){
    var count=0;
    var count1=0;
    var msg;
    for(var i=0; i<arrNum.length; i++){
        if(arrNum[i]>0)
            count++;
        else
            count1++;
    }
    if(count>count1)
        msg = "Số dương > Số âm";
    else if(count<count1)
        msg = "Số dương < Số âm";
    else
        msg = "Số dương = Số âm";
    console.log(msg);
    document.querySelector("#print10").innerHTML = msg;
}
document.querySelector("#btn10").onclick = soSanh;