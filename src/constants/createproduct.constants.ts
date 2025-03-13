//six product categories
export const productCategories = [
  "Writing",
  "Office Supplies",
  "Art Supplies",
  "Educational",
  "Technology",
];
//This categories are used in user all products page
export const productCategoriesAllProducts = [
  "All",
  "Writing",
  "Office Supplies",
  "Art Supplies",
  "Educational",
  "Technology",
];

//product stock
const productStock = ["in-stock", "out-of-stock"];

//product options array are used in the create and update product form
export const productStockOptions = productStock.map((stock) => ({
  label: stock,
  value: stock === "in-stock" ? true : false,
}));

//product categories options array are used in the create and update product form
export const productCategoriesOptions = productCategories.map((product) => ({
  value: product,
  label: product,
}));
