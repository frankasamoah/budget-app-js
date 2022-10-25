import { topBar } from "./topBar.mjs";
import { balanceComponent } from "./balanceComponent.mjs";
import { bottomNav } from "./bottomNav/index.mjs";
import { cardComponent } from "./cardComponent.mjs";
import { todayDate } from "./dateComponent.mjs";
import { sellAll } from "./seeAllComponent.mjs";

let data = JSON.parse(localStorage.getItem("DB")) || [];

topBar();
balanceComponent(data);
bottomNav();
cardComponent(data);
todayDate();
sellAll(data);
