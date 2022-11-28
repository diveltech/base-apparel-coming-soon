const $ = (selector) => document.querySelector(selector);
const form = $("#form");
const input = $("#input");

$("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const inputValue = input.value;
  if (!regex.test(inputValue)) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
    input.value = "";
  }
});

input.addEventListener("input", () => form.classList.remove("error"));
