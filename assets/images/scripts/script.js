const BUTTON_CARD = document.querySelectorAll(".btn-buy")
const CARD = document.querySelectorAll(".card")
const BTN = document.createElement("button")

CARD.forEach((element, index)=>{
    element.addEventListener('mouseenter', () => {
        BTN.innerHTML = "Comprar Agora"
        BUTTON_CARD[index].appendChild(BTN)
    })
    element.addEventListener('mouseleave', () => {
        BUTTON_CARD[index].removeChild(BUTTON_CARD[index].firstChild)
    })
})
