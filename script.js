const hamburger = document.querySelector('.hamburger')
const navLink = document.querySelector('.menu')
const x = document.querySelector('.lineBack')
const line1 = document.querySelector('#line1')
const line2 = document.querySelector('#line2')
const line3 = document.querySelector('#line3')

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide')
})
