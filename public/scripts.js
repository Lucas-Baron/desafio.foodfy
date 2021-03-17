    const modalOverlay = document.querySelector('.modal-overlay')
    const cards = document.querySelectorAll('.card')



    for (let card of cards){
        card.addEventListener("click", function(){

            modalOverlay.classList.add('active')

        })
    }


    const buttons = document.querySelectorAll('#buttom') 


    for (let buttom of buttons){
        buttom.addEventListener('click', function(){
                if (buttom.innerHTML == 'Mostrar') {
                    buttom.innerHTML = 'Esconder';
                } else {
                    buttom.innerHTML = 'Mostrar'
                }
        })

    }



    function ocultar(id){
        if ( document.getElementById(id).style.display == 'none'){
        document.getElementById(id).style.display = 'block';
        }else { document.getElementById(id).style.display = 'none';
        }
    }
    
