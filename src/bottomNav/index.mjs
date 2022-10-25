let bottomNavigation = document.querySelector("#bottomNavigation");
import { payment } from "./payment.mjs";
import { receive } from "./receive.mjs";
import { send } from "./send.mjs";
import {} from "./receive.mjs";

export let bottomNav = () => {
  payment();
  receive();
  send();
  return (bottomNavigation.innerHTML = `<div class="bottomNavigation__payment" data-bs-toggle="modal" data-bs-target="#payment__modal" type="button">Payment</div>
    <div class="bottomNavigation__receive" data-bs-toggle="modal" data-bs-target="#receive__modal" type="button">Receive</div>
    <div class="bottomNavigation__send" data-bs-toggle="modal" data-bs-target="#send__modal"type="button">Send</div>
    <div class="bottomNavigation__loan" type="button">Loan</div>`);
};
