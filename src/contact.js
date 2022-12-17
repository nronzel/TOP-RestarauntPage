const content = document.getElementById("content")

// changes style so proper tab shows as 'active'
const updateNav = () => {
  const home = document.querySelector(".home")
  const menu = document.querySelector(".menu")
  const contact = document.querySelector(".contact")

  home.classList.remove("tab-active")
  menu.classList.remove("tab-active")
  contact.classList.add("tab-active")
}

const contactUs = () => {
  const container = document.createElement("div")
  const contactForm = document.createElement("div")
  const phone = document.createElement('p')
  const email = document.createElement('p')
  const map = document.createElement("img")

  map.src = "../src/map.png"
  map.alt = "map"
  phone.textContent = "123-456-789"
  email.textContent = "cookiegram@notarealemail.com"

  container.classList.add("container")
  contactForm.classList.add("contact-form")
  phone.classList.add("phone")
  email.classList.add("email")
  map.classList.add("map-img")

  contactForm.append(phone)
  contactForm.append(email)
  contactForm.append(map)
  container.append(contactForm)
  content.append(container)

  updateNav()
}

export { contactUs }