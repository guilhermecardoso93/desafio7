const hamburger = document.querySelector('.hamburger')
const navLink = document.querySelector('.menu')


hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide')
  hamburger.classList.toggle('disable')
})

