const changeClass = (add, remove) => {
  setTimeout(() => {
    add.forEach((a) => a.classList.add("hidden"));
    remove.forEach((a) => a.classList.remove("hidden"));
  }, 1.5);
};

export default changeClass;
