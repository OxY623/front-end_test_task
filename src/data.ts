export interface Package {
  weight: string;
  sku: string;
  currentPrice: string;
  oldPrice: string;
}

export const packages: Package[] = [
  {
    weight: "100 г",
    sku: "01306",
    currentPrice: "326,40 ₽",
    oldPrice: "349,20 ₽",
  },
  {
    weight: "500 г",
    sku: "01307",
    currentPrice: "1 432 ₽",
    oldPrice: "1 646 ₽",
  },
  {
    weight: "1000 г",
    sku: "01308",
    currentPrice: "2 064 ₽",
    oldPrice: "2 592 ₽",
  },
  {
    weight: "5000 г",
    sku: "01309",
    currentPrice: "6 320 ₽",
    oldPrice: "8 710 ₽",
  },
];