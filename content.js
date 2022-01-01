function parseLaTeX(text) {
    console.log(text)
    var splitText = text.split("$$")
    var indices = []

    console.log(splitText.length)

    if (splitText.length == 1) {
        return text
    }

    for (var i = 0; i < splitText.length; i++) {
        if (i % 2 != 0) {
            splitText[i] = "<<ANDRO_PLACEHOLDER>>"
            indices.push(i)
        }
    }

    // var regExp = /\$\$(.*?)\$\$/gmiu
    var regExp = /(?<=\$\$).+?(?=\$\$)/gmiu
    var matches = text.match(regExp)
    var renders = []
    for (var i = 0; i < matches.length; i++) {
        if (i % 2 == 0) {
            var part = matches[i]
            var rendered = katex.renderToString(part, {
                throwOnError: false
            })
            renders.push(rendered)
        }
    }

    for (var i = 0; i < indices.length; i++) {
        var idx = indices[i]
        splitText[idx] = renders[i]
    }

    var finalRender = splitText.join(" ")

    return finalRender
}

function processText(element) {
    var originalText = element.innerText
    console.log(originalText)
    var render = parseLaTeX(originalText)
    element.innerHTML = render
    element.style.color = "green"
}

document.querySelectorAll('p').forEach(e => processText(e));