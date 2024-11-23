// function singSong() {
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
// }

// function greet(firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}.`)
// }

// function repeat(str, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result);
// }

// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//     }
//     return x + y;
// }

// // Subamos el nivel
// // Recordemos el scope

// //Lexical scope

// function bankRobbery() {
//     const heroes = ['Batman', 'Green Lantern', 'Aquaman'];
//     function cryForHelp() {
//         for(let hero of heroes) {
//             console.log(`HELP ${hero}`);
//         }
//     }
// }

// //Function expressions

// const square = function(num) {
//     return num ** 2
// }

// console.log(square(7));

// //High order functions
// //Funciones que trabajan con otras funciones (reciben o retornan)

// function arregloFiltro(arreglo, prueba) {
//     const arregloFiltrado = [];
//     for (let elemento of arreglo) {
//         if (prueba(elemento)) {
//             arregloFiltrado.push(elemento);
//         }
//     }
//     return arregloFiltrado;
// };
// const arregloMezclado = [1, true, null, "Hola", undefined, "Mundo", false];
// const soloCadenas = arregloFiltro(arregloMezclado, elemento => typeof elemento === 'cadena');
// onlyCadenas; // ['Hola', 'Mundo']

// //Una mejora 

// const arregloMezclado2 = [1, true, null, "Hola", undefined, "Mundo", false];
// const stringArreglo = arregloMezclado2.filter(elemento => typeof elemento === 'cadena')
// arregloDeCadenas; // ['Hola', 'Mundo']

// //Algunos ejemplos con this

// //try - catch

// function yell(msg) {
//     try {
//         console.log(msg.toUpperCase().repeat(3));
//     } catch (e) {
//         console.log("Please pass a string next time!")
//     }
// }

//Arrow functions y Callbacks

//forEach, map, filter

//setTimeout, setInterval

//every, some

//reduce


//Ejercicio clase

const movies = [
    {
        title: 'El señor de los anillos',
        score: 78
    },
    {
        title: 'Star wars',
        score: 82
    },
    {
        title: 'Spiderman 2',
        score: 90
    },
    {
        title: 'El Paseo 5',
        score: 100
    },
]

//Filtre las películas con las que tengan dentro de su título 'El'

const functionFiltrado = a => a.includes('El');

// function filtrarPeliculas(arreglo, funcFiltrado) {
//     const arregloFiltrado = [];
//     for (let elemento of arreglo) {
//         if (funcFiltrado(elemento.title)) {
//             arregloFiltrado.push(elemento);
//         }
//     }

//     return arregloFiltrado;
// }

// console.log(filtrarPeliculas(movies, functionFiltrado));

console.log(movies.filter(pelicula => pelicula.title.includes('El')));

//forEach 

movies.forEach(movie => console.log(`La película se llama ${movie.title}`))

//map
const scores = movies.map(movie => movie.score);
console.log(movies, scores);

//reduce: Reducir el arreglo a un solo valor

//sumar todos los elementos de un arreglo
console.log(scores.reduce((total, curr) => {
    console.log(`Valor acumulado: ${total}`);
    console.log(`Valor actual: ${curr}`);

    return total + curr;
}))

const numeroMaximo = scores.reduce((numMax, numero) => {
    if (numero > numMax) {
        numMax = numero;
    }

    return numMax
})

console.log(numeroMaximo);

//contador 
const  frutas  = ["manzana", "banano", "limón", "manzana", "limón", "coco", "banano", "limón"];

const contador = frutas.reduce((acumulador, fruta) => {
    if (!Object.keys(acumulador).includes(fruta)) {
        acumulador[fruta] = 0;
    }

    acumulador[fruta]++
    return acumulador
}, {})

console.log(contador);
