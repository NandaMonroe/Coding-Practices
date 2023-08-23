function removeCookie(id) {
    var elem = document.querySelector(id)
    elem.remove()
}

function fahrenheit(id) {
    var elem = document.querySelector(id)

    elem.innerText = Math.round((elem.innerText * (9/5)) + 32);
    
}

``