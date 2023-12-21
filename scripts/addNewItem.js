import { styles } from "./styles.js";

const addToArray = (arr, data) => arr.push(data);

const addItem = (input, items, container, id, should) => {
  let newItem = { id: id++, value: input };
  addToArray(items, newItem);
  container.innerHTML = "";
  items.forEach(
    (item) =>
      (container.innerHTML += itemStructure(item.id, item.value, should))
  );
};

const itemStructure = (id, value, should) => {
  return `<li data-order="${id}" class="${
    should ? "" : "text-green-900 tShadow p-5 line-through"
  }${
    styles.li
  } text-black">${id}.<span class="mx-4 text-white" id="text"> ${value}</span>
  ${
    should
      ? `<span class="w-[60%] p-2 grow text-end flex justify-end">
    <div class="w-full flex justify-end items-end xl:items-center xl:flex-row flex-col">
      <i class="fa-solid fa-check-double p-2 text-green-500 transition-all  cursor-pointer hover:scale-75"></i>
      <i class="fa-solid fa-pen-to-square p-2 text-yellow-500 transition-all  cursor-pointer hover:scale-75"></i>
      <i class="fa-solid fa-trash text-red-500 transition-all cursor-pointer hover:scale-75"></i>
    </div>
    <div class="hidden flex justify-center items-center">
     <i class="fa-solid fa-check p-2 text-green-500 transition-all cursor-pointer hover:scale-75"></i>
     <i class="fa-solid fa-xmark text-red-500 transition-all cursor-pointer 
     hover:scale-75"></i>
    </div>
   </span>`
      : `<span class="grow flex justify-end">
            <i class="fa-solid fa-trash perm text-red-500 transition-all cursor-pointer hover:scale-75"></i>
        </span>
      `
  }
 
  </li>`;
};

const refreshList = (array, container, should) => {
  array != undefined &&
    array.forEach(
      (arr) => (container.innerHTML += itemStructure(arr.id, arr.value, should))
    );
};

export { addToArray, itemStructure, addItem, refreshList };
