import { createCsv } from "./csv.js";

const saveBtn$ = document.querySelector("#save-product");
const newProductId$ = document.querySelector("#new-product-id");
const productList$ = document.querySelector("#product-list");
const generateCsvWithoutWebWorkerBtn$ = document.querySelector(
  "#generate-csv-without-web-worker"
);
const generateCsvWithWebWorkerBtn$ = document.querySelector(
  "#generate-csv-with-web-worker"
);

const worker = new Worker("worker.js", { type: "module" });

saveBtn$.addEventListener("click", (e) => {
  const newItem = document.createElement("li");
  newItem.textContent = newProductId$.value;
  productList$.appendChild(newItem);

  newProductId$.value = "";
});

// Doing the operation without a Web Worker lags the iteration with the page, for example add new product id
generateCsvWithoutWebWorkerBtn$.addEventListener("click", () => {
  console.log(createCsv());
});

// Doing the operation with a Web Worker allows to interact with the page, while the csv is created in background
generateCsvWithWebWorkerBtn$.addEventListener("click", () => {
  worker.postMessage(null);
});
