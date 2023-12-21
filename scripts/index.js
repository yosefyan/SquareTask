import { addItem, refreshList } from "./addNewItem.js";
import changeClass from "./changeClass.js";
import findSelectedIndex from "./findSelectedIndex.js";
import { selector, selectorAll } from "./selector.js";
import { loopStyles } from "./styles.js";
import { items, completedItems } from "./variables.js";

const itemList = selector("#itemList");
const theInput = selector("#theInput");
const theForm = selector("#theForm");

const preItem = selector("#preItem");

let completedContainer = selector("#completedContainer");
loopStyles("li", preItem);

let data = JSON.parse(localStorage.getItem("shopListData"));

let id = data?.items[items.length - 1]?.id + 1 || items.length + 1;
let id2 =
  data?.completedItems[completedItems.length - 1]?.id + 1 ||
  completedItems.length + 1;

refreshList(items, itemList, true);
refreshList(completedItems, completedContainer, false);

const updateLocalStorage = () => {
  localStorage.setItem(
    "shopListData",
    JSON.stringify({ items, completedItems })
  );
};

const clear = () => {
  itemList.innerHTML = "";
}

theInput.addEventListener("input", (e) => {
  preItem.innerHTML = id + ". " + e.target.value;
  changeClass([], [preItem]);
});

theForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = e.target[0].value;
  inputValue != "" && addItem(inputValue, items, itemList, id++, true);
  preItem.innerHTML = "";
  changeClass([preItem], [itemList]);
  theInput.value = "";
  updateLocalStorage();
});

itemList.addEventListener("click", (e) => {
  let finishedElement = e.target.parentElement.parentElement;
  if (e.target.classList.contains("fa-check-double")) {
    completedContainer.innerHTML = "";
    addItem(
      finishedElement.innerText.replace(/[0-9]./g, "") +
        finishedElement.parentElement.firstElementChild.innerText,
      completedItems,
      completedContainer,
      id2++,
      false
    );
    findSelectedIndex(items, finishedElement.parentElement, true);
   clear()
    refreshList(items, itemList, true);
  }
  if (e.target.classList.contains("fa-trash")) {
    findSelectedIndex(items, finishedElement.parentElement, true);
   clear()
    refreshList(items, itemList, true);
  }
  if (e.target.classList.contains("fa-pen-to-square")) {
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    finishedElement.prepend(input);
    const inputs = selectorAll("input");
    inputs.forEach((input) => loopStyles("input", input));
    changeClass(
      [
        e.target.parentElement,
        e.target.parentElement.parentElement.previousElementSibling,
      ],
      [e.target.parentElement.nextElementSibling]
    );
  }
  if (e.target.classList.contains("fa-xmark")) {
    changeClass(
      [
        e.target.parentElement,
        e.target.parentElement.parentElement.firstElementChild,
      ],
      [
        e.target.parentElement.previousElementSibling,
        e.target.parentElement.parentElement.previousElementSibling,
      ]
    );
  }
  if (e.target.classList.contains("fa-check")) {
    let ele = finishedElement.parentElement;
    let index = findSelectedIndex(items, ele, false);
    items[index].value =
      e.target.parentElement.parentElement.firstElementChild.value;
    changeClass(
      [
        e.target.parentElement,
        e.target.parentElement.parentElement.firstElementChild,
      ],
      [
        e.target.parentElement.previousElementSibling,
        e.target.parentElement.parentElement.previousElementSibling,
      ]
    );
   clear()
    refreshList(items, itemList, true);
  }
  updateLocalStorage();
});

completedContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("perm")) {
    findSelectedIndex(
      completedItems,
      e.target.parentElement.parentElement,
      true
    );
    completedContainer.innerHTML = "";
    refreshList(completedItems, completedContainer, false);
    updateLocalStorage();
  }
});