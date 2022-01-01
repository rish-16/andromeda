document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('latexify')
    checkPageButton.addEventListener('click', function() {
        console.log("latexified")
        window.alert("latexified")
    }, false)
})