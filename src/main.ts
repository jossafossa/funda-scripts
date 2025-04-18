import "./styles.scss";

const ITEMS =
  "#FilterPanel + div > .flex:has(a[href*='/detail/koop/']) > * > *:nth-last-child(1) a";

const getCheckbox = () => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkerCheckbox");
  return checkbox;
};

const insertCheckbox = (root: Element) => {
  root.classList.add("checkerContainer");
  root?.append(getCheckbox());
};

document.querySelectorAll(ITEMS).forEach(insertCheckbox);
console.log("updated? asd");
