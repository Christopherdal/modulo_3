// function calcular_bono(monto:number){
//     if (monto>1000)
//         return monto+=100;
//     else
//         return monto;

// }

// var a: number
// var b: string
// a=calcular_bono(1500)
// // la b no coincide porque la funcion retorna un valor de tipo de dato number
// b=calcular_bono(10)
// // a menos que: convirtamos a string con :
// // b=tofixed.calcular_bono(10)

function calcular_bono(monto:number, porc=10, x?:boolean ){
    // porc es opcional. se ausme que si no se pasa porc por parametrios por defecto sera 10 
    if (x==undefined)
        x=false


    if (monto>1000)
        return monto+=100*porc/100;
    else
        return monto;

}

var a:number
var b:number
var c:number
a=calcular_bono(1500)
b=calcular_bono(1500,20)
c=calcular_bono(1500,25,false)

console.log("el valor: "+a)
console.log("el valor: "+b)
console.log("el valor: "+c)











