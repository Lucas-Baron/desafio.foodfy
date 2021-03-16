    const modalOverlay = document.querySelector('.modal-overlay')
    const cards = document.querySelectorAll('.card')



    for (let card of cards){
        card.addEventListener("click", function(){
            const textH2 = card.getAttribute('p')

            const imageId = card.getAttribute('id')
            modalOverlay.classList.add('active')

            modalOverlay.querySelector('img').src = `/assets/${imageId}`


            modalOverlay.querySelector('h2').innerHTML = `${textH2}`

        })
    }

    document.querySelector('.modal-close').addEventListener("click", function(){
        modalOverlay.classList.remove('active')
    })

