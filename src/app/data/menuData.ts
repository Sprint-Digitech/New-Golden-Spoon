export interface MenuItem {
  name: string;
  price: number;
  halfPrice?: number;
  sizes?: { size: string; price: number }[];
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
  hasSizeOptions?: boolean;
  hasHalfFull?: boolean;
}

export const menuData: MenuCategory[] = [
  {
    id: "soups",
    name: "Hotspot Soups",
    icon: "🥣",
    items: [
      { name: "Tomato Soup", price: 50, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80" },
      { name: "Hot N Sour Soup", price: 60, image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=400&q=80" },
      { name: "Manchow Soup", price: 60, image: "https://images.unsplash.com/photo-1604908815329-68690efe9e33?w=400&q=80" },
      { name: "Talumein Soup", price: 60, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80" },
      { name: "Veg Sweet Corn Soup", price: 50, image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80" },
    ],
  },
  {
    id: "pasta",
    name: "Italian Pasta",
    icon: "🍝",
    items: [
      { name: "Red Sauce Pasta", price: 100, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80" },
      { name: "White Sauce Pasta", price: 120, image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80" },
      { name: "Mushroom Onion Pasta", price: 120, image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80" },
      { name: "Pink Sauce Pasta", price: 130, image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=400&q=80" },
    ],
  },
  {
    id: "momos",
    name: "Momo Mania",
    icon: "🥟",
    hasHalfFull: true,
    items: [
      { name: "Veg Steamed Momo", price: 70, halfPrice: 50, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80" },
      { name: "Veg Fried Momo", price: 90, halfPrice: 60, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80" },
      { name: "Veg Kurkure Momo", price: 100, halfPrice: 70, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80" },
      { name: "Paneer Steamed Momo", price: 100, halfPrice: 80, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80" },
      { name: "Paneer Fried Momo", price: 120, halfPrice: 100, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80" },
      { name: "Paneer Kurkure Momo", price: 130, halfPrice: 110, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80" },
      { name: "Veg Tandoori Momo", price: 130, halfPrice: 90, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80" },
      { name: "Veg Afghani Momo", price: 140, halfPrice: 100, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80" },
      { name: "Paneer Tandoori Momo", price: 140, halfPrice: 100, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80" },
      { name: "Paneer Afghani Momo", price: 150, halfPrice: 110, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80" },
    ],
  },
  {
    id: "sandwich",
    name: "Sandwich & Burger",
    icon: "🥪",
    items: [
      { name: "Aloo Sandwich", price: 50, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80" },
      { name: "Cheese Corn Sandwich", price: 60, image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&q=80" },
      { name: "Chilli Paneer Sandwich", price: 70, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80" },
      { name: "Grilled Sandwich", price: 70, image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&q=80" },
      { name: "Veg Burger", price: 50, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80" },
      { name: "Cheese Burger", price: 60, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80" },
      { name: "Veggie Delight Burger", price: 70, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80" },
      { name: "Double Patty Burger", price: 80, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80" },
      { name: "Veg Kurkure Burger", price: 90, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80" },
    ],
  },
  {
    id: "pizza",
    name: "Crust & Crunch",
    icon: "🍕",
    hasSizeOptions: true,
    items: [
      {
        name: "Margherita",
        price: 170,
        sizes: [
          { size: "6 inch", price: 70 },
          { size: "8 inch", price: 120 },
          { size: "10 inch", price: 170 },
        ],
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
      },
      {
        name: "Capsicum Cheese",
        price: 170,
        sizes: [
          { size: "6 inch", price: 70 },
          { size: "8 inch", price: 120 },
          { size: "10 inch", price: 170 },
        ],
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
      },
      {
        name: "Golden Corn",
        price: 170,
        sizes: [
          { size: "6 inch", price: 70 },
          { size: "8 inch", price: 120 },
          { size: "10 inch", price: 170 },
        ],
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
      },
      {
        name: "Onion Capsicum",
        price: 180,
        sizes: [
          { size: "6 inch", price: 80 },
          { size: "8 inch", price: 130 },
          { size: "10 inch", price: 180 },
        ],
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=400&q=80",
      },
      {
        name: "Farmhouse",
        price: 180,
        sizes: [
          { size: "6 inch", price: 80 },
          { size: "8 inch", price: 130 },
          { size: "10 inch", price: 180 },
        ],
        image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&q=80",
      },
      {
        name: "Paneer Tikka",
        price: 180,
        sizes: [
          { size: "6 inch", price: 80 },
          { size: "8 inch", price: 130 },
          { size: "10 inch", price: 180 },
        ],
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
      },
      {
        name: "American Remix",
        price: 190,
        sizes: [
          { size: "6 inch", price: 90 },
          { size: "8 inch", price: 140 },
          { size: "10 inch", price: 190 },
        ],
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&q=80",
      },
      {
        name: "Exotic Veg",
        price: 190,
        sizes: [
          { size: "6 inch", price: 90 },
          { size: "8 inch", price: 140 },
          { size: "10 inch", price: 190 },
        ],
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
      },
    ],
  },
  {
    id: "maggie",
    name: "Maggie Shaggy",
    icon: "🍜",
    items: [
      { name: "Plain Maggie", price: 40, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80" },
      { name: "Veggie Maggie", price: 50, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80" },
      { name: "Peri-Peri Maggie", price: 60, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80" },
      { name: "Cheesy Maggie", price: 70, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80" },
    ],
  },
  {
    id: "wraps",
    name: "Wrap & Roll",
    icon: "🌯",
    items: [
      { name: "Veg Roll", price: 50, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80" },
      { name: "Paneer Roll", price: 70, image: "https://images.unsplash.com/photo-1593252719532-6318b3723c05?w=400&q=80" },
      { name: "Tandoori Chaap Roll", price: 80, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80" },
      { name: "Veg Manchurian Roll", price: 80, image: "https://images.unsplash.com/photo-1593252719532-6318b3723c05?w=400&q=80" },
      { name: "Chilli Paneer Wrap", price: 90, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80" },
      { name: "Afghani Chaap Roll", price: 90, image: "https://images.unsplash.com/photo-1593252719532-6318b3723c05?w=400&q=80" },
      { name: "Malai Chaap Roll", price: 90, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80" },
      { name: "Chilli Mushroom Wrap", price: 90, image: "https://images.unsplash.com/photo-1593252719532-6318b3723c05?w=400&q=80" },
    ],
  },
  {
    id: "beverages",
    name: "Chill & Sip",
    icon: "🥤",
    items: [
      { name: "Cold Coffee", price: 70, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80" },
      { name: "Vanilla Milkshake", price: 70, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80" },
      { name: "Chocolate Milkshake", price: 80, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&q=80" },
      { name: "Oreo Milkshake", price: 80, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80" },
      { name: "KitKat Milkshake", price: 90, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&q=80" },
      { name: "Strawberry Milkshake", price: 90, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80" },
      { name: "Blueberry Milkshake", price: 90, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&q=80" },
      { name: "Pineapple Milkshake", price: 90, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80" },
    ],
  },
  {
    id: "snacks",
    name: "Snack-licious",
    icon: "🍟",
    hasHalfFull: true,
    items: [
      { name: "French Fries", price: 70, halfPrice: 40, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80" },
      { name: "Veg Spring Roll", price: 70, halfPrice: 40, image: "https://images.unsplash.com/photo-1560963689-8f0748896786?w=400&q=80" },
      { name: "Peri-Peri Fries", price: 80, halfPrice: 50, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80" },
      { name: "Cheesy Fries", price: 90, halfPrice: 70, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80" },
      { name: "Chilli Potato", price: 90, halfPrice: 70, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80" },
      { name: "Chilli Chaap", price: 90, halfPrice: 70, image: "https://images.unsplash.com/photo-1560963689-8f0748896786?w=400&q=80" },
      { name: "Honey Chilli Potato", price: 100, halfPrice: 80, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80" },
      { name: "Veg Manchurian Dry", price: 120, halfPrice: 80, image: "https://images.unsplash.com/photo-1560963689-8f0748896786?w=400&q=80" },
      { name: "Veg Manchurian Gravy", price: 140, halfPrice: 90, image: "https://images.unsplash.com/photo-1560963689-8f0748896786?w=400&q=80" },
    ],
  },
  {
    id: "noodles",
    name: "Mr. Noodles",
    icon: "🍜",
    hasHalfFull: true,
    items: [
      { name: "Veg Noodles", price: 80, halfPrice: 50, image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80" },
      { name: "Chilli Garlic Noodles", price: 90, halfPrice: 60, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80" },
      { name: "Veg Hakka Noodles", price: 90, halfPrice: 60, image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80" },
      { name: "Paneer Noodles", price: 100, halfPrice: 80, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80" },
      { name: "Singapore Noodles", price: 100, halfPrice: 80, image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80" },
    ],
  },
  {
    id: "rice",
    name: "Hungry Rice",
    icon: "🍚",
    hasHalfFull: true,
    items: [
      { name: "Veg Fried Rice", price: 90, halfPrice: 70, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80" },
      { name: "Chilli Garlic Fried Rice", price: 110, halfPrice: 70, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80" },
      { name: "Veg Singapore Rice", price: 120, halfPrice: 80, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80" },
      { name: "Veg Corn Rice", price: 120, halfPrice: 80, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80" },
      { name: "Paneer Fried Rice", price: 130, halfPrice: 90, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80" },
    ],
  },
  {
    id: "mojito",
    name: "Mojito Magic",
    icon: "🍹",
    items: [
      { name: "Virgin Mojito", price: 69, image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80" },
      { name: "Strawberry Mojito", price: 69, image: "https://images.unsplash.com/photo-1609947761121-032aa5eb6d1a?w=400&q=80" },
      { name: "Blue Lagoon Mojito", price: 69, image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=400&q=80" },
      { name: "Watermelon Mojito", price: 69, image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80" },
      { name: "Blood Orange Mojito", price: 69, image: "https://images.unsplash.com/photo-1609947761121-032aa5eb6d1a?w=400&q=80" },
      { name: "Peach Mojito", price: 69, image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=400&q=80" },
      { name: "Mango Mojito", price: 69, image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80" },
      { name: "Green Apple Mojito", price: 69, image: "https://images.unsplash.com/photo-1609947761121-032aa5eb6d1a?w=400&q=80" },
    ],
  },
  {
    id: "hotdrinks",
    name: "Brew & Buzz",
    icon: "☕",
    items: [
      { name: "Tea", price: 15, image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&q=80" },
      { name: "Masala Tea", price: 20, image: "https://images.unsplash.com/photo-1597318121257-a3bb0cb6d20f?w=400&q=80" },
      { name: "Hot Coffee", price: 40, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80" },
      { name: "Hot Chocolate Milk", price: 50, image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&q=80" },
    ],
  },
];

export const comboData = [
  {
    id: "kungfu",
    name: "Kungefu Bowl",
    price: 99,
    description: "Noodles + Manchurian + Spring Roll",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80",
  },
  {
    id: "roller",
    name: "Rolls Roller",
    price: 110,
    description: "2 Rolls of your choice",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80",
  },
  {
    id: "siproll",
    name: "Sip-n-Roll",
    price: 110,
    description: "Roll + Mojito",
    image: "https://images.unsplash.com/photo-1593252719532-6318b3723c05?w=400&q=80",
  },
  {
    id: "thada",
    name: "Thada Rolls",
    price: 110,
    description: "Roll + Cold Drink",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80",
  },
  {
    id: "chinatown",
    name: "China Town",
    price: 180,
    description: "Noodles + Rice + Manchurian",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80",
  },
];
