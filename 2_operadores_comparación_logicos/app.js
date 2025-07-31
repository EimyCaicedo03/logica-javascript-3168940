 //Bolean(...)

console.log( ' "5" == "5" ' , "5 "== "5" )//true
console.log( ' "5" === "5" ' , "5" === "5" )//true
console.log( ' 5 === "5" ' , 5 === "5" )//false
console.log( ' 5 == "5" ' , 5 == "5" )//true
console.log( ' 5 === (3+2) ' , "5" === (3+2) )//false
console.log( ' 5 === 5 ' , 5 === 5 )//true


//concatenar (+)

console.log( 5 + "3" ) // "53"
console.log( 5 + Number("3") ) // "8"
console.log( 5 * "3" ) // "15"
console.log( 5 + 3) // 8

//pida dos numeros al usuario y sumelos
let num1 = Number ( prompt ('dame num 1') )// "5"
let num2 = Number (prompt ('dame num 2') ) // "3"
let resultado = num1 + num2
alert( "El resultado de tu suma es " + resultado )

// solucion del ejercicio concatenado (+)
/* let num3 = Number (prompt('dame un numero') )
let num4 = Number (prompt('dame otro numero') )
let suma = num3 + num4
let resta = num3 - num4
let multiplicacion = num3 * num4
let division = num3 / num4
alert ('la suma de ' + num3 + ' + ' + num4 + ' = ' + suma)
alert ('la resta de ' + num3 + ' - ' + num4 + ' = ' + resta)
alert ('la multiplicacion de ' + num3 + ' * ' + num4 + ' = ' + multiplicacion)
alert ('la division de ' + num3 + ' / ' + num4 + ' = ' + division) */

//
console.log (`Tu numero es ${num3}`)




