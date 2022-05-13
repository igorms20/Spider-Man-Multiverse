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

document.addEventListener("DOMContentLoaded", addEventListenersToCards)