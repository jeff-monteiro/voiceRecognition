const minorValue = 1
const majorValue = 100
const numberGenerator = randomNumber()

function randomNumber(){
    return parseInt(Math.random() * majorValue + 1)
}
console.log(`Número secreto é: ${numberGenerator}`)

const elementMinorValue = document.getElementById('menor-valor')
elementMinorValue.innerHTML = minorValue

const elementMajorValue = document.getElementById('maior-valor')
elementMajorValue.innerHTML = majorValue
