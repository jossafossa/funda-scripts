import "./styles.scss";

const ITEMS =
  "#FilterPanel + div > .flex:has(a[href*='/detail/koop/']) > * > *:nth-last-child(1)";
const ITEMS_CONTAINER = "h2 a";

const getStorage = () => {
  const storage = localStorage.getItem("checker");
  if (!storage) {
    localStorage.setItem("checker", JSON.stringify({}));
    return {};
  }
  return JSON.parse(storage);
};
const setStorage = (storage: Record<string, boolean>) => {
  localStorage.setItem("checker", JSON.stringify(storage));
};
const getChecked = (id: string) => {
  const storage = getStorage();
  const checked = storage[id];
  if (checked === undefined) {
    storage[id] = false;
    setStorage(storage);
    return false;
  }
  return checked;
};
const setChecked = (id: string, checked: boolean) => {
  const storage = getStorage();
  storage[id] = checked;
  setStorage(storage);
};

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
  if (root.classList.contains("checkerContainer")) {
    return;
  }
  const id = getId(root);
  console.log({ id });
  root.classList.add("checkerContainer");
  root.classList.add("checkerContainerLink");
  const container = root.querySelector(ITEMS_CONTAINER);
  container?.classList.add("checkerContainerLink");
  const checkbox = getCheckbox();

  checkbox.checked = getChecked(id);
  checkbox.addEventListener("change", (e) => {
    const checked = (e.target as HTMLInputElement).checked;
    setChecked(id, checked);
  });

  root?.append(checkbox);
};

document.querySelectorAll(ITEMS).forEach(insertCheckbox);
console.log("updated? asd");
