function identifyPrime(num) {
    let num2=true;
    if(num>1){
        for(i=2;i<num;i++){
            if(num%i==0){
                num2=false;
                break;
            }
        }
    }if(num2){
        console.log("Yes")
    }else{
        console.log("No")
    }
//the Palindrom
function checkPalindrome(N, str) {
    //write code here
    p="";
    for(let i=N-1;i>=0;i--){
        p+=str[i]
    }if(str==p){
        console.log("Yes");
    }else{
        console.log("No")
    }
  
}