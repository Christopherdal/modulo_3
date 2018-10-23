var c = document.getElementById("canvas");
var c2 = document.getElementById("canvas2");
// function x(x:number,y:number){
//     context.beginPath();
//     context.moveTo(0,0);
//     context.lineTo(x,y);
//     context.lineTo(0,500);
//     context.closePath();
//     context.fill()
//     context.stroke();
// }
// interface punto{
//     x:number,
//     y:number
// }
// function pintarTriangulo(p1:punto,p2:punto,p3:punto, contexto:CanvasRenderingContext2D, relleno:boolean=false){
//     contexto.beginPath();
//     contexto.moveTo(p1.x,p1.y);
//     contexto.lineTo(p2.x,p2.y);
//     contexto.lineTo(p3.x,p3.y);
//     contexto.closePath();
//     if(relleno){
//         contexto.fill();
//         contexto.closePath();
//     }
// }
if (c2 !== undefined && c2.getContext) {
    var ancho = c2.width;
    var alto = c2.height;
    var ctx1 = c2.getContext("2d");
    pintarTriangulo({ x: 0, y: 0 }, { x: ancho, y: alto }, { x: 0, y: alto }, ctx1);
    ctx1.stroke();
}
else
    console.log("no se pudo acceder al canvas");
// if (c!==undefined && c.getContext){
//     console.log("el ancho del canvas es: "+ c.width);
//     console.log("el alto del canvas es: "+ c.height);
//     // no es necesario delarar este tipo de dato(es solo para que visual code muestre los metodos disponibles) tan definido, tambien puedes definirlo any
//     var context:CanvasRenderingContext2D =c.getContext("2d");
//     var i:number
//     do {
//     setInterval("x(500,500)",3000)
//     setInterval("x(150,500)",1000)
//     i=i-20
//     }while(i==1)
//     // context.beginPath();
//     // context.moveTo(0,0);
//     // context.lineTo(500,500);
//     // context.lineTo(0,500);
//     // context.closePath();
//     // context.fill()
//     // context.stroke();
// }else
//     console.log("no se pudo acceder al canvas")
