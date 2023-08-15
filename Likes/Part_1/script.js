function increseLikes(id) {
    var elem = document.getElementById('count')
    var value = elem.innerHTML;

    value++

    document.getElementById('count').innerHTML = value
}
