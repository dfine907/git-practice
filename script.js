/* Add an easy fun fun function here if you like, but you don't have to */

function justCuz() {
    let body = document.querySelector('body')
    let newDiv = document.createElement('div')
    let text = document.createTextNode('Hi Dina! This type of random project is something I have wanted to do for a while.')
    newDiv.classList.add('text')
    body.appendChild(newDiv)
    newDiv.appendChild(text)
}

justCuz()