renderColors( ["#0E1652", "#141F77", "#19289C", "#1E31C2", "#2B40DF", "#4F61E6"])

document.getElementById("input-btn").addEventListener('click', function() {
    let inputColor = document.getElementById("color-input").value 
    inputColor = inputColor.substring(1)
    const inputScheme = document.getElementById("scheme-input").value
    getScheme(inputColor, inputScheme)
})

function getScheme(color, mode) {
    const link = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=6`
    fetch(link)
        .then(res => res.json())
        .then(data => {
            const colorsArr = []
            for (let i = 0; i < 6; i++) {
                colorsArr.push(data.colors[i].hex.value)
            }
            renderColors(colorsArr)
        })
}

function renderColors(colorsArr) {
    let dspString = ``
    colorsArr.map(arr => {
        dspString += `<div class="color-dsp"> <div class="color" style="background-color: ${arr};"></div> <p>${arr}</p> </div>`
    })
    document.getElementById("dsp-colours").innerHTML = dspString
}
