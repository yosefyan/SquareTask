const findSelectedIndex = (arr, finishedElement, should) => {
  let num = +finishedElement.dataset.order;
  let desiredIndex = arr.findIndex((item) => item.id == num);
  if (should) {
    arr.splice(desiredIndex, 1);
  } else {
    return desiredIndex;
  }
};

export default findSelectedIndex;
