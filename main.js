$(document).ready(function () {
    const contenidoGame = $('.contenido .game');
    const contenidoMain = $('.contenido .text');
    const contenidoReglas = $('.contenido .reglas');

    const juego = $('.game .nuevoJuego')
    const puntuacionTabla = $('.game .puntuacion')
    const maximoPuntajeTabla = $('.game .maximoPuntaje')

    let cartas = [];

    let valorTablero;
    let valorActual;

    let puntuacion = 0;
    let maximoPuntaje = 0;

    generarMazo()

    $('.reglas--btn').click(function() {
        contenidoMain.hide();
        contenidoGame.hide();
        contenidoReglas.show(300);
    })
    
    $('.inicio--btn').click(function() {
        contenidoReglas.hide();
        contenidoGame.hide();
        contenidoMain.show(300);
    })

    $('.juego--btn').click(function() {
        contenidoMain.hide();
        contenidoReglas.hide();
        contenidoGame.show(300);
    })

    $('.newJuego--btn').click(function() {
        generarMazo()
    })

    $('.menor--btn').click(function() {
        valorTablero = valorActual
        tomarCarta(cartas)
        if (valorTablero > valorActual) {
            puntuacion++
        }
        if (valorTablero < valorActual) {
            puntuacion--
        }

        if (cartas.length < 1) {
            if (maximoPuntaje < puntuacion) {
                maximoPuntaje = puntuacion
                $(maximoPuntajeTabla).html('Maximo Puntaje: ' + puntuacion)
            }
            $(puntuacionTabla).html('Tu puntuacion final es de: ' + puntuacion)
            return
        } else {
            $(puntuacionTabla).html('Puntaje: ' + puntuacion)
        }
    })

    $('.mayor--btn').click(function() {
        valorTablero = valorActual
        tomarCarta(cartas)
        if (valorTablero < valorActual) {
            puntuacion++
        }
        if (valorTablero > valorActual) {
            puntuacion--
        }
        if (cartas.length < 1) {
            if (maximoPuntaje < puntuacion) {
                maximoPuntaje = puntuacion
                $(maximoPuntajeTabla).html('Maximo Puntaje: ' + puntuacion)
            }
            $(puntuacionTabla).html('Tu puntuacion final es de: ' + puntuacion)
            return
        } else {
            $(puntuacionTabla).html('Puntaje: ' + puntuacion)
        }
    })
    

    function tomarCarta(cartas) {
        if (cartas.length < 1) {
            return
        }
        let numero = Math.floor(Math.random() * cartas.length)
        while (cartas[numero] == valorTablero && cartas.length > 4) {
            numero = Math.floor(Math.random() * cartas.length)
        }
        valorActual = cartas[numero]
        $(juego).html(`<img class="img--carta" src="cartas/${cartas[numero]}.png" alt="carta actual">`)   
        cartas.splice(numero, 1)    
    }  
        
    function generarMazo() {
        cartas = [1,2,3,4,5,6,7,8,9,10,11,12,13]
        for (let i = 1; i < 14; i++) {
            cartas.push(i);
            cartas.push(i);
            cartas.push(i);
        }
        tomarCarta(cartas)
        puntuacion = 0
        $(puntuacionTabla).html('Puntaje: ' + puntuacion)
    }
});

