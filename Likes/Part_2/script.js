function increseLikes(id) {
    var elem = document.querySelector(id)
    var value = elem.innerHTML;

    value++

    document.querySelector(id).innerHTML = value
}
