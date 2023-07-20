function verifyAttemptIsValid(attempt){
  const number = +attempt

  if(invalidAttempt(number)){
    elementAttempt.innerHTML += '<div>Valor inválido</div>'
  }

  if(numberBiggerThanRequested(number)){
    elementAttempt.innerHTML += `<div>Valor inválido o valor precisa estar entre ${minorValue} e ${majorValue}</div>`
  }

}

function invalidAttempt(number) {
    return Number.isNaN(number)
}

function numberBiggerThanRequested(number){
    return number > majorValue || number < minorValue
}
