import "./styles.scss";

const ITEMS =
  "#FilterPanel + div > .flex:has(a[href*='/detail/koop/']) > * > *:nth-last-child(1)";
const ITEMS_CONTAINER = "a";

const getCheckbox = () => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkerCheckbox");
  return checkbox;
};

const insertCheckbox = (root: Element) => {
  root.classList.add("checkerContainer");
  root.querySelector(ITEMS_CONTAINER)?.classList.add("checkerContainer");
  root?.append(getCheckbox());
};

document.querySelectorAll(ITEMS).forEach(insertCheckbox);
console.log("updated? asd");
