import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";
import { cardComponent } from "../cardComponent.mjs";
import { balanceComponent } from "../balanceComponent.mjs";
import { theTime, todayDate } from "../dateComponent.mjs";

let receiveForm = document.querySelector("#receive__modal");

let receiveFrom = document.querySelector("#receive__modal--from");
let receiveAmount = document.querySelector("#receive__modal--amount");

let storage = JSON.parse(localStorage.getItem("DB")) || [];

export let receive = () => {
  receiveForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let created_data = {
      id: nanoid(10),
      title: receiveFrom.value,
      amount: +receiveAmount.value,
      date: todayDate(),
      time: theTime(),
      color: "green",
    };
    storage.push(created_data);
    localStorage.setItem("DB", JSON.stringify(storage));
    console.log(created_data);
    cardComponent(storage);
    balanceComponent(storage);
  });
};
