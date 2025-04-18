const ITEMS = "#FilterPanel + div > .flex:has(a[href*='/detail/koop/']) > *";
const ITEMS_CONTAINER = "*:has(> button)";

const getCheckbox = () => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  return checkbox;
};

const insertCheckbox = (root: Element) => {
  const container = root.querySelector(ITEMS_CONTAINER);
  if (!container) return;

  const checkbox = getCheckbox();
  container?.append(checkbox);
};

document.querySelectorAll(ITEMS).forEach(insertCheckbox);
console.log("updated? asdasd");
