window.WebFontConfig = {
    custom: {
        families: ['KaTeX_AMS', 'KaTeX_Caligraphic:n4,n7', 'KaTeX_Fraktur:n4,n7',
            'KaTeX_Main:n4,n7,i4,i7', 'KaTeX_Math:i4,i7', 'KaTeX_Script',
            'KaTeX_SansSerif:n4,n7,i4', 'KaTeX_Size1', 'KaTeX_Size2', 'KaTeX_Size3',
            'KaTeX_Size4', 'KaTeX_Typewriter'],
    },
};

function parseLaTeX(text) {
    console.log(text)
    var splitText = text.split("$$")
    var indices = []

    console.log(splitText)

    if (splitText.length == 1) {
        return text
    }

    for (var i = 0; i < splitText.length; i++) {
        if (i % 2 != 0) {
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
    console.log(render)
    element.innerHTML = render
}

document.querySelectorAll('p').forEach(e => processText(e));