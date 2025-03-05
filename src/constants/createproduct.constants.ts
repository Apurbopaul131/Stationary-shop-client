export const productCategories = [
  "Writing",
  "Office Supplies",
  "Art Supplies",
  "Educational",
  "Technology",
];
export const productCategoriesAllProducts = [
  "All",
  "Writing",
  "Office Supplies",
  "Art Supplies",
  "Educational",
  "Technology",
];
const productStock = ["in-stock", "out-of-stock"];
export const productStockOptions = productStock.map((stock) => ({
  label: stock,
  value: stock === "in-stock" ? true : false,
}));
export const productCategoriesOptions = productCategories.map((product) => ({
  value: product,
  label: product,
}));
