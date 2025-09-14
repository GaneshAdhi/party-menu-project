import "./index.css";

import { useState } from "react";

import DishTypeButtons from "../DishTypeButtons";

import DishItems from "../DishItems";

const dishSampleData = [
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description:
      "A creamy and rich curry made with paneer (Indian cottage cheese) in a buttery tomato-based sauce.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "पनीर मक्खन मसाला",
    nameBn: "পনির মাখন মাসালা",
    id: 1,
    name: "Paneer Butter Masala",
    ingredients: [
      {
        name: "Paneer",
        quantity: "250g",
      },
      {
        name: "Tomato",
        quantity: "4 large",
      },
      {
        name: "Butter",
        quantity: "3 tbsp",
      },
      {
        name: "Fresh Cream",
        quantity: "1/4 cup",
      },
      {
        name: "Cashews",
        quantity: "15",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "NONVEG",
    description:
      "A globally famous dish of grilled chicken simmered in a rich, creamy tomato and butter sauce.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757752895/Frame_19479_5_u1zyig.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "बटर चिकन",
    nameBn: "বাটার চিকেন",
    id: 2,
    name: "Butter Chicken",
    ingredients: [
      {
        name: "Chicken",
        quantity: "500g",
      },
      {
        name: "Tomato Puree",
        quantity: "1 cup",
      },
      {
        name: "Butter",
        quantity: "4 tbsp",
      },
      {
        name: "Cream",
        quantity: "1/2 cup",
      },
      {
        name: "Garam Masala",
        quantity: "1 tsp",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "STARTER",
    type: "VEG",
    description:
      "Cubes of paneer marinated in yogurt and spices, then grilled in a tandoor for a smoky flavour.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "KEBAB",
    forChefit: true,
    forParty: true,
    nameHi: "पनीर टिक्का",
    nameBn: "পনির টিক্কা",
    id: 3,
    name: "Paneer Tikka",
    ingredients: [
      {
        name: "Paneer",
        quantity: "250g",
      },
      {
        name: "Yogurt",
        quantity: "1 cup",
      },
      {
        name: "Bell Peppers",
        quantity: "1 large",
      },
      {
        name: "Onion",
        quantity: "1 large",
      },
      {
        name: "Tandoori Masala",
        quantity: "2 tbsp",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "STARTER",
    type: "NONVEG",
    description:
      "Boneless chicken pieces marinated in a spicy yogurt mixture and roasted to perfection in a tandoor.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757752895/Frame_19479_5_u1zyig.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "KEBAB",
    forChefit: true,
    forParty: true,
    nameHi: "चिकन टिक्का",
    nameBn: "চিকেন টিক্কা",
    id: 4,
    name: "Chicken Tikka",
    ingredients: [
      {
        name: "Boneless Chicken",
        quantity: "500g",
      },
      {
        name: "Yogurt",
        quantity: "1 cup",
      },
      {
        name: "Ginger-Garlic Paste",
        quantity: "2 tbsp",
      },
      {
        name: "Lemon Juice",
        quantity: "1 tbsp",
      },
      {
        name: "Red Chilli Powder",
        quantity: "1 tsp",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description:
      "A classic Punjabi dish made with whole black lentils, red kidney beans, butter, and cream.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "दाल मखनी",
    nameBn: "ডাল মাখনি",
    id: 5,
    name: "Dal Makhani",
    ingredients: [
      {
        name: "Whole Black Lentils (Urad)",
        quantity: "1 cup",
      },
      {
        name: "Red Kidney Beans (Rajma)",
        quantity: "1/4 cup",
      },
      {
        name: "Butter",
        quantity: "3 tbsp",
      },
      {
        name: "Cream",
        quantity: "1/4 cup",
      },
      {
        name: "Onion",
        quantity: "1 medium",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "SIDES",
    type: "VEG",
    description:
      "A popular leavened, oven-baked flatbread, often brushed with butter or ghee.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "BREAD",
    forChefit: true,
    forParty: true,
    nameHi: "नान",
    nameBn: "নান",
    id: 6,
    name: "Naan",
    ingredients: [
      {
        name: "All-Purpose Flour (Maida)",
        quantity: "2 cups",
      },
      {
        name: "Yogurt",
        quantity: "1/2 cup",
      },
      {
        name: "Yeast",
        quantity: "1 tsp",
      },
      {
        name: "Sugar",
        quantity: "1 tsp",
      },
      {
        name: "Milk",
        quantity: "1/4 cup",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "DESSERT",
    type: "VEG",
    description:
      "Soft, melt-in-your-mouth fried dumplings made of thickened milk and soaked in a sweet sugar syrup.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    nameHi: "गुलाब जामुन",
    nameBn: "গোলাপ জামুন",
    id: 7,
    name: "Gulab Jamun",
    ingredients: [
      {
        name: "Khoya (Milk Solids)",
        quantity: "200g",
      },
      {
        name: "All-Purpose Flour",
        quantity: "2 tbsp",
      },
      {
        name: "Sugar",
        quantity: "2 cups",
      },
      {
        name: "Cardamom Powder",
        quantity: "1/2 tsp",
      },
      {
        name: "Ghee/Oil for frying",
        quantity: "2 cups",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description:
      "A flavorful and tangy curry made with chickpeas, onions, tomatoes, and a blend of Indian spices.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "छोले मसाला",
    nameBn: "ছোলে মাসালা",
    id: 8,
    name: "Chole Masala",
    ingredients: [
      {
        name: "Chickpeas (Chole)",
        quantity: "1 cup",
      },
      {
        name: "Onion",
        quantity: "2 medium",
      },
      {
        name: "Tomato",
        quantity: "3 medium",
      },
      {
        name: "Ginger-Garlic Paste",
        quantity: "1 tbsp",
      },
      {
        name: "Chole Masala Powder",
        quantity: "2 tbsp",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "NONVEG",
    description:
      "An aromatic Kashmiri curry made with mutton or lamb, braised in a gravy flavored with aromatic spices and yogurt.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757752895/Frame_19479_5_u1zyig.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "रोगन जोश",
    nameBn: "রোগান জোশ",
    id: 9,
    name: "Rogan Josh",
    ingredients: [
      {
        name: "Mutton/Lamb",
        quantity: "500g",
      },
      {
        name: "Yogurt",
        quantity: "1 cup",
      },
      {
        name: "Onion",
        quantity: "2 large",
      },
      {
        name: "Kashmiri Red Chilli Powder",
        quantity: "2 tbsp",
      },
      {
        name: "Fennel Powder",
        quantity: "1 tsp",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "STARTER",
    type: "VEG",
    description:
      "A popular street food snack, a crispy fried pastry filled with spiced potatoes and peas.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "SNACK",
    forChefit: true,
    forParty: true,
    nameHi: "समोसा",
    nameBn: "সিঙ্গাড়া",
    id: 10,
    name: "Samosa",
    ingredients: [
      {
        name: "All-Purpose Flour",
        quantity: "1 cup",
      },
      {
        name: "Potatoes",
        quantity: "3 medium",
      },
      {
        name: "Green Peas",
        quantity: "1/2 cup",
      },
      {
        name: "Cumin Seeds",
        quantity: "1 tsp",
      },
      {
        name: "Oil for frying",
        quantity: "as needed",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "SIDES",
    type: "VEG",
    description:
      "Fragrant basmati rice cooked with cumin seeds and whole spices.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "RICE",
    forChefit: true,
    forParty: true,
    nameHi: "जीरा चावल",
    nameBn: "জিরা রাইস",
    id: 11,
    name: "Jeera Rice",
    ingredients: [
      {
        name: "Basmati Rice",
        quantity: "1 cup",
      },
      {
        name: "Cumin Seeds (Jeera)",
        quantity: "2 tsp",
      },
      {
        name: "Ghee",
        quantity: "2 tbsp",
      },
      {
        name: "Bay Leaf",
        quantity: "1",
      },
      {
        name: "Water",
        quantity: "2 cups",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description:
      "A nutritious and popular curry where paneer is cooked in a thick puree of spinach and seasoned with spices.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "पालक पनीर",
    nameBn: "পালক পনির",
    id: 12,
    name: "Palak Paneer",
    ingredients: [
      {
        name: "Spinach (Palak)",
        quantity: "1 large bunch",
      },
      {
        name: "Paneer",
        quantity: "200g",
      },
      {
        name: "Onion",
        quantity: "1 medium",
      },
      {
        name: "Garlic",
        quantity: "4 cloves",
      },
      {
        name: "Cream",
        quantity: "2 tbsp",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "STARTER",
    type: "NONVEG",
    description:
      "Skewered minced mutton mixed with aromatic spices, grilled over charcoal for a smoky flavour.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757752895/Frame_19479_5_u1zyig.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "KEBAB",
    forChefit: true,
    forParty: true,
    nameHi: "सीख कबाब",
    nameBn: "সীখ কাবাব",
    id: 13,
    name: "Seekh Kebab",
    ingredients: [
      {
        name: "Minced Mutton (Keema)",
        quantity: "500g",
      },
      {
        name: "Onion",
        quantity: "1 large",
      },
      {
        name: "Green Chillies",
        quantity: "2",
      },
      {
        name: "Ginger-Garlic Paste",
        quantity: "1 tbsp",
      },
      {
        name: "Garam Masala",
        quantity: "1 tsp",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "DESSERT",
    type: "VEG",
    description:
      "A slow-cooked carrot-based sweet pudding made with milk, sugar, ghee, and nuts.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    nameHi: "गाजर का हलवा",
    nameBn: "গাজরের হালুয়া",
    id: 14,
    name: "Gajar ka Halwa",
    ingredients: [
      {
        name: "Carrots",
        quantity: "1 kg",
      },
      {
        name: "Full Cream Milk",
        quantity: "1 litre",
      },
      {
        name: "Sugar",
        quantity: "1 cup",
      },
      {
        name: "Ghee",
        quantity: "4 tbsp",
      },
      {
        name: "Mixed Nuts",
        quantity: "1/2 cup",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description:
      "Fried potato and paneer dumplings (kofta) cooked in a rich and creamy tomato and cashew gravy.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "मलाई कोफ्ता",
    nameBn: "মালাই কোফতা",
    id: 15,
    name: "Malai Kofta",
    ingredients: [
      {
        name: "Potatoes",
        quantity: "3 medium",
      },
      {
        name: "Paneer",
        quantity: "100g",
      },
      {
        name: "Cashews",
        quantity: "1/4 cup",
      },
      {
        name: "Cream",
        quantity: "1/2 cup",
      },
      {
        name: "Tomato",
        quantity: "2 large",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "STARTER",
    type: "NONVEG",
    description:
      "A classic appetizer where whole chicken is marinated in yogurt and spices, then roasted in a tandoor.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757752895/Frame_19479_5_u1zyig.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "KEBAB",
    forChefit: true,
    forParty: true,
    nameHi: "तंदूरी चिकन",
    nameBn: "তন্দুরি চিকেন",
    id: 16,
    name: "Tandoori Chicken",
    ingredients: [
      {
        name: "Whole Chicken",
        quantity: "1 kg",
      },
      {
        name: "Yogurt",
        quantity: "1 cup",
      },
      {
        name: "Tandoori Masala",
        quantity: "3 tbsp",
      },
      {
        name: "Lemon Juice",
        quantity: "2 tbsp",
      },
      {
        name: "Ginger-Garlic Paste",
        quantity: "2 tbsp",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description:
      "A simple yet delicious dry curry made with potatoes (aloo) and cauliflower (gobi) sautéed with spices.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "DRY CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "आलू गोभी",
    nameBn: "আলু গোবি",
    id: 17,
    name: "Aloo Gobi",
    ingredients: [
      {
        name: "Cauliflower (Gobi)",
        quantity: "1 medium",
      },
      {
        name: "Potatoes (Aloo)",
        quantity: "3 medium",
      },
      {
        name: "Turmeric Powder",
        quantity: "1 tsp",
      },
      {
        name: "Cumin Seeds",
        quantity: "1 tsp",
      },
      {
        name: "Onion",
        quantity: "1",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "NONVEG",
    description:
      "A rich and mild curry where chicken is simmered in a creamy, fragrant sauce made with yogurt, nuts, and spices.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757752895/Frame_19479_5_u1zyig.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "चिकन कोरमा",
    nameBn: "চিকেন কোরমা",
    id: 18,
    name: "Chicken Korma",
    ingredients: [
      {
        name: "Chicken",
        quantity: "500g",
      },
      {
        name: "Yogurt",
        quantity: "1 cup",
      },
      {
        name: "Onion",
        quantity: "2 large",
      },
      {
        name: "Almond/Cashew Paste",
        quantity: "1/4 cup",
      },
      {
        name: "Garam Masala",
        quantity: "1 tsp",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "SIDES",
    type: "VEG",
    description:
      "A refreshing yogurt-based side dish with tiny fried gram flour balls (boondi), seasoned with light spices.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CONDIMENT",
    forChefit: true,
    forParty: true,
    nameHi: "बूंदी रायता",
    nameBn: "বুন্দি রায়তা",
    id: 19,
    name: "Boondi Raita",
    ingredients: [
      {
        name: "Yogurt (Dahi)",
        quantity: "2 cups",
      },
      {
        name: "Boondi",
        quantity: "1 cup",
      },
      {
        name: "Roasted Cumin Powder",
        quantity: "1 tsp",
      },
      {
        name: "Black Salt (Kala Namak)",
        quantity: "1/2 tsp",
      },
      {
        name: "Mint Leaves",
        quantity: "for garnish",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "DESSERT",
    type: "VEG",
    description:
      "Crispy, spiral-shaped deep-fried batter soaked in a fragrant sugar syrup, a popular festive sweet.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    nameHi: "जलेबी",
    nameBn: "জিলাপি",
    id: 20,
    name: "Jalebi",
    ingredients: [
      {
        name: "All-Purpose Flour (Maida)",
        quantity: "1 cup",
      },
      {
        name: "Yogurt",
        quantity: "2 tbsp",
      },
      {
        name: "Sugar",
        quantity: "2 cups",
      },
      {
        name: "Saffron",
        quantity: "a few strands",
      },
      {
        name: "Ghee/Oil for frying",
        quantity: "as needed",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description:
      "A smoky and flavorful dish made from roasted and mashed eggplant, cooked with onions, tomatoes, and spices.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "बैंगन का भरता",
    nameBn: "বেগুন ভর্তা",
    id: 21,
    name: "Baingan Bharta",
    ingredients: [
      {
        name: "Large Eggplant (Baingan)",
        quantity: "1",
      },
      {
        name: "Onion",
        quantity: "2 medium",
      },
      {
        name: "Tomato",
        quantity: "2 medium",
      },
      {
        name: "Green Chillies",
        quantity: "2",
      },
      {
        name: "Garlic",
        quantity: "5 cloves",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "SIDES",
    type: "VEG",
    description:
      "Aromatic basmati rice cooked with a medley of mixed vegetables and fragrant spices.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "RICE",
    forChefit: true,
    forParty: true,
    nameHi: "वेज पुलाव",
    nameBn: "ভেজ পোলাও",
    id: 22,
    name: "Vegetable Pulao",
    ingredients: [
      {
        name: "Basmati Rice",
        quantity: "1 cup",
      },
      {
        name: "Mixed Vegetables",
        quantity: "1.5 cups",
      },
      {
        name: "Onion",
        quantity: "1 medium",
      },
      {
        name: "Ghee",
        quantity: "2 tbsp",
      },
      {
        name: "Whole Spices",
        quantity: "1 tbsp",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "NONVEG",
    description:
      "A hearty dish of minced mutton (keema) and green peas (matar) simmered in a flavourful, spicy gravy.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757752895/Frame_19479_5_u1zyig.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "कीमा मटर",
    nameBn: "কিমা মটর",
    id: 23,
    name: "Keema Matar",
    ingredients: [
      {
        name: "Minced Mutton (Keema)",
        quantity: "400g",
      },
      {
        name: "Green Peas (Matar)",
        quantity: "1 cup",
      },
      {
        name: "Onion",
        quantity: "2 large",
      },
      {
        name: "Tomato",
        quantity: "2 medium",
      },
      {
        name: "Ginger-Garlic Paste",
        quantity: "1.5 tbsp",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description:
      "Red kidney beans cooked in a thick, spicy onion-tomato gravy. A staple comfort food.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "राजमा मसाला",
    nameBn: "রাজমা মাসালা",
    id: 24,
    name: "Rajma Masala",
    ingredients: [
      {
        name: "Red Kidney Beans (Rajma)",
        quantity: "1 cup",
      },
      {
        name: "Onion",
        quantity: "2 medium",
      },
      {
        name: "Tomato Puree",
        quantity: "1 cup",
      },
      {
        name: "Ginger-Garlic Paste",
        quantity: "1 tbsp",
      },
      {
        name: "Rajma Masala Powder",
        quantity: "2 tsp",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "SIDES",
    type: "VEG",
    description:
      "A traditional North Indian unleavened whole wheat flatbread baked in a tandoor.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "BREAD",
    forChefit: true,
    forParty: true,
    nameHi: "तंदूरी रोटी",
    nameBn: "তন্দুরি রুটি",
    id: 25,
    name: "Tandoori Roti",
    ingredients: [
      {
        name: "Whole Wheat Flour (Atta)",
        quantity: "2 cups",
      },
      {
        name: "Yogurt",
        quantity: "2 tbsp",
      },
      {
        name: "Baking Powder",
        quantity: "1/2 tsp",
      },
      {
        name: "Salt",
        quantity: "to taste",
      },
      {
        name: "Warm Water",
        quantity: "as needed",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "STARTER",
    type: "VEG",
    description:
      "Spiced potato patties, shallow-fried until golden brown and crisp. Often served with chutneys.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "SNACK",
    forChefit: true,
    forParty: true,
    nameHi: "आलू टिक्की",
    nameBn: "আলু টিক্কি",
    id: 26,
    name: "Aloo Tikki",
    ingredients: [
      {
        name: "Potatoes",
        quantity: "4 large",
      },
      {
        name: "Breadcrumbs",
        quantity: "1/2 cup",
      },
      {
        name: "Green Chillies",
        quantity: "2",
      },
      {
        name: "Coriander Leaves",
        quantity: "2 tbsp",
      },
      {
        name: "Chaat Masala",
        quantity: "1 tsp",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "STARTER",
    type: "VEG",
    description:
      "Soft lentil fritters soaked in creamy yogurt, topped with sweet and spicy chutneys.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CHAAT",
    forChefit: true,
    forParty: true,
    nameHi: "दही भल्ला",
    nameBn: "দই বড়া",
    id: 27,
    name: "Dahi Bhalla",
    ingredients: [
      {
        name: "Urad Dal (Split Black Gram)",
        quantity: "1 cup",
      },
      {
        name: "Yogurt",
        quantity: "3 cups",
      },
      {
        name: "Tamarind Chutney",
        quantity: "1/4 cup",
      },
      {
        name: "Mint Chutney",
        quantity: "1/4 cup",
      },
      {
        name: "Roasted Cumin Powder",
        quantity: "1 tsp",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "NONVEG",
    description:
      "A fiery Rajasthani mutton curry known for its vibrant red color, derived from Mathania chillies.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757752895/Frame_19479_5_u1zyig.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "लाल मास",
    nameBn: "লাল মাংস",
    id: 28,
    name: "Laal Maas",
    ingredients: [
      {
        name: "Mutton",
        quantity: "500g",
      },
      {
        name: "Dry Red Chillies",
        quantity: "10-12",
      },
      {
        name: "Yogurt",
        quantity: "1 cup",
      },
      {
        name: "Garlic",
        quantity: "10 cloves",
      },
      {
        name: "Mustard Oil",
        quantity: "1/2 cup",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "STARTER",
    type: "VEG",
    description:
      "Nutritious and flavorful kebabs made from a blend of spinach, peas, potatoes, and spices.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757747204/Frame_19479_4_thrkx3.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "KEBAB",
    forChefit: true,
    forParty: true,
    nameHi: "हरा भरा कबाब",
    nameBn: "হরা ভরা কাবাব",
    id: 29,
    name: "Hara Bhara Kebab",
    ingredients: [
      {
        name: "Spinach",
        quantity: "1 bunch",
      },
      {
        name: "Green Peas",
        quantity: "1 cup",
      },
      {
        name: "Potatoes",
        quantity: "2 medium",
      },
      {
        name: "Ginger",
        quantity: "1 inch piece",
      },
      {
        name: "Breadcrumbs",
        quantity: "1/2 cup",
      },
    ],
  },
  {
    categoryId: 1,
    mealType: "STARTER",
    type: "NONVEG",
    description:
      "A popular Amritsari street food, these are crispy, batter-fried fish fillets seasoned with spices.",
    image:
      "https://res.cloudinary.com/da5t5yb4n/image/upload/v1757752895/Frame_19479_5_u1zyig.png",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "FRY",
    forChefit: true,
    forParty: true,
    nameHi: "अमृतसरी मछली",
    nameBn: "অমৃতসরী মাছ",
    id: 30,
    name: "Amritsari Fish",
    ingredients: [
      {
        name: "Boneless Fish",
        quantity: "500g",
      },
      {
        name: "Gram Flour (Besan)",
        quantity: "1 cup",
      },
      {
        name: "Carom Seeds (Ajwain)",
        quantity: "1 tsp",
      },
      {
        name: "Ginger-Garlic Paste",
        quantity: "1 tbsp",
      },
      {
        name: "Lemon Juice",
        quantity: "2 tbsp",
      },
    ],
  },
];

const dishTypeButtonData = [
  { id: 1, buttonText: "Starter", count: 0 },
  { id: 2, buttonText: "Main Course", count: 0 },
  { id: 3, buttonText: "Desert", count: 0 },
  { id: 4, buttonText: "Sides", count: 0 },
];
const Home = () => {
  const [dataDishList, setListData] = useState(dishSampleData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectList, setSelectList] = useState([]);

  return (
    <div className="home-container">
      <div className="search-container">
        <img
          className="search-container-back-btn-logo"
          src="https://res.cloudinary.com/da5t5yb4n/image/upload/v1757676169/back%20btns/Path_455_rlphow.png"
          alt="Back Button"
        />
        <input
          type="text"
          className="search-container-input"
          placeholder="Search dish for your party......"
        />
        <button className="search-container-btn">
          <img
            className="search-container-icon-glass-logo"
            alt="Search"
            src="https://res.cloudinary.com/da5t5yb4n/image/upload/v1757679096/back%20btns/Group_1000007483_ncniyt.png"
          />
        </button>
      </div>
      <ul className="dish-type-buttons-list">
        {dishTypeButtonData.map((eachButton) => (
          <DishTypeButtons key={eachButton.id} detail={eachButton} />
        ))}
      </ul>
      <div className="main-course-input-card">
        <h1 className="main-course-title">Main Courses Selected (0)</h1>
        <div className="input-cards">
          <div className="input-card">
            <input id="vegBoxId" type="checkbox" className="input-veg" />
            <label htmlFor="vegBoxId" className="veg-checkbox-label"></label>
          </div>
          <div className="input-card">
            <input
              id="noneVegBoxId"
              type="checkbox"
              className="input-non-veg"
            />
            <label
              htmlFor="noneVegBoxId"
              className="non-veg-checkbox-label"
            ></label>
          </div>
        </div>
      </div>
      <div className="north-title-collapse-card">
        <h1 className="north-food-title">North Indian</h1>
        <button className="button-collapse" type="button">
          <img
            className="collapse-icon"
            src="https://res.cloudinary.com/da5t5yb4n/image/upload/v1757753733/Path_43058_kea4ss.png"
            alt="collapseBtn"
          />
        </button>
      </div>
      <ul className="dish-list-container">
        {dataDishList.map((eachDish) => (
          <DishItems
            allData={dataDishList}
            handleAllDish={setListData}
            selectData={selectList}
            key={eachDish.id}
            handleSelectDish={setSelectList}
            dishDetail={eachDish}
          />
        ))}
      </ul>
      <div className="footer-card">
        <div className="total-dish-card">
          <h1 className="total-dish-text">
            Total Dish Selected <span className="total-num-span">0</span>
          </h1>
          <img
            alt="contine Button"
            src="https://res.cloudinary.com/da5t5yb4n/image/upload/v1757817666/Path_43058_1_hoplov.png"
            className="total-btn-icon"
          />
        </div>
        <div className="continue-btn-card">
          <button className="continue-btn" type="button">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
