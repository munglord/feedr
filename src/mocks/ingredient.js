export const getMockIngredients = () => ({
  data: {
    results: [
      { id: 18350, name: "hamburger bun", image: "hamburger-bun.jpg" },
      {
        id: 99059,
        name: "gluten free hamburger bun",
        image: "hamburger-bun.jpg",
      },
      {
        id: 18351,
        name: "whole wheat hamburger bun",
        image: "whole-wheat-hamburger-buns.jpg",
      },
      {
        id: 10018350,
        name: "sesame seed burger bun",
        image: "hamburger-bun.jpg",
      },
    ],
    offset: 0,
    number: 10,
    totalResults: 4,
  },
});

export const getMockIngredient = () => ({
  data: {
    id: 18350,
    original: "hamburger rolls",
    originalName: "hamburger rolls",
    name: "hamburger rolls",
    amount: 100.0,
    unit: "grams",
    unitShort: "g",
    unitLong: "grams",
    possibleUnits: ["package", "piece", "g", "roll", "ounce", "oz", "serving"],
    estimatedCost: { value: 107.14, unit: "US Cents" },
    consistency: "solid",
    shoppingListUnits: ["pieces"],
    aisle: "Bakery/Bread",
    image: "hamburger-bun.jpg",
    meta: [],
    nutrition: {
      nutrients: [
        {
          name: "Potassium",
          amount: 122.0,
          unit: "mg",
          percentOfDailyNeeds: 3.49,
        },
        {
          name: "Folic Acid",
          amount: 53.0,
          unit: "µg",
          percentOfDailyNeeds: 0.0,
        },
        { name: "Copper", amount: 0.11, unit: "mg", percentOfDailyNeeds: 5.45 },
        { name: "Zinc", amount: 0.73, unit: "mg", percentOfDailyNeeds: 4.87 },
        {
          name: "Vitamin C",
          amount: 1.3,
          unit: "mg",
          percentOfDailyNeeds: 1.58,
        },
        {
          name: "Mono Unsaturated Fat",
          amount: 0.75,
          unit: "g",
          percentOfDailyNeeds: 0.0,
        },
        { name: "Folate", amount: 94.0, unit: "µg", percentOfDailyNeeds: 23.5 },
        {
          name: "Vitamin B6",
          amount: 0.06,
          unit: "mg",
          percentOfDailyNeeds: 3.15,
        },
        { name: "Fat", amount: 3.91, unit: "g", percentOfDailyNeeds: 6.02 },
        {
          name: "Protein",
          amount: 9.77,
          unit: "g",
          percentOfDailyNeeds: 19.54,
        },
        {
          name: "Calories",
          amount: 279.0,
          unit: "kcal",
          percentOfDailyNeeds: 13.95,
        },
        { name: "Iron", amount: 3.43, unit: "mg", percentOfDailyNeeds: 19.06 },
        {
          name: "Vitamin E",
          amount: 0.27,
          unit: "mg",
          percentOfDailyNeeds: 1.8,
        },
        {
          name: "Phosphorus",
          amount: 101.0,
          unit: "mg",
          percentOfDailyNeeds: 10.1,
        },
        {
          name: "Poly Unsaturated Fat",
          amount: 1.78,
          unit: "g",
          percentOfDailyNeeds: 0.0,
        },
        {
          name: "Saturated Fat",
          amount: 0.84,
          unit: "g",
          percentOfDailyNeeds: 5.26,
        },
        {
          name: "Cholesterol",
          amount: 0.0,
          unit: "mg",
          percentOfDailyNeeds: 0.0,
        },
        {
          name: "Vitamin D",
          amount: 0.0,
          unit: "µg",
          percentOfDailyNeeds: 0.0,
        },
        { name: "Lycopene", amount: 0.0, unit: "µg", percentOfDailyNeeds: 0.0 },
        {
          name: "Vitamin K",
          amount: 4.8,
          unit: "µg",
          percentOfDailyNeeds: 4.57,
        },
        {
          name: "Vitamin B1",
          amount: 0.54,
          unit: "mg",
          percentOfDailyNeeds: 36.2,
        },
        {
          name: "Vitamin B3",
          amount: 4.18,
          unit: "mg",
          percentOfDailyNeeds: 20.9,
        },
        {
          name: "Calcium",
          amount: 144.0,
          unit: "mg",
          percentOfDailyNeeds: 14.4,
        },
        {
          name: "Selenium",
          amount: 27.2,
          unit: "µg",
          percentOfDailyNeeds: 38.86,
        },
        { name: "Alcohol", amount: 0.0, unit: "g", percentOfDailyNeeds: 0.0 },
        {
          name: "Net Carbohydrates",
          amount: 48.3,
          unit: "g",
          percentOfDailyNeeds: 17.56,
        },
        { name: "Caffeine", amount: 0.0, unit: "mg", percentOfDailyNeeds: 0.0 },
        { name: "Fiber", amount: 1.8, unit: "g", percentOfDailyNeeds: 7.2 },
        {
          name: "Carbohydrates",
          amount: 50.1,
          unit: "g",
          percentOfDailyNeeds: 16.7,
        },
        {
          name: "Magnesium",
          amount: 23.0,
          unit: "mg",
          percentOfDailyNeeds: 5.75,
        },
        {
          name: "Sodium",
          amount: 494.0,
          unit: "mg",
          percentOfDailyNeeds: 21.48,
        },
        {
          name: "Vitamin A",
          amount: 1.0,
          unit: "IU",
          percentOfDailyNeeds: 0.02,
        },
        {
          name: "Manganese",
          amount: 0.55,
          unit: "mg",
          percentOfDailyNeeds: 27.65,
        },
        { name: "Sugar", amount: 7.28, unit: "g", percentOfDailyNeeds: 8.09 },
        {
          name: "Vitamin B12",
          amount: 0.2,
          unit: "µg",
          percentOfDailyNeeds: 3.33,
        },
        {
          name: "Vitamin B2",
          amount: 0.3,
          unit: "mg",
          percentOfDailyNeeds: 17.47,
        },
        { name: "Choline", amount: 14.6, unit: "mg", percentOfDailyNeeds: 0.0 },
      ],
      properties: [
        { name: "Glycemic Index", amount: 62.0, unit: "" },
        { name: "Glycemic Load", amount: 29.95, unit: "" },
        { name: "Nutrition Score", amount: 10.841304347826087, unit: "%" },
      ],
      flavonoids: [
        { name: "Cyanidin", amount: 0.0, unit: "" },
        { name: "Petunidin", amount: 0.0, unit: "" },
        { name: "Delphinidin", amount: 0.0, unit: "" },
        { name: "Malvidin", amount: 0.0, unit: "" },
        { name: "Pelargonidin", amount: 0.0, unit: "" },
        { name: "Peonidin", amount: 0.0, unit: "" },
        { name: "Catechin", amount: 0.0, unit: "" },
        { name: "Epigallocatechin", amount: 0.0, unit: "" },
        { name: "Epicatechin", amount: 0.0, unit: "" },
        { name: "Epicatechin 3-gallate", amount: 0.0, unit: "" },
        { name: "Epigallocatechin 3-gallate", amount: 0.0, unit: "" },
        { name: "Theaflavin", amount: 0.0, unit: "" },
        { name: "Thearubigins", amount: 0.0, unit: "" },
        { name: "Eriodictyol", amount: 0.0, unit: "" },
        { name: "Hesperetin", amount: 0.0, unit: "" },
        { name: "Naringenin", amount: 0.0, unit: "" },
        { name: "Apigenin", amount: 0.0, unit: "" },
        { name: "Luteolin", amount: 0.0, unit: "" },
        { name: "Isorhamnetin", amount: 0.0, unit: "" },
        { name: "Kaempferol", amount: 0.0, unit: "" },
        { name: "Myricetin", amount: 0.0, unit: "" },
        { name: "Quercetin", amount: 0.0, unit: "" },
        { name: "Theaflavin-3,3'-digallate", amount: 0.0, unit: "" },
        { name: "Theaflavin-3'-gallate", amount: 0.0, unit: "" },
        { name: "Theaflavin-3-gallate", amount: 0.0, unit: "" },
        { name: "Gallocatechin", amount: 0.0, unit: "" },
      ],
      caloricBreakdown: {
        percentProtein: 14.23,
        percentFat: 12.81,
        percentCarbs: 72.96,
      },
      weightPerServing: { amount: 100, unit: "g" },
    },
    categoryPath: ["sandwich bun", "roll", "bread"],
  },
});
