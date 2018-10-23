var c1:any = document.getElementById("canvas");
var c2:any = document.getElementById("canvas2");
if(c1!==undefined && c1.getContext){
    let ancha:number = c1.width;
    let alto:number = c1.height;

    var ctx1:CanvasRenderingContext2D =c1.getContext
}
interface punto{
    x:number,
    y:number
}
function pintarTriangulo(p1:punto,p2:punto,p3:punto, contexto:CanvasRenderingContext2D, relleno:boolean=false){
    contexto.beginPath();
    contexto.moveTo(p1.x,p1.y);
    contexto.lineTo(p2.x,p2.y);
    contexto.lineTo(p3.x,p3.y);
    contexto.closePath();
    if(relleno){
     contexto.fill();
     contexto.closePath();
    }
    
}

if (c2!==undefined && c2.getContext){
    let ancho:number = c2.width;
    let alto:number = c2.height;
 
 var ctx1:CanvasRenderingContext2D =c2.getContext("2d");
     
   pintarTriangulo({x:0,y:0},{x:ancho,y:alto},{x:0,y:alto},ctx1)
  ctx1.stroke()
 
 }else
     console.log("no se pudo acceder al canvas")