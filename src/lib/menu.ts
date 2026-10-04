import { MenuGroup, ContactInfo } from '@/types/menu';

// Hotspot Menu Data
// Bilingual (English + Arabic). Every item has `isVisible` so the future
// dashboard can toggle products on/off without deleting them.
// Size variants (Double/Triple, S/D) are kept as fully separate items,
// per decision — do not combine into one card with size options.
//
// ORDER MATTERS: the first item in each category is shown as the large
// "Most Popular" card. Keep the best seller first.
//
// NOTE: Arabic names (nameAr) below are a first-pass translation done
// for launch speed. Flag them to the restaurant owner for a quick review
// before going live — a couple of product names (e.g. "Furry") are
// transliteration guesses.

// Temporary image shared by every item. To give one item its own photo,
// change ONLY its line below, e.g.  pizzaMargherita: "/images/menu/pizza-1.jpg",
const IMG = "/images/bg2.png";

const img = {
  // snacks
  snacksFries: IMG, // Fries
  snacksCorndog: IMG, // Corndog
  snacksCheesyFries: IMG, // Cheesy Fries
  snacksWaffleFries: IMG, // Waffle Fries
  snacksSweetPotatoFries: IMG, // Sweet Potato Fries
  snacksAnimalStyleFries: IMG, // Animal Style Fries
  snacksCaliforniaMelt: IMG, // California Melt
  snacksNachos: IMG, // Nachos
  snacksTexasNachos: IMG, // Texas Nachos
  snacksChickenPops: IMG, // Chicken Pops
  // quesadillas
  quesadillasChickenQuesadillas: IMG, // Chicken Quesadillas
  quesadillasBeefQuesadillas: IMG, // Beef Quesadillas
  // salads
  saladsGreenSalad: IMG, // Green Salad
  saladsColeslaw: IMG, // Coleslaw
  saladsBeansSalad: IMG, // Beans Salad
  saladsChickenSalad: IMG, // Chicken Salad
  saladsSpecialSalad: IMG, // Special Salad
  // smash-burger
  smashBurgerChicagoClassicDouble: IMG, // Chicago Classic (Double)
  smashBurgerChicagoClassicTriple: IMG, // Chicago Classic (Triple)
  smashBurgerMilwaukeeCheeseDouble: IMG, // Milwaukee Cheese (Double)
  smashBurgerMilwaukeeCheeseTriple: IMG, // Milwaukee Cheese (Triple)
  smashBurgerPortlandShroomerDouble: IMG, // Portland Shroomer (Double)
  smashBurgerPortlandShroomerTriple: IMG, // Portland Shroomer (Triple)
  smashBurgerNewYorkHotspotDouble: IMG, // New York Hotspot (Double)
  smashBurgerNewYorkHotspotTriple: IMG, // New York Hotspot (Triple)
  // chicken
  chicken9MegaStrips: IMG, // 9 Mega Strips
  chicken3MegaStrips: IMG, // 3 Mega Strips
  chicken6MegaStrips: IMG, // 6 Mega Strips
  chicken6PcsWings: IMG, // 6 Pcs Wings
  chicken12PcsWings: IMG, // 12 Pcs Wings
  // wraps
  wrapsChickiRoll: IMG, // Chicki Roll
  wrapsGoldenMelt: IMG, // Golden Melt
  wrapsChickenBurger: IMG, // Chicken Burger
  wrapsHotdog: IMG, // Hotdog
  wrapsKofta: IMG, // Kofta
  wrapsBeefSyrianWrap: IMG, // Beef Syrian Wrap
  // pizza
  pizzaMargherita: IMG, // Margherita
  pizzaVeggies: IMG, // Veggies
  pizzaChickenBBQ: IMG, // Chicken BBQ
  pizzaChickenRanch: IMG, // Chicken Ranch
  pizzaHotdogPizza: IMG, // Hotdog Pizza
  pizzaBurgerPizza: IMG, // Burger Pizza
  pizzaKoftaPizza: IMG, // Kofta Pizza
  pizzaChickenBuffaloRanch: IMG, // Chicken Buffalo Ranch
  // pasta
  pastaPenneChickenAlfredo: IMG, // Penne Chicken Alfredo
  pastaPenneRedSauce: IMG, // Penne Red Sauce
  pastaPenneAlfredo: IMG, // Penne Alfredo
  pastaChickenPenneTruffle: IMG, // Chicken Penne Truffle
  pastaMacCheese: IMG, // Mac & Cheese
  pastaCreamyPestoFusilli: IMG, // Creamy Pesto Fusilli
  pastaCreamyChickenPestoFusilli: IMG, // Creamy Chicken Pesto Fusilli
  pastaTrufflePenne: IMG, // Truffle Penne
  // hot-drinks
  hotDrinksCappuccino: IMG, // Cappuccino
  hotDrinksTea: IMG, // Tea
  hotDrinksHerbs: IMG, // Herbs
  hotDrinksTurkishCoffeeSingle: IMG, // Turkish Coffee (Single)
  hotDrinksTurkishCoffeeDouble: IMG, // Turkish Coffee (Double)
  hotDrinksNescafe: IMG, // Nescafe
  hotDrinksEspressoSingle: IMG, // Espresso (Single)
  hotDrinksEspressoDouble: IMG, // Espresso (Double)
  hotDrinksMacchiatoSingle: IMG, // Macchiato (Single)
  hotDrinksMacchiatoDouble: IMG, // Macchiato (Double)
  hotDrinksCaramelMacchiato: IMG, // Caramel Macchiato
  hotDrinksLatte: IMG, // Latte
  hotDrinksAmericano: IMG, // Americano
  hotDrinksHotChocolate: IMG, // Hot Chocolate
  hotDrinksHotSpanishLatte: IMG, // Hot Spanish Latte
  hotDrinksFrenchCoffee: IMG, // French Coffee
  hotDrinksFlatWhite: IMG, // Flat White
  hotDrinksHotCaramelLatte: IMG, // Hot Caramel Latte
  // iced-coffee
  icedCoffeeIcedAmericano: IMG, // Iced Americano
  icedCoffeeIcedCoffee: IMG, // Iced Coffee
  icedCoffeeIcedLatte: IMG, // Iced Latte
  icedCoffeeIcedCaramelLatte: IMG, // Iced Caramel Latte
  icedCoffeeIcedSpanishLatte: IMG, // Iced Spanish Latte
  // fresh-juices
  freshJuicesLemon: IMG, // Lemon
  freshJuicesLemonMint: IMG, // Lemon Mint
  freshJuicesWatermelon: IMG, // Watermelon
  freshJuicesPomegranate: IMG, // Pomegranate
  freshJuicesMango: IMG, // Mango
  freshJuicesCocktail: IMG, // Cocktail
  freshJuicesKiwi: IMG, // Kiwi
  // soft-drinks
  softDrinksRedBull: IMG, // Red Bull
  softDrinksWater: IMG, // Water
  softDrinksCoke: IMG, // Coke
  softDrinksCokeZero: IMG, // Coke Zero
  softDrinksSprite: IMG, // Sprite
  softDrinksSpriteZero: IMG, // Sprite Zero
  softDrinksSchweppes: IMG, // Schweppes
  softDrinksFanta: IMG, // Fanta
  softDrinksAmstel: IMG, // Amstel
  softDrinksFurry: IMG, // Furry
  // mojitos
  mojitosMojitoClassic: IMG, // Mojito Classic
  mojitosMojitoStrawberry: IMG, // Mojito Strawberry
  mojitosMojitoPineapple: IMG, // Mojito Pineapple
  mojitosMojitoRaspberry: IMG, // Mojito Raspberry
  mojitosMojitoBlueberry: IMG, // Mojito Blueberry
  mojitosMojitoPassionFruit: IMG, // Mojito Passion Fruit
  // smoothies
  smoothiesSmoothieLemon: IMG, // Smoothie Lemon
  smoothiesSmoothieLemonMint: IMG, // Smoothie Lemon Mint
  smoothiesSmoothieWatermelon: IMG, // Smoothie Watermelon
  smoothiesSmoothiePomegranate: IMG, // Smoothie Pomegranate
  smoothiesSmoothieMango: IMG, // Smoothie Mango
  smoothiesSmoothieCocktail: IMG, // Smoothie Cocktail
  smoothiesSmoothiePassionFruit: IMG, // Smoothie Passion Fruit
  // milkshakes
  milkshakesVanilla: IMG, // Vanilla
  milkshakesChocolate: IMG, // Chocolate
  milkshakesOreo: IMG, // Oreo
  milkshakesLotus: IMG, // Lotus
  milkshakesStrawberry: IMG, // Strawberry
  milkshakesPineapple: IMG, // Pineapple
  milkshakesBlueberry: IMG, // Blueberry
  milkshakesMango: IMG, // Mango
  milkshakesPassionFruit: IMG, // Passion Fruit
  // dessert
  dessertMarshmallow: IMG, // Marshmallow
  dessertFreska: IMG, // Freska
  dessertSingleScoopIceCream: IMG, // Single Scoop Ice Cream
  dessertDoubleScoopIceCream: IMG, // Double Scoop Ice Cream
  dessertWaffle: IMG, // Waffle
  dessertMiniPancake: IMG, // Mini Pancake
  dessertChocolateJar: IMG, // Chocolate Jar
  dessertKinderJar: IMG, // Kinder Jar
  dessertTiramisu: IMG, // Tiramisu
};

export const hotspotMenu: MenuGroup[] = [
  {
    id: "food",
    name: "Food",
    nameAr: "أكل",
    order: 1,
    categories: [
      {
        id: "snacks",
        name: "Snacks",
        nameAr: "سناكس",
        order: 1,
        isVisible: true,
        items: [
          { id: "snacks-1", name: "Fries", nameAr: "بطاطس", price: 70, image: img.snacksFries, isVisible: true },
          { id: "snacks-2", name: "Corndog", nameAr: "كورن دوج", price: 80, image: img.snacksCorndog, isVisible: true },
          { id: "snacks-3", name: "Cheesy Fries", nameAr: "بطاطس بالجبنة", price: 100, image: img.snacksCheesyFries, isVisible: true },
          { id: "snacks-4", name: "Waffle Fries", nameAr: "بطاطس وافل", price: 140, image: img.snacksWaffleFries, isVisible: true },
          { id: "snacks-5", name: "Sweet Potato Fries", nameAr: "بطاطس البطاطا", price: 140, image: img.snacksSweetPotatoFries, isVisible: true },
          { id: "snacks-6", name: "Animal Style Fries", nameAr: "بطاطس أنيمال ستايل", price: 160, image: img.snacksAnimalStyleFries, isVisible: true },
          { id: "snacks-7", name: "California Melt", nameAr: "كاليفورنيا ميلت", price: 100, image: img.snacksCaliforniaMelt, isVisible: true },
          { id: "snacks-8", name: "Nachos", nameAr: "ناتشوز", price: 140, image: img.snacksNachos, isVisible: true },
          { id: "snacks-9", name: "Texas Nachos", nameAr: "ناتشوز تكساس", price: 150, image: img.snacksTexasNachos, isVisible: true },
          { id: "snacks-10", name: "Chicken Pops", nameAr: "تشيكن بوبس", price: 150, image: img.snacksChickenPops, isVisible: true },
        ],
      },
      {
        id: "quesadillas",
        name: "Quesadillas",
        nameAr: "كساديا",
        order: 2,
        isVisible: true,
        items: [
          { id: "quesadillas-1", name: "Chicken Quesadillas", nameAr: "كساديا دجاج", price: 200, image: img.quesadillasChickenQuesadillas, isVisible: true },
          { id: "quesadillas-2", name: "Beef Quesadillas", nameAr: "كساديا لحمة", price: 210, image: img.quesadillasBeefQuesadillas, isVisible: true },
        ],
      },
      {
        id: "salads",
        name: "Salads",
        nameAr: "سلطات",
        order: 3,
        isVisible: true,
        items: [
          { id: "salads-1", name: "Green Salad", nameAr: "سلطة خضراء", price: 80, image: img.saladsGreenSalad, isVisible: true },
          { id: "salads-2", name: "Coleslaw", nameAr: "كول سلو", price: 80, image: img.saladsColeslaw, isVisible: true },
          { id: "salads-3", name: "Beans Salad", nameAr: "سلطة فول", price: 130, image: img.saladsBeansSalad, isVisible: true },
          { id: "salads-4", name: "Chicken Salad", nameAr: "سلطة دجاج", price: 160, image: img.saladsChickenSalad, isVisible: true },
          { id: "salads-5", name: "Special Salad", nameAr: "سلطة سبيشيال", price: 180, image: img.saladsSpecialSalad, isVisible: true },
        ],
      },
      {
        id: "smash-burger",
        name: "Smash Burger",
        nameAr: "سماش برجر",
        order: 4,
        isVisible: true,
        items: [
          { id: "smash-1-double", name: "Chicago Classic (Double)", nameAr: "شيكاجو كلاسيك (دابل)", price: 200, image: img.smashBurgerChicagoClassicDouble, isVisible: true },
          { id: "smash-1-triple", name: "Chicago Classic (Triple)", nameAr: "شيكاجو كلاسيك (تربل)", price: 280, image: img.smashBurgerChicagoClassicTriple, isVisible: true },
          { id: "smash-2-double", name: "Milwaukee Cheese (Double)", nameAr: "ميلواكي تشيز (دابل)", price: 220, image: img.smashBurgerMilwaukeeCheeseDouble, isVisible: true },
          { id: "smash-2-triple", name: "Milwaukee Cheese (Triple)", nameAr: "ميلواكي تشيز (تربل)", price: 280, image: img.smashBurgerMilwaukeeCheeseTriple, isVisible: true },
          { id: "smash-3-double", name: "Portland Shroomer (Double)", nameAr: "بورتلاند شرومر (دابل)", price: 280, image: img.smashBurgerPortlandShroomerDouble, isVisible: true },
          { id: "smash-3-triple", name: "Portland Shroomer (Triple)", nameAr: "بورتلاند شرومر (تربل)", price: 320, image: img.smashBurgerPortlandShroomerTriple, isVisible: true },
          { id: "smash-4-double", name: "New York Hotspot (Double)", nameAr: "نيويورك هوت سبوت (دابل)", price: 290, image: img.smashBurgerNewYorkHotspotDouble, isVisible: true },
          { id: "smash-4-triple", name: "New York Hotspot (Triple)", nameAr: "نيويورك هوت سبوت (تربل)", price: 330, image: img.smashBurgerNewYorkHotspotTriple, isVisible: true },
        ],
      },
      {
        id: "chicken",
        name: "Chicken",
        nameAr: "تشيكن",
        order: 5,
        isVisible: true,
        items: [
          { id: "chicken-3", name: "9 Mega Strips", nameAr: "9 ميجا سترپس", price: 300, image: img.chicken9MegaStrips, isVisible: true },
          { id: "chicken-1", name: "3 Mega Strips", nameAr: "3 ميجا سترپس", price: 150, image: img.chicken3MegaStrips, isVisible: true },
          { id: "chicken-2", name: "6 Mega Strips", nameAr: "6 ميجا سترپس", price: 250, image: img.chicken6MegaStrips, isVisible: true },
          { id: "chicken-4", name: "6 Pcs Wings", nameAr: "6 وينجز", price: 120, image: img.chicken6PcsWings, isVisible: true },
          { id: "chicken-5", name: "12 Pcs Wings", nameAr: "12 وينجز", price: 200, image: img.chicken12PcsWings, isVisible: true },
        ],
      },
      {
        id: "wraps",
        name: "Wraps",
        nameAr: "راب",
        order: 6,
        isVisible: true,
        items: [
          { id: "wraps-1", name: "Chicki Roll", nameAr: "تشيكي رول", price: 150, image: img.wrapsChickiRoll, isVisible: true },
          { id: "wraps-2", name: "Golden Melt", nameAr: "جولدن ميلت", price: 180, image: img.wrapsGoldenMelt, isVisible: true },
          { id: "wraps-3", name: "Chicken Burger", nameAr: "برجر دجاج", price: 165, image: img.wrapsChickenBurger, isVisible: true },
          { id: "wraps-4", name: "Hotdog", nameAr: "هوت دوج", price: 70, image: img.wrapsHotdog, isVisible: true },
          { id: "wraps-5", name: "Kofta", nameAr: "كفتة", price: 80, image: img.wrapsKofta, isVisible: true },
          { id: "wraps-6", name: "Beef Syrian Wrap", nameAr: "راب سوري لحمة", price: 130, image: img.wrapsBeefSyrianWrap, isVisible: true },
        ],
      },
      {
        id: "pizza",
        name: "Pizza",
        nameAr: "بيتزا",
        order: 7,
        isVisible: true,
        items: [
          { id: "pizza-1", name: "Margherita", nameAr: "مارجريتا", price: 140, image: img.pizzaMargherita, isVisible: true },
          { id: "pizza-2", name: "Veggies", nameAr: "خضار", price: 160, image: img.pizzaVeggies, isVisible: true },
          { id: "pizza-3", name: "Chicken BBQ", nameAr: "دجاج باربكيو", price: 240, image: img.pizzaChickenBBQ, isVisible: true },
          { id: "pizza-4", name: "Chicken Ranch", nameAr: "دجاج رانش", price: 260, image: img.pizzaChickenRanch, isVisible: true },
          { id: "pizza-5", name: "Hotdog Pizza", nameAr: "بيتزا هوت دوج", price: 250, image: img.pizzaHotdogPizza, isVisible: true },
          { id: "pizza-6", name: "Burger Pizza", nameAr: "بيتزا برجر", price: 260, image: img.pizzaBurgerPizza, isVisible: true },
          { id: "pizza-7", name: "Kofta Pizza", nameAr: "بيتزا كفتة", price: 250, image: img.pizzaKoftaPizza, isVisible: true },
          { id: "pizza-8", name: "Chicken Buffalo Ranch", nameAr: "دجاج بافلو رانش", price: 270, image: img.pizzaChickenBuffaloRanch, isVisible: true },
        ],
      },
      {
        id: "pasta",
        name: "Pasta",
        nameAr: "باستا",
        order: 8,
        isVisible: true,
        items: [
          { id: "pasta-8", name: "Penne Chicken Alfredo", nameAr: "بيني دجاج ألفريدو", price: 200, image: img.pastaPenneChickenAlfredo, isVisible: true },
          { id: "pasta-1", name: "Penne Red Sauce", nameAr: "بيني صوص أحمر", price: 100, image: img.pastaPenneRedSauce, isVisible: true },
          { id: "pasta-2", name: "Penne Alfredo", nameAr: "بيني ألفريدو", price: 150, image: img.pastaPenneAlfredo, isVisible: true },
          { id: "pasta-3", name: "Chicken Penne Truffle", nameAr: "بيني دجاج تروفل", price: 280, image: img.pastaChickenPenneTruffle, isVisible: true },
          { id: "pasta-4", name: "Mac & Cheese", nameAr: "مكرونة بالجبنة", price: 180, image: img.pastaMacCheese, isVisible: true },
          { id: "pasta-5", name: "Creamy Pesto Fusilli", nameAr: "فوزيلي بيستو كريمي", price: 220, image: img.pastaCreamyPestoFusilli, isVisible: true },
          { id: "pasta-6", name: "Creamy Chicken Pesto Fusilli", nameAr: "فوزيلي دجاج بيستو كريمي", price: 280, image: img.pastaCreamyChickenPestoFusilli, isVisible: true },
          { id: "pasta-7", name: "Truffle Penne", nameAr: "بيني تروفل", price: 210, image: img.pastaTrufflePenne, isVisible: true },
        ],
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    nameAr: "مشروبات",
    order: 2,
    categories: [
      {
        id: "hot-drinks",
        name: "Hot Drinks",
        nameAr: "مشروبات سخنة",
        order: 1,
        isVisible: true,
        items: [
          { id: "hot-11", name: "Cappuccino", nameAr: "كابتشينو", price: 110, image: img.hotDrinksCappuccino, isVisible: true },
          { id: "hot-1", name: "Tea", nameAr: "شاي", price: 25, image: img.hotDrinksTea, isVisible: true },
          { id: "hot-2", name: "Herbs", nameAr: "أعشاب", price: 35, image: img.hotDrinksHerbs, isVisible: true },
          { id: "hot-3", name: "Turkish Coffee (Single)", nameAr: "قهوة تركي (سنجل)", price: 40, image: img.hotDrinksTurkishCoffeeSingle, isVisible: true },
          { id: "hot-4", name: "Turkish Coffee (Double)", nameAr: "قهوة تركي (دابل)", price: 60, image: img.hotDrinksTurkishCoffeeDouble, isVisible: true },
          { id: "hot-5", name: "Nescafe", nameAr: "نسكافيه", price: 80, image: img.hotDrinksNescafe, isVisible: true },
          { id: "hot-6", name: "Espresso (Single)", nameAr: "إسبريسو (سنجل)", price: 50, image: img.hotDrinksEspressoSingle, isVisible: true },
          { id: "hot-7", name: "Espresso (Double)", nameAr: "إسبريسو (دابل)", price: 70, image: img.hotDrinksEspressoDouble, isVisible: true },
          { id: "hot-8", name: "Macchiato (Single)", nameAr: "ماكياتو (سنجل)", price: 80, image: img.hotDrinksMacchiatoSingle, isVisible: true },
          { id: "hot-9", name: "Macchiato (Double)", nameAr: "ماكياتو (دابل)", price: 100, image: img.hotDrinksMacchiatoDouble, isVisible: true },
          { id: "hot-10", name: "Caramel Macchiato", nameAr: "كاراميل ماكياتو", price: 110, image: img.hotDrinksCaramelMacchiato, isVisible: true },
          { id: "hot-12", name: "Latte", nameAr: "لاتيه", price: 120, image: img.hotDrinksLatte, isVisible: true },
          { id: "hot-13", name: "Americano", nameAr: "أمريكانو", price: 80, image: img.hotDrinksAmericano, isVisible: true },
          { id: "hot-14", name: "Hot Chocolate", nameAr: "شوكولاتة سخنة", price: 110, image: img.hotDrinksHotChocolate, isVisible: true },
          { id: "hot-15", name: "Hot Spanish Latte", nameAr: "سبانش لاتيه سخن", price: 150, image: img.hotDrinksHotSpanishLatte, isVisible: true },
          { id: "hot-16", name: "French Coffee", nameAr: "قهوة فرنساوي", price: 90, image: img.hotDrinksFrenchCoffee, isVisible: true },
          { id: "hot-17", name: "Flat White", nameAr: "فلات وايت", price: 110, image: img.hotDrinksFlatWhite, isVisible: true },
          { id: "hot-18", name: "Hot Caramel Latte", nameAr: "كاراميل لاتيه سخن", price: 140, image: img.hotDrinksHotCaramelLatte, isVisible: true },
        ],
      },
      {
        id: "iced-coffee",
        name: "Iced Coffee",
        nameAr: "قهوة مثلجة",
        order: 2,
        isVisible: true,
        items: [
          { id: "iced-1", name: "Iced Americano", nameAr: "أمريكانو مثلج", price: 90, image: img.icedCoffeeIcedAmericano, isVisible: true },
          { id: "iced-2", name: "Iced Coffee", nameAr: "قهوة مثلجة", price: 120, image: img.icedCoffeeIcedCoffee, isVisible: true },
          { id: "iced-3", name: "Iced Latte", nameAr: "لاتيه مثلج", price: 130, image: img.icedCoffeeIcedLatte, isVisible: true },
          { id: "iced-4", name: "Iced Caramel Latte", nameAr: "كاراميل لاتيه مثلج", price: 135, image: img.icedCoffeeIcedCaramelLatte, isVisible: true },
          { id: "iced-5", name: "Iced Spanish Latte", nameAr: "سبانش لاتيه مثلج", price: 160, image: img.icedCoffeeIcedSpanishLatte, isVisible: true },
        ],
      },
      {
        id: "fresh-juices",
        name: "Fresh Juices",
        nameAr: "عصائر طازة",
        order: 3,
        isVisible: true,
        items: [
          { id: "juice-1", name: "Lemon", nameAr: "ليمون", price: 45, image: img.freshJuicesLemon, isVisible: true },
          { id: "juice-2", name: "Lemon Mint", nameAr: "ليمون بالنعناع", price: 60, image: img.freshJuicesLemonMint, isVisible: true },
          { id: "juice-3", name: "Watermelon", nameAr: "بطيخ", price: 60, image: img.freshJuicesWatermelon, isVisible: true },
          { id: "juice-4", name: "Pomegranate", nameAr: "رمان", price: 65, image: img.freshJuicesPomegranate, isVisible: true },
          { id: "juice-5", name: "Mango", nameAr: "مانجو", price: 75, image: img.freshJuicesMango, isVisible: true },
          { id: "juice-6", name: "Cocktail", nameAr: "كوكتيل", price: 90, image: img.freshJuicesCocktail, isVisible: true },
          { id: "juice-7", name: "Kiwi", nameAr: "كيوي", price: 120, image: img.freshJuicesKiwi, isVisible: true },
        ],
      },
      {
        id: "soft-drinks",
        name: "Soft Drinks",
        nameAr: "مشروبات غازية",
        order: 4,
        isVisible: true,
        items: [
          { id: "soft-10", name: "Red Bull", nameAr: "ريد بول", price: 110, image: img.softDrinksRedBull, isVisible: true },
          { id: "soft-1", name: "Water", nameAr: "مياه", price: 15, image: img.softDrinksWater, isVisible: true },
          { id: "soft-2", name: "Coke", nameAr: "كوكاكولا", price: 35, image: img.softDrinksCoke, isVisible: true },
          { id: "soft-3", name: "Coke Zero", nameAr: "كوكاكولا زيرو", price: 35, image: img.softDrinksCokeZero, isVisible: true },
          { id: "soft-4", name: "Sprite", nameAr: "سبرايت", price: 35, image: img.softDrinksSprite, isVisible: true },
          { id: "soft-5", name: "Sprite Zero", nameAr: "سبرايت زيرو", price: 35, image: img.softDrinksSpriteZero, isVisible: true },
          { id: "soft-6", name: "Schweppes", nameAr: "شويبس", price: 35, image: img.softDrinksSchweppes, isVisible: true },
          { id: "soft-7", name: "Fanta", nameAr: "فانتا", price: 45, image: img.softDrinksFanta, isVisible: true },
          { id: "soft-8", name: "Amstel", nameAr: "أمستل", price: 60, image: img.softDrinksAmstel, isVisible: true },
          { id: "soft-9", name: "Furry", nameAr: "فيوري", price: 110, image: img.softDrinksFurry, isVisible: true },
        ],
      },
      {
        id: "mojitos",
        name: "Mojitos",
        nameAr: "موهيتو",
        order: 5,
        isVisible: true,
        items: [
          { id: "mojito-1", name: "Mojito Classic", nameAr: "موهيتو كلاسيك", price: 100, image: img.mojitosMojitoClassic, isVisible: true },
          { id: "mojito-2", name: "Mojito Strawberry", nameAr: "موهيتو فراولة", price: 130, image: img.mojitosMojitoStrawberry, isVisible: true },
          { id: "mojito-3", name: "Mojito Pineapple", nameAr: "موهيتو أناناس", price: 130, image: img.mojitosMojitoPineapple, isVisible: true },
          { id: "mojito-4", name: "Mojito Raspberry", nameAr: "موهيتو توت", price: 135, image: img.mojitosMojitoRaspberry, isVisible: true },
          { id: "mojito-5", name: "Mojito Blueberry", nameAr: "موهيتو بلوبيري", price: 135, image: img.mojitosMojitoBlueberry, isVisible: true },
          { id: "mojito-6", name: "Mojito Passion Fruit", nameAr: "موهيتو باشون فروت", price: 150, image: img.mojitosMojitoPassionFruit, isVisible: true },
        ],
      },
      {
        id: "smoothies",
        name: "Smoothies",
        nameAr: "سموذي",
        order: 6,
        isVisible: true,
        items: [
          { id: "smoothie-1", name: "Smoothie Lemon", nameAr: "سموذي ليمون", price: 55, image: img.smoothiesSmoothieLemon, isVisible: true },
          { id: "smoothie-2", name: "Smoothie Lemon Mint", nameAr: "سموذي ليمون نعناع", price: 70, image: img.smoothiesSmoothieLemonMint, isVisible: true },
          { id: "smoothie-3", name: "Smoothie Watermelon", nameAr: "سموذي بطيخ", price: 75, image: img.smoothiesSmoothieWatermelon, isVisible: true },
          { id: "smoothie-4", name: "Smoothie Pomegranate", nameAr: "سموذي رمان", price: 80, image: img.smoothiesSmoothiePomegranate, isVisible: true },
          { id: "smoothie-5", name: "Smoothie Mango", nameAr: "سموذي مانجو", price: 85, image: img.smoothiesSmoothieMango, isVisible: true },
          { id: "smoothie-6", name: "Smoothie Cocktail", nameAr: "سموذي كوكتيل", price: 100, image: img.smoothiesSmoothieCocktail, isVisible: true },
          { id: "smoothie-7", name: "Smoothie Passion Fruit", nameAr: "سموذي باشون فروت", price: 150, image: img.smoothiesSmoothiePassionFruit, isVisible: true },
        ],
      },
      {
        id: "milkshakes",
        name: "Milkshakes",
        nameAr: "ميلك شيك",
        order: 7,
        isVisible: true,
        items: [
          { id: "milkshake-1", name: "Vanilla", nameAr: "فانيليا", price: 100, image: img.milkshakesVanilla, isVisible: true },
          { id: "milkshake-2", name: "Chocolate", nameAr: "شوكولاتة", price: 100, image: img.milkshakesChocolate, isVisible: true },
          { id: "milkshake-3", name: "Oreo", nameAr: "أوريو", price: 130, image: img.milkshakesOreo, isVisible: true },
          { id: "milkshake-4", name: "Lotus", nameAr: "لوتس", price: 130, image: img.milkshakesLotus, isVisible: true },
          { id: "milkshake-5", name: "Strawberry", nameAr: "فراولة", price: 130, image: img.milkshakesStrawberry, isVisible: true },
          { id: "milkshake-6", name: "Pineapple", nameAr: "أناناس", price: 135, image: img.milkshakesPineapple, isVisible: true },
          { id: "milkshake-7", name: "Blueberry", nameAr: "بلوبيري", price: 135, image: img.milkshakesBlueberry, isVisible: true },
          { id: "milkshake-8", name: "Mango", nameAr: "مانجو", price: 140, image: img.milkshakesMango, isVisible: true },
          { id: "milkshake-9", name: "Passion Fruit", nameAr: "باشون فروت", price: 150, image: img.milkshakesPassionFruit, isVisible: true },
        ],
      },
    ],
  },
  {
    id: "dessert",
    name: "Dessert",
    nameAr: "حلويات",
    order: 3,
    categories: [
      {
        id: "dessert",
        name: "Dessert",
        nameAr: "حلويات",
        order: 1,
        isVisible: true,
        items: [
          { id: "dessert-1", name: "Marshmallow", nameAr: "مارشميلو", price: 25, image: img.dessertMarshmallow, isVisible: true },
          { id: "dessert-2", name: "Freska", nameAr: "فريسكا", price: 40, image: img.dessertFreska, isVisible: true },
          { id: "dessert-3", name: "Single Scoop Ice Cream", nameAr: "آيس كريم سكوب واحد", price: 50, image: img.dessertSingleScoopIceCream, isVisible: true },
          { id: "dessert-4", name: "Double Scoop Ice Cream", nameAr: "آيس كريم سكوبين", price: 70, image: img.dessertDoubleScoopIceCream, isVisible: true },
          { id: "dessert-5", name: "Waffle", nameAr: "وافل", price: 120, image: img.dessertWaffle, isVisible: true },
          { id: "dessert-6", name: "Mini Pancake", nameAr: "ميني بان كيك", price: 120, image: img.dessertMiniPancake, isVisible: true },
          { id: "dessert-7", name: "Chocolate Jar", nameAr: "جار شوكولاتة", price: 120, image: img.dessertChocolateJar, isVisible: true },
          { id: "dessert-8", name: "Kinder Jar", nameAr: "جار كيندر", price: 140, image: img.dessertKinderJar, isVisible: true },
          { id: "dessert-9", name: "Tiramisu", nameAr: "تيراميسو", price: 150, image: img.dessertTiramisu, isVisible: true },
        ],
      },
    ],
  },
];

export const hotspotContact: ContactInfo = {
  phone: "01229545753",
};