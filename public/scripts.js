    const card = document.querySelectorAll('.card')        

    for (let i = 0; i < card.length; i++){
         const cardId = i

        card[i].addEventListener("click", function(){
                window.location.href = `/recipes/${cardId}`}

        )}
    
  


    const buttons = document.querySelectorAll('#buttom') 


    for (let buttom of buttons){
        buttom.addEventListener('click', function(){
                if (buttom.innerHTML == 'Mostrar') {
                    buttom.innerHTML = 'Esconder'
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
    
