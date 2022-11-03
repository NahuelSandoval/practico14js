const persona1 = {
    nombre: 'elon',
    edad: 14,
    color: 'blanco'
}

console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona1.color)

/* persona1['nombre']='tobias'
console.log(persona1.nombre) */

//imprimir con punto
/* alert('nombre es ' + persona1.nombre + '\ntiene ' + persona1.edad + ' años ' + '\ny es de color ' + persona1.color) 
//imprimir con corchete, mas recomendable
alert('nombre es ' + persona1['nombre'] + '\ntiene ' + persona1['edad'] + ' Años ' + '\ny es de color ' + persona1['color'])
*/
function persona(nombre, edad, altura, color) {
    this.nombre = nombre;
    this.edad = parseInt(edad);
    this.altura = parseFloat(altura);
    this.color = color;
    this.saludar = function () { console.log('hola soy ' + this.nombre) }
    this.jubilacion = function (anos) {
        this.edad -= anos;
    }
}
const persona2 = new persona('lolo', 39, 1.56, 'blanco')
const persona3 = new persona('ale', 35, 1.76, 'blanco')
const persona4 = new persona('lau', 30, 1.66, 'blanco')

console.log(persona2);
console.log(persona3);
console.log(persona4);

persona2.saludar();
persona3.saludar();
persona4.saludar();

persona2.jubilacion(66)
console.log(persona2.edad * -1 + ' años para jubilarse le faltan a ' + persona2.nombre)

//--------clases
/* 
class ProductoClass{
    constructor(id,nombre,precio){
        this.id=parseInt(id)
        this.nombre=nombre
        this.precio=parseFloat(precio)
        }
        descuento(valor){
            this.precio-=valor
        }
}
const producto6 = new ProductoClass(3,'arroz',250)
console.log(producto6)
producto6.descuento(30)
console.log(producto6)
 */
//---------------------------

//-------IN Y FOR ... IN

console.log('nombre' in persona2);
console.log('locura' in persona3);

for (const propiedad in persona4) {
    console.log(propiedad)
    console.log(persona4[propiedad]);
}
//tambien te imprime los metodos

//-----------------------------------

//ejercicio

const jugadores = [
    {
        name: 'messi',
        edad: 37,
        pais: 'argentina',
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU" ,
    },
    {
        name: 'ronaldo',
        edad: 42,
        pais: 'portugal',
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU" ,
    },
    {
        name: 'mbappe',
        edad: 23,
        pais: 'francia',
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU" ,
    },
    {
        name: 'mbappe',
        edad: 23,
        pais: 'francia',
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU" ,
    },
    {
        name: 'mbappe',
        edad: 23,
        pais: 'francia',
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU" ,
    },
    {
        name: 'mbappe',
        edad: 23,
        pais: 'francia',
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU" ,
    },
    {
        name: 'mbappe',
        edad: 23,
        pais: 'francia',
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU" ,
    },
    {
        name: 'mbappe',
        edad: 23,
        pais: 'francia',
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU" ,
    },
]
const figuritasHTML = document.getElementById('figuritas')
//template strings--------
/* let template = `<div class="caja">
                <h2>nombre: ${jugadores[0].name}</h2>
                <p>edad: ${jugadores[0].edad}</p>
                <p>pais: ${jugadores[0].nacionalidad}</p>
                </div>` */

const plantilla = (jugador) =>{
        return  `<div class="caja">
                    <h2>${jugador.name}</h2>
                    <img src="${jugador.thumbnail}" class="foto" >
                    <p>edad: ${jugador.edad}</p>
                    <p>pais: ${jugador.pais}</p>
                </div>`
}
for(jugador of jugadores){
    figuritasHTML.innerHTML+=plantilla(jugador)
}

