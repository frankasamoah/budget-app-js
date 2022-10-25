import { todayDate } from "./dateComponent.mjs";
let topBarDiv = document.querySelector("#topBar");

export let topBar = () => {
  return (topBarDiv.innerHTML = `
  <img src="src/images/portrait.png" alt="" class="topBar__image" />
  <div class="topBar__text">
    <div class="topBar__text--date  fw-light">${todayDate()}</div>
    <div class="topBar__text--name  fw-bold">Jane Anderson</div>
  </div>
  `);
};
