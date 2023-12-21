let items = [];

let completedItems = [];

let existingData = JSON.parse(localStorage.getItem("shopListData")) || {
  items: [],
  completedItems: [],
};

items = existingData.items;
completedItems = existingData.completedItems;

export { items, completedItems };
