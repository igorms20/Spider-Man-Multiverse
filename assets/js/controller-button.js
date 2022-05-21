const contButtons = document.getElementsByClassName('controller_button')

for (let i = 0; i < contButtons.length; i++) {
    const button = contButtons[i];
    button.addEventListener("click", () => {
        controllerButtonRemove()
        button.classList.add('controller_button--active')
    })
    
}

function controllerButtonRemove() {
    for (let i = 0; i < contButtons.length; i++) {
        const btn = contButtons[i];
        btn.classList.remove('controller_button--active')
    } 
}


