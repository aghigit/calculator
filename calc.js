function displayData(e){
    result.value+=e;
}
function out(){
    result.value=eval(result.value)
}
function allclear(){
    result.value="";
}
function backC(){
   result.value=result.value.slice(0,-1)
}
console.log(result);  