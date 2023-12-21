const styles = {
  li: "border-b-4 border-b-blue-500/75 flex items-center text-3xl font-bold tracking-widest",
  input:
    "text-white bg-blue-600/25 p-3 border-b-4 border-b-cyan-500/75 w-[100%] text-4xl",
};

const loopStyles = (key, ele) => {
  styles[key]
    .split(" ")
    .forEach(
      (style) => style != "border-b-4" && ele.classList.add(style)
    );
};

export { styles, loopStyles };
