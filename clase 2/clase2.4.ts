class Figura{
    x:number
    y:number

    mostrarInformacion(){
        console.log("hola mundo")
        console.log("estoy en x:", this.x,",y:",this.y)
    }
}

let a :Figura = new Figura()
a.x=50
a.y=20

a.mostrarInformacion()