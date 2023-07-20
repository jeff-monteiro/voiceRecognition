function verifyAttemptIsValid(attempt){
  const number = +attempt

  if(invalidAttempt(number)){
    elementAttempt.innerHTML += '<div>Valor inválido</div>'
  }

  if(numberBiggerThanRequested(number)){
    elementAttempt.innerHTML += `<div>Valor inválido o valor precisa estar entre ${minorValue} e ${majorValue}</div>`
  }

  if(number === numberGenerator){
    document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numberGenerator}</h3>
    `
  }

}

function invalidAttempt(number) {
    return Number.isNaN(number)
}

function numberBiggerThanRequested(number){
    return number > majorValue || number < minorValue
}
