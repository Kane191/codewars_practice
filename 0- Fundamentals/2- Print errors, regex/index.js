function printerError(s) {
    return `${s.length - s.match(/[a-m]/gi).length}/${s.length }`
}