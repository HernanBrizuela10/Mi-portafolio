//PROGRAMA
//number
//string
/* */


let num1=1, num2=2, num3=3;
function comparar(a, b, c){
}
function comparar(a, b, c=0){
if (a < b && a< c ){
    console.log(num,"Es mayor")
}else if(b < a && b < c){
    console.log(num2,"Es mayor")
}else if(c < a && c < b){
        console.log(num3,"Es mayor")
}else{
    console.log("Son iguales")
}
}
console.log(comparar(1,2,3));
console.log(comparar(4,5,6));
console.log(comparar(7,8,9));











