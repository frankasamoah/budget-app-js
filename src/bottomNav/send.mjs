import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";
import { cardComponent } from "../cardComponent.mjs";
import { balanceComponent } from "../balanceComponent.mjs";
import { theTime, todayDate } from "../dateComponent.mjs";

let sendForm = document.querySelector("#send__modal");
let purposeModal = document.querySelector("#send__modal--purpose");
let amountModal = document.querySelector("#send__modal--amount");
let storage = JSON.parse(localStorage.getItem("DB")) || [];

export let send = () => {
  sendForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let created_data = {
      id: nanoid(10),
      title: purposeModal.value,
      amount: +-amountModal.value,
      date: todayDate(),
      time: theTime(),
      color: "red",
    };
    storage.push(created_data);
    console.log(created_data);
    localStorage.setItem("DB", JSON.stringify(storage));
    cardComponent(storage);
    balanceComponent(storage);
  });
};
