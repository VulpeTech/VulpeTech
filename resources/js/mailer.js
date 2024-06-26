
const formRef = document.querySelector(".contact-form")
const sendButton = document.querySelector(".sendButton")

const inputName = document.querySelector(".input-name")
const inputTel = document.querySelector(".input-tel")
const inputEmail = document.querySelector(".input-email")
const inputMessage = document.querySelector(".input-message")

import confetti from "https://esm.run/canvas-confetti@1"

const sendEmail = async (e) => {
  e.preventDefault()

  sendButton.innerHTML = "<img src='./resources/images/loading.gif' width='20' />"
  sendButton.disabled = true;

  try {
    const fields = {
      name: inputName.value,
      email: inputEmail.value,
      tel: inputTel.value,
      message: inputMessage.value
    }

    await emailjs.send(
      "service_uif46sk",
      "template_jp035gw",
      fields,
      "_gSb43SyFp6XYDBPx"
    )

    sendButton.innerHTML = "<img width='20' src='./resources/images/check-mark.svg' alt='' />Enviado!"
      sendButton.style.color = "#fff"

    inputName.value = ""
    inputTel.value = ""
    inputEmail.value = ""
    inputMessage.value = ""

    confetti({
      particleCount: 200,
      spread: 60
    });

    setTimeout(() => {
      sendButton.innerHTML = `<svg width="30" height="30" viewBox="0 0 24.00 24.00" fill="none"
      xmlns="http://www.w3.org/2000/svg" stroke="#000000" transform="rotate(-45)">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
        stroke-width="0.048"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M20.7639 12H10.0556M3 8.00003H5.5M4 12H5.5M4.5 16H5.5M9.96153 12.4896L9.07002 15.4486C8.73252 16.5688 8.56376 17.1289 8.70734 17.4633C8.83199 17.7537 9.08656 17.9681 9.39391 18.0415C9.74792 18.1261 10.2711 17.8645 11.3175 17.3413L19.1378 13.4311C20.059 12.9705 20.5197 12.7402 20.6675 12.4285C20.7961 12.1573 20.7961 11.8427 20.6675 11.5715C20.5197 11.2598 20.059 11.0295 19.1378 10.5689L11.3068 6.65342C10.2633 6.13168 9.74156 5.87081 9.38789 5.95502C9.0808 6.02815 8.82627 6.24198 8.70128 6.53184C8.55731 6.86569 8.72427 7.42461 9.05819 8.54246L9.96261 11.5701C10.0137 11.7411 10.0392 11.8266 10.0493 11.9137C10.0583 11.991 10.0582 12.069 10.049 12.1463C10.0387 12.2334 10.013 12.3188 9.96153 12.4896Z"
          stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
      </g>
    </svg>Enviar`
      sendButton.style.color = "#000"
      sendButton.disabled = false;
    }, 2 * 1000)
  } catch (error) {
    alert("Deu erro mano")
  }
}

formRef.addEventListener("submit", sendEmail)