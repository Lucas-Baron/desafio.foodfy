    const card = document.querySelectorAll('.card')        

    for (let i = 0; i < card.length; i++){
         const cardId = i

        card[i].addEventListener("click", function(){
                window.location.href = `/recipes/${cardId}`}

        )}
    
  
        const buttomIng = document.getElementById("buttomIng")
        const buttomPre = document.getElementById("buttomPre")
        const buttomInf = document.getElementById("buttomInf")

        const txt1 = document.querySelector('.txt1')
        const txt2 = document.querySelector('.txt2')
        const txt3 = document.querySelector('.txt3')


        buttomIng.addEventListener("click", () => {
        if (buttomIng.innerText == "ESCONDER") {
            txt1.classList.add("txtactive")
            buttomIng.innerText = "mostrar"
        } else {
            txt1.classList.remove("txtactive")
            buttomIng.innerText = "esconder"
        }
    })
    
    buttomPre.addEventListener("click", () => {
        if (buttomPre.innerText == "ESCONDER") {
            txt2.classList.add("txtactive")
            buttomPre.innerText = "mostrar"
        } else {
            txt2.classList.remove("txtactive")
            buttomPre.innerText = "esconder"
        }
    })
    
    buttomInf.addEventListener("click", () => {
        if (buttomInf.innerText == "ESCONDER") {
            txt3.classList.add("txtactive")
            buttomInf.innerText = "mostrar"
        } else {
            txt3.classList.remove("txtactive")
            buttomInf.innerText = "esconder"
        }
    })