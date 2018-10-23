
interface persona{
    nombre:string
    edad:number
    sexo:string
}
function calcularSueldo(x:persona):number{
    if (x.edad>18)
        return 100
    else
        return x.edad*5
}
// cuerpo principal
var p:persona={
    nombre:"jose luis",
    edad:38,
    sexo:"masculino"
}

console.log("El valor del sueldo es "+calcularSueldo(p))
p.edad=15
console.log("El valor del sueldo es "+calcularSueldo(p))