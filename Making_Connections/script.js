function changeProfileName (id) {
    var elem = document.querySelector(id)

    elem.innerText = "Joana Dark";
}

function removeRequest(id) {
    var elem = document.querySelector(id)

    elem.remove();
}

function decreseRequest(id) {
    var elem = document.querySelector(id)
   elem.innerHTML--
}

function increseConnec(id) {
    var elem = document.querySelector(id)
    elem.innerHTML++
}
