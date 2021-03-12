const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

const text = document.querySelector('.card_text')

for (let card of cards){
    card.addEventListener("click", function(){
        const imageId = card.getAttribute('id')
        modalOverlay.classList.add('active')

        modalOverlay.querySelector('img').src = `/assets/${imageId}`

    })
}

document.querySelector('.modal-close').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})