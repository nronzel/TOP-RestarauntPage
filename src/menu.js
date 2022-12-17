const menuGrid = document.createElement("div")
const content = document.getElementById("content")

const Card = (name, imgSrc, price) => {
  return {
    name,
    imgSrc,
    price,
  }
}

const navSelection = () => {
  const home = document.querySelector(".home")
  const menu = document.querySelector(".menu")
  const contact = document.querySelector(".contact")

  home.classList.remove("tab-active")
  contact.classList.remove("tab-active")
  menu.classList.add("tab-active")
}

const createCard = (card) => {
  const name = document.createElement("p")
  const price = document.createElement("p")
  const gridItem = document.createElement("div")
  const img = document.createElement("img")
  const image = img

  // add content 
  name.textContent = card.name
  image.src = card.imgSrc
  img.alt = card.name.replace(" ","-")
  price.textContent = `${card.price}/ea`

  // append each item to the card
  gridItem.append(name)
  gridItem.append(image)
  gridItem.append(price)

  // add classes for style
  name.classList.add("cookie-name")
  gridItem.classList.add("grid-item")
  menuGrid.classList.add("menu-grid")
  img.classList.add("menu-img")

  // append card to main grid
  menuGrid.append(gridItem)
}
const createMenu = () => {
  navSelection()
  // create cookies
  const chocolateChip = Card('Chocolate Chip', '../src/chocolate-chip.jpg', '$1.50')
  const chocolateExplosion = Card("Chocolate Explosion", "../src/double-chocolate-cookies.jpg", "$1.50")
  const chewyOatmeal = Card("Chewy Oatmeal", "../src/oatmeal-cookie.png", "$1.50")
  const snickerdoodle = Card("Snickerdoodle", "../src/snickerdoodle-cookies.jpg", "$1.50")
  const smores = Card("Gooey Smores", "../src/smores.png", "$2.50")
  const peanutButter = Card("Peanut Butter", "../src/peanut-butter.jpg", "$1.50")

  // create menu cards from cookies
  createCard(chocolateChip)
  createCard(chocolateExplosion)
  createCard(chewyOatmeal)
  createCard(snickerdoodle)
  createCard(smores)
  createCard(peanutButter)

  // append the menu grid to the content section
  content.append(menuGrid)
}

const clearMenu = () => {
  menuGrid.innerHTML = ""
}

export { createMenu, clearMenu }