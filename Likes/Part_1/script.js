function increseLikes(id) {
    var elem = document.querySelector('count')
    var value = elem.innerHTML;

    value++

    document.querySelector('count').innerHTML = value
}
