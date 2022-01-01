function getHTML() {
    var array = []
    var elements = document.body.getElementsByTagName("*")
    for(var i = 0; i < elements.length; i++) {
        var current = elements[i]
        if(current.children.length === 0 && current.textContent.replace(/ |\n/g,'') !== '') {
            array.push(current.textContent)
        }
    } 

    return array
}

function findLatexSources(html) {
    // returns indices for places where there are 
    return null
}

function replaceTextWithLatex() {}

const html = getHTML()
console.log(html)