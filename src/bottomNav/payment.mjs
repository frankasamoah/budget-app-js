import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";
import { cardComponent } from "../cardComponent.mjs";
import { balanceComponent } from "../balanceComponent.mjs";
import { theTime, todayDate } from "../dateComponent.mjs";

let paymentForm = document.querySelector("#payment__modal");
let purpose = document.querySelector("#payment__modal--purpose");
let amount = document.querySelector("#payment__modal--amount");

let storage = JSON.parse(localStorage.getItem("DB")) || [];

export let payment = () => {
  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let created_data = {
      id: nanoid(10),
      title: purpose.value,
      amount: +-amount.value,
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
