import "./styles.scss";

const ITEMS =
  "#FilterPanel + div > .flex:has(a[href*='/detail/koop/']) > * > *:nth-last-child(1)";
const ITEMS_CONTAINER = "h2 a";

const getCheckbox = () => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkerCheckbox");
  return checkbox;
};

const getId = (element: Element) => {
  const id = (element.querySelector("h2 a") as HTMLAnchorElement)?.href;
  return id;
};

const insertCheckbox = (root: Element) => {
  const id = getId(root);
  console.log({ id });
  root.classList.add("checkerContainer");
  // root.classList.add("checkerContainerLink");
  const container = root.querySelector(ITEMS_CONTAINER);
  container?.classList.add("checkerContainerLink");
  root?.append(getCheckbox());
};

document.querySelectorAll(ITEMS).forEach(insertCheckbox);
console.log("updated? asd");
