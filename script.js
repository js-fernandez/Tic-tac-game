// let buttons = document.querySelectorAll('button');
// let names = document.querySelectorAll('input');
// let displayName = document.querySelectorAll('span');



const setup = {
    // Declaracion de elementos para empezar el juego
    interactable: {
        buttons: document.querySelectorAll('button'),
        names: document.querySelectorAll('input'),
        displayName: document.querySelectorAll('span')
    },

// Funcion para chequear si el campo contiene texto
    checkText: function(e) {
        if (e.trim() !== '') {
            console.log('asd')
        }
        else {
            console.log('Falta completar el campo.')
        }
    },

    addEventListeners: function() {
        this.interactable.buttons.forEach((e, i)=>{
            e.addEventListener('click', ()=>{
                const playerName = this.interactable.names[i].value;
                this.checkText(playerName);
            })
         }
        )       
    },

    init: function(){
        this.addEventListeners()
    }
}

setup.init()


// Asigno a cada boton la funcionalidad de que use el metodo setup.checkText para evaluar el campo.
// buttons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         const playerName = names[index].value;
//         setup.checkText(playerName);
//     });
// });
