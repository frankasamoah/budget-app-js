let balancecomp = document.querySelector(".balance");

export let balanceComponent = (data) => {
  let total = 0;
  total = data?.map((item) => item.amount)?.reduce((x, y) => x + y) || 0;

  return (balancecomp.innerHTML = `<div class="balance__current fw-light">Current balance</div>
  <div class="balance__total fw-bold">$ ${total}</div>`);
};
