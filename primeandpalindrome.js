function identifyPrime(num) {
    let num2=false;
    if(num>1){
        for(i=2;i<num;i++){
            if(num%i!=0){
                num2=true;
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
    for(let i=N;i>=0;i--){
        p+=str[i]
    }if(str!=p){
        console.log("Yes");
    }else{
        console.log("No")
    }
  
}