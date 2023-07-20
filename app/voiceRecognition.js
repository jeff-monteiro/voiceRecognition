const elementAttempt = document.getElementById("chute")

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br"
recognition.start()

recognition.addEventListener("result", onSpeak)

function onSpeak(event) {
  attempt = event.results[0][0].transcript
  showAttemptOnScreen(attempt)
  verifyAttemptIsValid(attempt)
}

function showAttemptOnScreen(attempt){
    elementAttempt.innerHTML =`
        <div>Você disse</div>
        <span class="box">${attempt}</span>
    `
}
