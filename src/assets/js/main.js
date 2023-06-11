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

const dropdownInit = () => {
  document.addEventListener('click', e => {
    let currentDropdown
    if (e.target.closest('[data-dropdown]')) {
      currentDropdown = e.target.closest('[data-dropdown]')
      currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove('active')
    })
  })
  const allDropdowns = document.querySelectorAll('[data-dropdown]')
  if (window.innerWidth > 992) {
    allDropdowns.forEach(d => {
      d.addEventListener('mouseover', () => {
        d.classList.add('active')
      })
      d.addEventListener('mouseleave', () => {
        d.classList.remove('active')
      })
    })
  }
}

dropdownInit()

const dots = document.querySelectorAll('.dot')
function animDots() {
  let duration = 500
  let delay = 300
  let num = 0
  dots.forEach(dot => {
    dot.animate(
      [
        {
          transform: 'translate(0, 0)',
        },
        {
          transform: 'translate(0, -10px)',
        },
        {
          transform: 'translate(0, 0)',
        },
      ],
      {
        duration: duration,
        delay: delay - num,
        easing: 'ease-in-out',
      }
    )
    num += 100
  })
  setTimeout(() => {
    loop()
  }, 100)
}

function loop() {
  setTimeout(() => {
    animDots()
  }, 3000)
}

animDots()

const navLinks = document.querySelectorAll('.duplicate')
if (window.innerWidth > 1024) {
  navLinks.forEach(link => {
    const spans1 = link.querySelectorAll('.v-text-1 span')
    const spans2 = link.querySelectorAll('.v-text-2 span')

    link.addEventListener('mouseover', () => {
      {
        let delay = 0
        let duration = 250
        spans1.forEach(span => {
          span.style.transition = `transform ${duration}ms ease-in-out`
          span.style.transitionDelay = `${delay}ms`
          span.style.transform = 'translate(0, -110%)'
          if (delay < 100) {
            delay += 20
          } else {
            delay += 5
          }
          if (duration < 400) {
            duration += 80
          } else {
            duration += 10
          }
        })
      }
      {
        let delay = 0
        let duration = 250
        spans2.forEach(span => {
          span.style.transition = `transform ${duration}ms ease-in-out`
          span.style.transitionDelay = `${delay}ms`
          span.style.transform = 'translate(0, -100%)'
          if (delay < 150) {
            delay += 10
          } else {
            delay += 5
          }
          if (duration < 400) {
            duration += 80
          } else {
            duration += 20
          }
        })
      }
    })
    link.addEventListener('mouseleave', () => {
      spans1.forEach(span => {
        span.style.transform = `translate(0, 0)`
      })
      spans2.forEach(span => {
        span.style.transform = `translate(0, 100%)`
      })
    })
  })
}

const rippleBtns = document.querySelectorAll('.ripple-btn')

rippleBtns.forEach(btn => {
  btn.addEventListener('click', rippleEffect)
})

export function rippleEffect(e) {
  const { clientX, clientY } = e
  const { x, y } = e.target.getBoundingClientRect()
  const btnX = clientX - x
  const btnY = clientY - y

  const span = document.createElement('span')
  span.style.left = `${btnX}px`
  span.style.top = `${btnY}px`
  this.appendChild(span)
  setTimeout(() => {
    span.remove()
  }, 800)
}
