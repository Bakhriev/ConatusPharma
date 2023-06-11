function burgerMenu() {
  const burger = document.querySelector('.burger')
  const navigation = document.querySelector('.header__navigation')
  const overlay = document.querySelector('.overlay')
  const navItems = document.querySelectorAll('.nav__item')

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    navigation.classList.toggle('active')
    overlay.classList.toggle('active')
    navItems.forEach(item => {
      setTimeout(() => {
        item.classList.toggle('active')
      }, 600)
    })
  })

  overlay.addEventListener('click', () => {
    burger.classList.remove('active')
    navigation.classList.remove('active')
    overlay.classList.remove('active')
    navItems.forEach(item => {
      item.classList.remove('active')
    })
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      burger.classList.remove('active')
      navigation.classList.remove('active')
      overlay.classList.remove('active')
      navItems.forEach(item => {
        item.classList.remove('active')
      })
    }
  })
}
burgerMenu()