function verifyAttemptIsValid(attempt){
  const number = +attempt

  if(invalidAttempt(number)){
    console.log("Valor inválido")
  }
}

function invalidAttempt(number) {
    return Number.isNaN(number)
}
