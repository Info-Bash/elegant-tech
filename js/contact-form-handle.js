
const scriptURL = 'https://script.google.com/macros/s/AKfycbx6EmZJBUhxtSnNmXHFGJfwNcsoAlmZqFFLX6EMfeXECOysBvkNoGShAuDfdi7zZLfB/exec'
const form = document.forms['submit-to-google-sheet']
const responseMessage = document.getElementById('form-response')

form.addEventListener('submit', e => {
  e.preventDefault()

  responseMessage.style.color = '#555'
  responseMessage.innerHTML = "Sending..."

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      responseMessage.style.color = 'green'
      responseMessage.innerHTML = "Message sent successfully!"
      form.reset() 

      setTimeout(() => {
        responseMessage.innerHTML = ""
      }, 5000)
    })
    .catch(error => {
      responseMessage.style.color = 'red'
      responseMessage.innerHTML = "There was an error sending your message. Please try again."

      setTimeout(() => {
        responseMessage.innerHTML = ""
      }, 5000)
      
      console.error('Error!', error.message)
    })
})
