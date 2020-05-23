const body = document.querySelector("body");
const heading = document.querySelector("body > h1");
const paras = document.querySelectorAll("p");
const para = document.querySelector("body > div > p:nth-child(1)");
const content = document.querySelector(".content");
const link = document.querySelector("a");

body.style.backgroundColor = "#ffffff";
heading.textContent = "Document Object Model";
heading.style.color = "#5e5d5a";

paras.forEach((para) => {
  para.style.color = "#4d4b4b";
  para.style.fontSize = "20px";
});

para.innerText += " I love DOM <3";

const pets = ["cats", "dogs", "birds", "fish", "bunnies", "lions"];

pets.forEach((pet) => {
  content.innerHTML += `<p>${pet}</p>`;
});

link.setAttribute("href", "https://www.facebook.com");
link.innerText = `Click to connect with me.`;
