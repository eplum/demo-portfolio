const aboutMeSection = createAboutMeSection();
const entry = selectElement("#root");
const header = createHeader();
const main = createMain();
const title = createTitle();

addChildToParent(main, aboutMeSection);
addChildToParent(header, title);
addChildToParent(entry, header);
addChildToParent(entry, main);

function createAboutMeSection() {
  const aboutMeSection = createElement("article");
  addClassToElement(aboutMeSection, "about-me");
  const imageContainer = createElement("figure");
  addClassToElement(imageContainer, "about-me__image-container");
  const image = createElement("img");
  addClassToElement(image, "about-me__avatar");
  image.setAttribute("src", "https://placekitten.com/g/200/300");
  image.setAttribute("alt", "Super cute kitten");
  const aboutMeName = createElement("h3");
  addClassToElement(aboutMeName, "about-me__name");
  addText(aboutMeName, "Don Hamilton III");
  const aboutMeEmail = createElement("h4");
  addClassToElement(aboutMeEmail, "about-me__email");
  addText(aboutMeEmail, "donhamiltoniii@gmail.com");
  addChildToParent(imageContainer, image);
  addChildToParent(aboutMeSection, imageContainer);
  addChildToParent(aboutMeSection, aboutMeName);
  addChildToParent(aboutMeSection, aboutMeEmail);
  return aboutMeSection;
}

// Utility functions
function addChildToParent(parent, child) {
  parent.appendChild(child);
}

function addClassToElement(element, classToAdd) {
  element.classList.add(classToAdd);
}

function addText(element, textToAdd) {
  element.textContent = textToAdd;
}

function createElement(element) {
  return document.createElement(element);
}

function createHeader() {
  const header = createElement("header");
  addClassToElement(header, "main-header");
  return header;
}

function createMain() {
  const main = createElement("main");
  addClassToElement(main, "main-content");
  return main;
}

function createTitle() {
  const title = createElement("h1");
  addClassToElement(title, "main-header__title");
  addText(title, "Don Hamilton III");
  return title;
}

function selectElement(elementIdentifier) {
  return document.querySelector(elementIdentifier);
}
