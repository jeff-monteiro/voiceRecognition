function verifyAttemptIsValid(attempt){
  const number = +attempt

  if(invalidAttempt(number)){
    if (chute.toUpperCase() === "GAME OVER") {
        document.body.innerHTML =
            `
            <h2>Game Over!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
            `
            document.body.style.backgroundColor = "black";
    } else {

        elementoChute.innerHTML += '<div>Valor Inválido</div>';
    }
    return
  }

  if(numberBiggerThanRequested(number)){
    elementAttempt.innerHTML += `<div>Valor inválido o valor precisa estar entre ${minorValue} e ${majorValue}</div>`
    return
  }

  if(number === numberGenerator){
    document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numberGenerator}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
    `
  }else if(number < numberGenerator) {
    elementAttempt.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
    `
  }else if(number > numberGenerator){
    elementAttempt.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-arrow-down-long"></i></div>
    `
  }
}

function invalidAttempt(number) {
    return Number.isNaN(number)
}

function numberBiggerThanRequested(number){
    return number > majorValue || number < minorValue
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
