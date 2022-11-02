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
function persona (nombre, edad, altura, color){
    this.nombre = nombre;
    this.edad= parseInt(edad);
    this.altura= parseFloat(altura);
    this.color= color;
    this.saludar = function(){console.log('hola soy '+this.nombre)}
    this.jubilacion= function(anos){
        this.edad-=anos;
    }
}
const persona2 = new persona('lolo',39,1.56,'blanco')
const persona3 = new persona('ale',35,1.76,'blanco')
const persona4 = new persona('lau',30,1.66,'blanco')

console.log(persona2);
console.log(persona3);
console.log(persona4);

persona2.saludar();
persona3.saludar();
persona4.saludar();

persona2.jubilacion(66)
console.log(persona2.edad)