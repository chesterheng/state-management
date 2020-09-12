import { observable, autorun } from "mobx";

const input = document.getElementById("text-input");
const textDisplay = document.getElementById("text-display");
const loudDisplay = document.getElementById("text-display-uppercase");

const text = observable({
  value: "Hello World",
  get uppercase() {
    return this.value.toUpperCase();
  }
});

input.addEventListener("keyup", event => {
  text.value = event.target.value;
});

autorun(() => {
  textDisplay.textContent = text.value;
  loudDisplay.textContent = text.uppercase;
})