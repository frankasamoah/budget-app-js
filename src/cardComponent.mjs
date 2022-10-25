let history = document.querySelector(".transaction__history");

export let cardComponent = (data) => {
  return (history.innerHTML = data
    .map(({ id, amount, title, date, color, time }) => {
      return `
    <div class="transaction__history--">
        <div class="row__1">
          <div class="row__1--title">${title}</div>
          <div class="row__1--date">${date} ${time}</div>
        </div>
        <div class="row__2">
          <div class="row__2--transID">${id}</div>
          <div class="row__2--amount ${color}">${amount}</div>
        </div>
    </div>
    <hr>
    `;
    })
    .reverse()
    .filter((x, y) => y <= 3)
    .join(""));
};
