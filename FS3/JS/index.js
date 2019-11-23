let titulo = document.querySelector('h1')
let primernumero = document.querySelector('#primer_numero')
let segundonumero = document.querySelector('#segundo_numero')
let sumButton = document.querySelector('#sum-button')
let resulNode = document.querySelector('#result')

let restaButton = document.querySelector('#resta-button')

let multButton = document.querySelector('#mul-button')


//ejemplo de funcion
//function sumarejemplo(a, b) {
//    let parsednum1= parseInt(primernumero)
//    let parsednumero2= parseInt(primernumero)
//    let result = parsednum1+parsednumero2
//    return result
//}
//se manda a llamar la funcion de JS listener para escuchar los eventos del dom
//sumbuttos es el identificar del boton ' . ' punto para que es ese identificador escuche el evento
//y en los parametros de la fucion de JS se indica que escucha el clic despues de la coma se indica que va hacer cuando se cumpla ese evento

sumButton.addEventListener('click', function () {
    //prseop de  enteros por defecto es texto
    let parsednum1 = parseInt(primernumero.value)
    let parsednumero2 = parseInt(segundonumero.value)
    //suma de enteros
    let result = parsednum1 + parsednumero2
    //creacin de nodos <span>{resultado}</span>
    let texContec = document.createTextNode('resultado suma:'+result)
    let spanElement = document.createElement('span')
    spanElement.appendChild(texContec)
    //eliminar cuando ya haya resultado
    if(resulNode.childNodes.length>3){
        resulNode.removeChild(resulNode.childNodes[3])

    }
    //agregar resultado a pantalla
    resulNode.appendChild(spanElement) 
    
   
    return result
    //resulNode.removeChild(resulNode.childNodes[3])

}) //addEventListener escucha los eventos del DOM

restaButton.addEventListener('click',function () {
    //prseop de  enteros por defecto es texto
    let parsednum1 = parseInt(primernumero.value)
    let parsednumero2 = parseInt(segundonumero.value)
    //suma de enteros
    let result = parsednum1 - parsednumero2
    //creacin de nodos <span>{resultado}</span>
    let texContec = document.createTextNode('resultado resta:'+result)
    let spanElement = document.createElement('span')
    spanElement.appendChild(texContec)
    //eliminar cuando ya haya resultado
    if(resulNode.childNodes.length>3){
        resulNode.removeChild(resulNode.childNodes[3])

    }
    //agregar resultado a pantalla
    resulNode.appendChild(spanElement) 
    
   
    return result
    //resulNode.removeChild(resulNode.childNodes[3])

})

multButton.addEventListener('click',function () {
    //prseop de  enteros por defecto es texto
    let parsednum1 = parseInt(primernumero.value)
    let parsednumero2 = parseInt(segundonumero.value)
    //suma de enteros
    let result = parsednum1 * parsednumero2
    //creacin de nodos <span>{resultado}</span>
    let texContec = document.createTextNode('resultado multiplicacion:'+result)
    let spanElement = document.createElement('span')
    spanElement.appendChild(texContec)
    //eliminar cuando ya haya resultado
    if(resulNode.childNodes.length>3){
        resulNode.removeChild(resulNode.childNodes[3])

    }
    //agregar resultado a pantalla
    resulNode.appendChild(spanElement) 
    
   
    return result
    //resulNode.removeChild(resulNode.childNodes[3])

})

//
//titulo.addEventListener('mousemove',function(){
//    console.log('mouseover sobre titulo')
//})//





console.log(sumButton)
console.log(primernumero)
console.log(segundonumero)