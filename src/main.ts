// @ts-expect-error
import "the-new-css-reset";
import { packages as data, type Package } from "./data";
import "./main.scss";

// Variables
const packageButtons =
  document.querySelectorAll<HTMLButtonElement>(".package-option");
const skuElement = document.getElementById("product-sku");
const currentPriceElement = document.getElementById("current-price");
const oldPriceElement = document.getElementById("old-price");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close-modal");
const openers = document.querySelectorAll(".product-card__img-link, .zoom-btn");

const packages: Package[] = data;
let selectedPackageIndex = 0;

function updateProductInfo(index: number):void {
  const selectedPackage:Package = packages[index];
  
  if (!selectedPackage) {
    return;
  }

  selectedPackageIndex = index;

  skuElement instanceof Element &&
    (skuElement.textContent = selectedPackage.sku);
  currentPriceElement instanceof Element &&
    (currentPriceElement.textContent = selectedPackage.currentPrice);
  oldPriceElement instanceof Element &&
    (oldPriceElement.textContent = selectedPackage.oldPrice);

  packageButtons.forEach((button, buttonIndex) => {
    const isActive = buttonIndex === selectedPackageIndex;

    button.classList.toggle("package-option--active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

packageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const packageIndex = Number(button.dataset.package as string);

    updateProductInfo(packageIndex);
  });
});

const addToCartButton = document.querySelector(".add-to-cart");

addToCartButton?.addEventListener("click", (event) => {
  const button = event.currentTarget as HTMLElement;
  const label = button.querySelector("span");

  if (!label) return;

  const originalText = label.textContent;

  button.classList.add("add-to-cart--added");
  console.log("Добавлено в корзину")
  label.textContent = "Добавлено";

  window.setTimeout(() => {
    button.classList.remove("add-to-cart--added");
    label.textContent = originalText;
  }, 1200);
});

openers.forEach((opener) => {
  opener.addEventListener("click", (event: Event) => {
    event.preventDefault();
    let src = "";
    if (opener.classList.contains("img-link")) {
      console.log("opener", opener);
      src = opener.getAttribute("data-src") || "";
    } else {
      console.log("opener", opener);
      const parentLink = opener
        .closest(".product-card__media")
        ?.querySelector(".img-link") as HTMLAnchorElement | null;
      src = parentLink?.getAttribute("data-src") || "";
    }
    if (!src) return;
    if (modalImg instanceof HTMLImageElement) modalImg.src = src;
    if (modal instanceof HTMLElement) modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

closeBtn &&
  closeBtn.addEventListener("click", () => {
    if (modal instanceof HTMLElement) modal.classList.remove("active");
    document.body.style.overflow = "";
  });

modal &&
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal && modal.classList.contains("active")) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});
