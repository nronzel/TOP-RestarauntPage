import { header, mainArea, footer } from "../src/home.js"
import { createMenu } from "../src/menu.js"

header()
mainArea()
footer()
// put logic here for tabbed browsing.. event listeners

const content = document.getElementById("content")

const addListeners = () => {
  const home = document.querySelector(".home")
  const menu = document.querySelector(".menu")
  const contact = document.querySelector(".contact")
  home.onclick = homePage
  menu.onclick = menuPage
}

const homePage = () => {
  content.innerHTML = ""
  header()
  mainArea()
  footer()
  addListeners()
}

const menuPage = () => {
  content.innerHTML = ""
  header()
  createMenu()
  footer()
  addListeners()
}

addListeners()


