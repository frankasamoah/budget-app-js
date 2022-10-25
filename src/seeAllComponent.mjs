let see_all = document.querySelector(".transaction__text--button");

export let sellAll = (data) => {
  see_all.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(data);
  });
};
