export let todayDate = () => {
  return dayjs().format("DD/MM/YY");
};

export let theTime = () => {
  return dayjs().format("hh:mm");
};
