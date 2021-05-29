const selectColor = document.querySelector('.container')

selectColor.addEventListener('input', (event) => {
  let target = event.target
  const result = target.value
  target.parentElement.nextElementSibling.innerHTML = result
  
  let redHex = document.querySelector('.red .number').innerHTML
  let greenHex = document.querySelector('.green .number').innerHTML
  let blueHex = document.querySelector('.blue .number').innerHTML
  redHex = Number(redHex).toString(16).toUpperCase()
  greenHex = Number(greenHex).toString(16).toUpperCase()
  blueHex = Number(blueHex).toString(16).toUpperCase()
  if (redHex.length < 2) {
    redHex = 0 + redHex
  }
  if (greenHex.length < 2) {
    greenHex = 0 + greenHex
  }
  if (blueHex.length < 2) {
    blueHex = 0 + blueHex
  }
  
document.querySelector('.hex').innerHTML = `#${redHex}${greenHex}${blueHex}`

document.body.style.backgroundColor = document.querySelector('.hex').innerHTML

})
