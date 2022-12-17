// changes style so proper tab shows as 'active'
const updateNav = () => {
  const home = document.querySelector(".home")
  const menu = document.querySelector(".menu")
  const contact = document.querySelectoru(".contact")

  home.classList.remove("tab-active")
  menu.classList.remove("tab-active")
  contact.classList.add("tab-active")
}