const content = document.getElementById("content");

const header = () => {


  // create elements
  const p = document.createElement("p");
  const headerCont = document.createElement("div");
  const logo = document.createElement("div");
  const logoText = (p.textContent = "Grandma's Cookies");
  const tag = document.createElement("div");
  const nav = document.createElement("div");
  const homeTab = document.createElement("div");
  const menuTab = document.createElement("div");
  const contactTab = document.createElement("div");

  // append header to content container
  content.append(headerCont);
  headerCont.append(logo);
  headerCont.append(tag);
  headerCont.append(nav);
  logo.append(logoText);
  nav.append(homeTab);
  nav.append(menuTab);
  nav.append(contactTab);

  // adds text content to elements
  homeTab.append((p.textContent = "Home"));
  menuTab.append((p.textContent = "Menu"));
  contactTab.append((p.textContent = "Contact"));
  tag.innerHTML = '<em>"Just like grandma used to make!"</em>';

  // add classes
  headerCont.classList.add("header");
  logo.classList.add("logo");
  tag.classList.add("tag");
  nav.classList.add("nav");
  homeTab.classList.add("nav-item", "tab-active");
  menuTab.classList.add("nav-item");
  contactTab.classList.add("nav-item");
};


const mainArea = () => {
  // create elements
  const mainContent = document.createElement("div")
  const heroText = document.createElement("p")
  const heroText2 = document.createElement("p")
  const img = document.createElement("img")

  // add content
  heroText.textContent = "Made Fresh Every Day!"
  heroText2.textContent = "Delivered Fast, Order Now!"
  img.src = "../src/cookie-oozy.jpg"

  // add classes
  mainContent.classList.add("main-content")
  heroText.classList.add("large","offset-dn")
  heroText2.classList.add("medium", "offset-up")
  img.classList.add("hero")

  // append to page
  content.append(mainContent)
  mainContent.append(heroText)
  mainContent.append(img)
  mainContent.append(heroText2)
}

const footer = () => {
  // create elements
  const div = document.createElement("div")
  const madeBy = document.createElement("p")

  madeBy.textContent = "Made By: Nicholas Ronzel"

  div.classList.add("footer")

  content.append(div)
  div.append(madeBy)
}

header();
mainArea();
footer();