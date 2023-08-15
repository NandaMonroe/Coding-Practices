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
    var value = elem.innerHTML;

    value--

    document.querySelector(id).innerHTML = value
}

function increseConnec(id) {
    var elem = document.querySelector(id)
    var value = elem.innerHTML;

    value++

    document.querySelector(id).innerHTML = value
}
