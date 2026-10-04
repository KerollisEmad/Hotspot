/** Maps CategoryNav button keys to menu category ids in `src/lib/menu.ts`. */
export const NAV_KEY_TO_CATEGORY_ID: Record<string, string> = {
  snacks: "snacks",
  burgers: "smash-burger",
  pizza: "pizza",
  chicken: "chicken",
  wraps: "wraps",
  pasta: "pasta",
  salads: "salads",
  quesadillas: "quesadillas",
  hot: "hot-drinks",
  iced: "iced-coffee",
  fresh: "fresh-juices",
  soft: "soft-drinks",
  mojitos: "mojitos",
  smoothies: "smoothies",
  milkshakes: "milkshakes",
  dessert: "dessert",
};

export const DEFAULT_NAV_KEY = "burgers";