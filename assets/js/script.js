function handleMouseEnter() {
    this.classList.add('card__hovered')
    document.body.id = `${this.id}__hovered`
}

function handleMouseLeave() {
    this.classList.remove('card__hovered')
    document.body.id = ''
}

function addEventListenersToCards() {
    const cards = document.getElementsByClassName('card')
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        card.addEventListener("mouseenter", handleMouseEnter)  
        card.addEventListener("mouseleave", handleMouseLeave)
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false)

// function selectCarouselItem(selectedItem) {
//     console.log(selectedItem)
// }

function selectCarouselItem(selectedElement) {
    const selectedItem = selectedElement.id
    const carousel = document.querySelector('.cards-carousel')
    const transform = carousel.style.transform
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i)
    const rotateYDeg = -120 * (Number(selectedItem) - 1)
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`)

    carousel.style.transform = newTransform
    console.log(newTransform)

    const activeButton = document.querySelector('.controller_button--active')
    activeButton.classList.remove('controller_button--active')
    selectedElement.classList.add('controller_button--active')
    
}