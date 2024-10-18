

// ESTA EXPLICACION ESTA DEL MINUTO 0 AL 8 EN EL VIDEO 2 : https://www.app.soyhenry.com/my-cohort/2fdcad3c-272d-496a-82d5-fb6ee89903eb/lecture/69db778c-8ae1-4381-98f3-16f4c2f930f0

// CONECCION DE UN TEXTO QUE COMPLETO EN CASILLERO, CUANDO presiono 1 boton y que se envie para aparecir en la aprte visual de la pagina en otra etiqueta. 
//id="name"           // casillero donde escribo el nombre mio <imput>
//id="setName"        // button que envia info escrita <button>
//id="createdBy"      // mensaje andes del texto que escribi en el casillero/imput <span>




// @ para arrancar ordenado lo escribi, ocupa memoria en vano si las declaro aca, es mejor moverlo dentro de la call back que se ejecuta luego de tomar el boton para que sea mas ordenado//const nameimput = document.getElementById("name");         // casillero para escribir seleccionado
// @ para arrancar ordenado lo escribi, ocupa memoria en vano si las declaro aca, es mejor moverlo dentro de la call back que se ejecuta luego de tomar el boton para que sea mas ordenado//const createdBy = document.getElementById("createdby");    // mensaje aca guardo el span donde se colocara el mensaje

const setNameButton = document.getElementById("setName");           // boton seleccionado

const setNameButtoHandler = () => {                                    // Handler => mean : controlador
    const nameInput = document.getElementById("name");            //@ casillero para escribir seleccionado
    const createdBy = document.getElementById("createdBy");       //@ mensaje aca guardo el span donde se colocara el mensaje
    const name = nameInput.value;                                 //extraigo el mensaje del imput : con el metodo ".value" se ve SOLO en la consola

    createdBy.innerHTML = `Aplicacion creada por : ${name}`;     //metodo que cambia llo que se puede ve en la pagina // inserto el mensaje extraido en la variable name usando=> createBy.innerHTML = " aca vuelvo a repetir el mensaje que esta escrito en el codigo html (se creo asi y punto) luego si inserto el nombre de la variable que contiene el texto que se habia escrito en el imput antes.
    nameInput.value = "";                                         // VACIAR EL IMPUT //importante luego que se usa enviando algo, RECORDEMOS VACIARLO
} ;                         

setNameButton.addEventListener("click", setNameButtoHandler);


// Explicacion despues del minuto 8 :

const imagenes = [     // Aca ingtroduciomos los nombre de todas las las imagenes que tengamos dentro de la carpeta assets en nuest
    "ajaro.jpg",
    "bosque.jpg",
    "noche.jpg",
    "plaza.jpg",

]

const cargarImagen = (imgName) => {     // creo funcion que forme la sintaxis excrita: para entrar a la carpeta y a la imagen 
    return `assets/${imgName}`
} 


//Asociar el cambio de imagen y nombre en elemento correspondiente

let index = 0;                                                      // contador que permite iniciar desde la 1°er imagen 

const renderizarImagen = ()=>{                                       // function que guarda la etiqueta de la imagen. realiza el intercambio con otra imagen, contiene la logica para este proceso de cambio

    const characterImg = document.getElementById("characterImg");  // guarda la etiqueta en 1 variable 
    characterImg.src = cargarImagen(imagenes[index]);                // intercambia la ruta de enlaze por una nueva, causando el cambio de imagenes

    if(index == imagenes.length -1) {                              // compara el indice del contador para que cuando este en el ultimo realize una accion en su cuerpo: en este caso volver a empezar
        index= 0;                                                  // usa el contador igualando el indice a 0 porque en la linea anterior identifico que el idice llego a la ultima imagen y tiene que volver a comenzar el desde el indice 0 para poder mostrar otra vez todas las imagenes 
    } else {                                                       // abarca todos los indices menos el "ultimo" del array de imagenes, permitiendo que sea cual sea el indice este debe sumar 1 para abanzar y mostrar la siguiente imagen 
        index++;                                                        // tiene que estar despues de la linea de codigo donde se realize el cambio de imagen teniendo en cuenta el contador que avanza porque sino la imagen de indice 0 nunca se podra ver ya que el contador arrancara siempre en su indice numero 1// usa el contador de afuera y lo aumenta para que recorra las imagenes
    }
    
}

//  En base a los clicks del botón : le indica el valor numerico del índice al array de imágenes.

const characterChange = document.getElementById("characterChange");

characterChange.addEventListener("click", renderizarImagen);



// // esto es una prueba de la function anterior para revisar la sintaxis anterior que esta bien creada:

// const imgPrueba = document.createElement("img")  // crea una etiqueta nueva <img>

// const src = cargarImagen("bosque.jpg");          // ejecuta la function creada anteriormente con sintaxis donde al principio usara: `assets/${imagenes}` a la imagen (enviando parametro del nombre de la imagen que queremos que aparezca)

// imgPrueba.src = src;      // accede al atributo src y lo iguala a la nueva ruta de src hacia otra imagen como hicimos hace 1 rato 

// // minuto 13 cambio de imagen desaparece la que estaba y aparece la que indicamos:


