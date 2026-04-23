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
    "id": "tandoor",
    "name": "Tandoor",
    "icon": "\uD83D\uDD25",
    "items": [
      {
        "name": "Achari Chaap",
        "price": 180,
        "image": "/menu/achari-chaap.jpeg",
        "halfPrice": 120
      },
      {
        "name": "Achari Mushroom Tikka",
        "price": 220,
        "image": "/menu/achari-mushroom-tikka.jpeg"
      },
      {
        "name": "Achari Paneer Tikka",
        "price": 210,
        "image": "/menu/achari-paneer-tikka.jpeg",
        "halfPrice": 130
      },
      {
        "name": "Afghani Chaap",
        "price": 190,
        "image": "/menu/afghani-chaap.jpeg",
        "halfPrice": 130
      },
      {
        "name": "Dahi Ke Sholey",
        "price": 150,
        "image": "/menu/dahi-ke-sholey.jpeg"
      },
      {
        "name": "Haryali Chaap",
        "price": 180,
        "image": "/menu/haryali-chaap.jpeg",
        "halfPrice": 120
      },
      {
        "name": "Haryali Paneer Tikka",
        "price": 210,
        "image": "/menu/haryali-paneer-tikka.jpeg",
        "halfPrice": 140
      },
      {
        "name": "Malai Chaap",
        "price": 180,
        "image": "/menu/malai-chaap.jpeg",
        "halfPrice": 120
      },
      {
        "name": "Malai Paneer Tikka",
        "price": 210,
        "image": "/menu/malai-paneer-tikka.jpeg",
        "halfPrice": 140
      },
      {
        "name": "Mushroom Tikka",
        "price": 220,
        "image": "/menu/mushroom-tikka.jpeg"
      },
      {
        "name": "Stuffed Malai Chaap",
        "price": 220,
        "image": "/menu/stuffed-malai-chaap.jpeg",
        "halfPrice": 150
      },
      {
        "name": "Stuffed Tandoori Chaap",
        "price": 220,
        "image": "/menu/stuffed-tandoori-chaap.jpeg",
        "halfPrice": 150
      },
      {
        "name": "Tandoori Masala Chaap",
        "price": 170,
        "image": "/menu/tandoori-masala-chaap.jpeg",
        "halfPrice": 110
      },
      {
        "name": "Tandoori Paneer Tikka",
        "price": 210,
        "image": "/menu/tandoori-paneer-tikka.jpeg",
        "halfPrice": 130
      },
      {
        "name": "Tandoori Platter",
        "price": 399,
        "image": "/menu/tandoori-platter.jpeg"
      }
    ],
    "hasHalfFull": true
  },
  {
    "id": "wrap-roll",
    "name": "Wrap & Roll",
    "icon": "\uD83C\uDF2F",
    "items": [
      {
        "name": "Afghani Chaap Roll",
        "price": 90,
        "image": "/menu/afghani-chaap-roll.jpeg"
      },
      {
        "name": "Chilli Mushroom Wrap",
        "price": 90,
        "image": "/menu/chilli-mushroom-wrap.jpeg"
      },
      {
        "name": "Chilli Paneer Wrap",
        "price": 90,
        "image": "/menu/chilli-paneer-wrap.jpeg"
      },
      {
        "name": "Malai Chaap Roll",
        "price": 90,
        "image": "/menu/malai-chaap-roll.png"
      },
      {
        "name": "Paneer Roll",
        "price": 70,
        "image": "/menu/paneer-roll.png"
      },
      {
        "name": "Tandoori Chaap Roll",
        "price": 80,
        "image": "/menu/tandoori-chaap-roll.jpeg"
      },
      {
        "name": "Veg Manchurian Roll",
        "price": 80,
        "image": "/menu/veg-manchurian-roll.jpeg"
      },
      {
        "name": "Veg Roll",
        "price": 50,
        "image": "/menu/veg-roll.jpeg"
      }
    ]
  },
  {
    "id": "roti-rasoi",
    "name": "Roti Rasoi",
    "icon": "\uD83E\uDED3",
    "items": [
      {
        "name": "Aloo Naan",
        "price": 45,
        "image": "/menu/aloo-naan.jpeg"
      },
      {
        "name": "Aloo Paratha",
        "price": 40,
        "image": "/menu/aloo-paratha.jpeg"
      },
      {
        "name": "Aloo Pyaaz Paratha",
        "price": 60,
        "image": "/menu/aloo-pyaaz-paratha.jpeg"
      },
      {
        "name": "Amritsari Kulcha",
        "price": 80,
        "image": "/menu/amritsari-kulcha.png"
      },
      {
        "name": "Butter Naan",
        "price": 40,
        "image": "/menu/butter-naan.jpeg"
      },
      {
        "name": "Classic Boondi Raita",
        "price": 56,
        "image": "/menu/classic-boondi-raita.jpeg"
      },
      {
        "name": "Garlic Naan",
        "price": 50,
        "image": "/menu/garlic-naan.jpeg"
      },
      {
        "name": "Lachcha Paratha",
        "price": 40,
        "image": "/menu/lachcha-paratha.jpeg"
      },
      {
        "name": "Masala Missi Roti",
        "price": 35,
        "image": "/menu/masala-missi-roti.jpeg"
      },
      {
        "name": "Missi Roti",
        "price": 30,
        "image": "/menu/missi-roti.jpeg"
      },
      {
        "name": "Mix Veg Paratha",
        "price": 70,
        "image": "/menu/mix-veg-paratha.jpeg"
      },
      {
        "name": "Mix Veg Raita",
        "price": 64,
        "image": "/menu/mix-veg-raita.jpeg"
      },
      {
        "name": "Onion Missi Roti",
        "price": 30,
        "image": "/menu/onion-missi-roti.png"
      },
      {
        "name": "Paneer Naan",
        "price": 70,
        "image": "/menu/paneer-naan.jpeg"
      },
      {
        "name": "Paneer Paratha",
        "price": 70,
        "image": "/menu/paneer-paratha.jpeg"
      },
      {
        "name": "Plain Naan",
        "price": 30,
        "image": "/menu/plain-naan.jpeg"
      },
      {
        "name": "Pudina Naan",
        "price": 45,
        "image": "/menu/pudina-naan.jpeg"
      },
      {
        "name": "Rumali Roti",
        "price": 10,
        "image": "/menu/rumali-roti.png"
      },
      {
        "name": "Special Pineapple Raita",
        "price": 72,
        "image": "/menu/special-pineapple-raita.jpeg"
      },
      {
        "name": "Stuffed Kulcha",
        "price": 80,
        "image": "/menu/stuffed-kulcha.jpeg"
      },
      {
        "name": "Stuffed Naan",
        "price": 60,
        "image": "/menu/stuffed-naan.jpeg"
      },
      {
        "name": "Tandoori Plain Roti",
        "price": 12,
        "image": "/menu/tandoori-plain-roti.jpeg"
      },
      {
        "name": "Tandoori Roti Butter",
        "price": 15,
        "image": "/menu/tandoori-roti-butter.jpeg"
      }
    ]
  },
  {
    "id": "sandwiches-burgers",
    "name": "Sandwiches & Burgers",
    "icon": "\uD83C\uDF54",
    "items": [
      {
        "name": "Aloo Sandwich",
        "price": 50,
        "image": "/menu/aloo-sandwich.jpeg"
      },
      {
        "name": "Cheese Burger",
        "price": 60,
        "image": "/menu/cheese-burger.jpeg"
      },
      {
        "name": "Cheese Corn Sandwich",
        "price": 60,
        "image": "/menu/cheese-corn-sandwich.jpeg"
      },
      {
        "name": "Chilli Paneer Sandwich",
        "price": 70,
        "image": "/menu/chilli-paneer-sandwich.jpeg"
      },
      {
        "name": "Double Patty Burger",
        "price": 80,
        "image": "/menu/double-patty-burger.jpeg"
      },
      {
        "name": "Grilled Sandwich",
        "price": 70,
        "image": "/menu/grilled-sandwich.jpeg"
      },
      {
        "name": "Veg Burger",
        "price": 50,
        "image": "/menu/veg-burger.jpeg"
      },
      {
        "name": "Veg Kurkure Burger",
        "price": 90,
        "image": "/menu/veg-kurkure-burger.jpeg"
      },
      {
        "name": "Veggie Delight Burger",
        "price": 70,
        "image": "/menu/veggie-delight-burger.jpeg"
      }
    ]
  },
  {
    "id": "pizza",
    "name": "Pizza",
    "icon": "\uD83C\uDF55",
    "items": [
      {
        "name": "American Remix Pizza",
        "price": 190,
        "image": "/menu/american-remix-pizza.jpeg",
        "sizes": [
          {
            "size": "10 inch",
            "price": 190
          },
          {
            "size": "6 inch",
            "price": 90
          },
          {
            "size": "8 inch",
            "price": 140
          }
        ]
      },
      {
        "name": "Capsicum Cheese Pizza",
        "price": 170,
        "image": "/menu/capsicum-cheese-pizza.jpeg",
        "sizes": [
          {
            "size": "10 inch",
            "price": 170
          },
          {
            "size": "6 inch",
            "price": 70
          },
          {
            "size": "8 inch",
            "price": 120
          }
        ]
      },
      {
        "name": "Exotic Veg Pizza",
        "price": 190,
        "image": "/menu/exotic-veg-pizza.jpeg",
        "sizes": [
          {
            "size": "10 inch",
            "price": 190
          },
          {
            "size": "6 inch",
            "price": 90
          },
          {
            "size": "8 inch",
            "price": 140
          }
        ]
      },
      {
        "name": "Farmhouse Pizza",
        "price": 180,
        "image": "/menu/farmhouse-pizza.png",
        "sizes": [
          {
            "size": "10 inch",
            "price": 180
          },
          {
            "size": "6 inch",
            "price": 80
          },
          {
            "size": "8 inch",
            "price": 130
          }
        ]
      },
      {
        "name": "Golden Corn Pizza",
        "price": 170,
        "image": "/menu/golden-corn-pizza.jpeg",
        "sizes": [
          {
            "size": "10 inch",
            "price": 170
          },
          {
            "size": "6 inch",
            "price": 70
          },
          {
            "size": "8 inch",
            "price": 120
          }
        ]
      },
      {
        "name": "Margherita Pizza",
        "price": 170,
        "image": "/menu/margherita-pizza.png",
        "sizes": [
          {
            "size": "10 inch",
            "price": 170
          },
          {
            "size": "6 inch",
            "price": 70
          },
          {
            "size": "8 inch",
            "price": 120
          }
        ]
      },
      {
        "name": "Onion Capsicum Pizza",
        "price": 180,
        "image": "/menu/onion-capsicum-pizza.jpeg",
        "sizes": [
          {
            "size": "10 inch",
            "price": 180
          },
          {
            "size": "6 inch",
            "price": 80
          },
          {
            "size": "8 inch",
            "price": 130
          }
        ]
      },
      {
        "name": "Paneer Tikka Pizza",
        "price": 180,
        "image": "/menu/paneer-tikka-pizza.jpeg",
        "sizes": [
          {
            "size": "10 inch",
            "price": 180
          },
          {
            "size": "6 inch",
            "price": 80
          },
          {
            "size": "8 inch",
            "price": 130
          }
        ]
      }
    ],
    "hasSizeOptions": true
  },
  {
    "id": "beverages",
    "name": "Beverages",
    "icon": "\uD83E\uDD64",
    "items": [
      {
        "name": "Bisleri",
        "price": 0,
        "image": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80"
      },
      {
        "name": "Coke",
        "price": 0,
        "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80"
      },
      {
        "name": "Fanta",
        "price": 0,
        "image": "https://images.unsplash.com/photo-1558857563-c0c61f82b2e7?w=800&q=80"
      },
      {
        "name": "Hot Chocolate Milk",
        "price": 50,
        "image": "/menu/hot-chocolate-milk.jpeg"
      },
      {
        "name": "Hot Coffee",
        "price": 40,
        "image": "/menu/hot-coffee.jpeg"
      },
      {
        "name": "Masala Tea",
        "price": 30,
        "image": "/menu/masala-tea.png"
      },
      {
        "name": "Pepsi",
        "price": 0,
        "image": "https://images.unsplash.com/photo-1558857563-c0c61f82b2e7?w=800&q=80"
      },
      {
        "name": "tea",
        "price": 15,
        "image": "/menu/tea.jpeg"
      },
      {
        "name": "Thums Up",
        "price": 0,
        "image": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80"
      }
    ]
  },
  {
    "id": "mojito",
    "name": "Mojito",
    "icon": "\uD83C\uDF79",
    "items": [
      {
        "name": "Blood Orange Mojito",
        "price": 69,
        "image": "/menu/blood-orange-mojito.jpeg"
      },
      {
        "name": "Blue Lagoon Mojito",
        "price": 69,
        "image": "/menu/blue-lagoon-mojito.png"
      },
      {
        "name": "Green Apple Mojito",
        "price": 69,
        "image": "/menu/green-apple-mojito.png"
      },
      {
        "name": "Mango Mojito",
        "price": 69,
        "image": "/menu/mango-mojito.jpeg"
      },
      {
        "name": "Peach Mojito",
        "price": 69,
        "image": "/menu/peach-mojito.jpeg"
      },
      {
        "name": "Pineapple Mojito",
        "price": 69,
        "image": "/menu/pineapple-mojito.jpeg"
      },
      {
        "name": "Strawberry Mojito",
        "price": 69,
        "image": "/menu/strawberry-mojito.jpeg"
      },
      {
        "name": "Virgin Mojito",
        "price": 69,
        "image": "/menu/virgin-mojito.jpeg"
      },
      {
        "name": "Water Melon Mojito",
        "price": 69,
        "image": "/menu/water-melon-mojito.jpeg"
      }
    ]
  },
  {
    "id": "chill-sip",
    "name": "Chill & Sip",
    "icon": "\uD83E\uDD64",
    "items": [
      {
        "name": "Blueberry Milk Shake",
        "price": 90,
        "image": "/menu/blueberry-milk-shake.jpeg"
      },
      {
        "name": "Chocolate Milk Shake",
        "price": 80,
        "image": "/menu/chocolate-milk-shake.jpeg"
      },
      {
        "name": "Cold Coffee",
        "price": 70,
        "image": "/menu/cold-coffee.png"
      },
      {
        "name": "Kit-Kat Milk Shake",
        "price": 90,
        "image": "/menu/kit-kat-milk-shake.jpeg"
      },
      {
        "name": "mango milk shake",
        "price": 90,
        "image": "/menu/mango-milk-shake.jpeg"
      },
      {
        "name": "Oreo Milk Shake",
        "price": 80,
        "image": "/menu/oreo-milk-shake.jpeg"
      },
      {
        "name": "pine apple milk shake",
        "price": 90,
        "image": "/menu/pine-apple-milk-shake.jpeg"
      },
      {
        "name": "Strawberry Milk Shake",
        "price": 90,
        "image": "/menu/strawberry-milk-shake.jpeg"
      },
      {
        "name": "Vanilla Milk Shake",
        "price": 70,
        "image": "/menu/vanilla-milk-shake.jpeg"
      }
    ]
  },
  {
    "id": "the-dahi-house",
    "name": "The Dahi House",
    "icon": "\uD83E\uDD63",
    "items": [
      {
        "name": "boondi raita",
        "price": 35,
        "image": "/menu/boondi-raita.jpeg"
      },
      {
        "name": "Fresh Plain Curd",
        "price": 30,
        "image": "/menu/fresh-plain-curd.jpeg"
      }
    ]
  },
  {
    "id": "madras-magic",
    "name": "Madras Magic",
    "icon": "\uD83E\uDD58",
    "items": [
      {
        "name": "Butter Masala Dosa",
        "price": 140,
        "image": "/menu/butter-masala-dosa.png"
      },
      {
        "name": "Idli Sambar (2 Pcs)",
        "price": 60,
        "image": "/menu/idli-sambar--2-pcs-.png"
      },
      {
        "name": "Paneer Dosa",
        "price": 170,
        "image": "/menu/paneer-dosa.jpeg"
      },
      {
        "name": "Plain Dosa",
        "price": 80,
        "image": "/menu/plain-dosa.jpeg"
      }
    ]
  },
  {
    "id": "main-course",
    "name": "Main Course",
    "icon": "\uD83C\uDF5B",
    "items": [
      {
        "name": "Chaap Butter Masala",
        "price": 180,
        "image": "/menu/chaap-butter-masala.png",
        "halfPrice": 110
      },
      {
        "name": "Dal Fry",
        "price": 100,
        "image": "/menu/dal-fry.jpeg",
        "halfPrice": 70
      },
      {
        "name": "Dal Handi",
        "price": 110,
        "image": "/menu/dal-handi.jpeg",
        "halfPrice": 80
      },
      {
        "name": "Dal Makhani",
        "price": 180,
        "image": "/menu/dal-makhani.jpeg",
        "halfPrice": 100
      },
      {
        "name": "Dal Tadka",
        "price": 120,
        "image": "/menu/dal-tadka.jpeg",
        "halfPrice": 90
      },
      {
        "name": "Dum Aloo Kashmiri",
        "price": 200,
        "image": "/menu/dum-aloo-kashmiri.jpeg",
        "halfPrice": 120
      },
      {
        "name": "Kadhai Chaap",
        "price": 220,
        "image": "/menu/kadhai-chaap.jpeg",
        "halfPrice": 130
      },
      {
        "name": "Kadhai Paneer",
        "price": 230,
        "image": "/menu/kadhai-paneer.jpeg",
        "halfPrice": 130
      },
      {
        "name": "Malai Kofta Red Gravy",
        "price": 220,
        "image": "/menu/malai-kofta-red-gravy.jpeg",
        "halfPrice": 130
      },
      {
        "name": "Matar Mushroom",
        "price": 190,
        "image": "/menu/matar-mushroom.jpeg",
        "halfPrice": 115
      },
      {
        "name": "Matar Paneer",
        "price": 200,
        "image": "/menu/matar-paneer.jpeg",
        "halfPrice": 120
      },
      {
        "name": "Mix Veg",
        "price": 180,
        "image": "/menu/mix-veg.jpeg",
        "halfPrice": 110
      },
      {
        "name": "Mushroom Do Pyaaza",
        "price": 200,
        "image": "/menu/mushroom-do-pyaaza.jpeg",
        "halfPrice": 120
      },
      {
        "name": "Paneer Bhurji",
        "price": 240,
        "image": "/menu/paneer-bhurji.jpeg",
        "halfPrice": 140
      },
      {
        "name": "Paneer Butter Masala",
        "price": 220,
        "image": "/menu/paneer-butter-masala.jpeg",
        "halfPrice": 130
      },
      {
        "name": "Paneer Do Pyaaza",
        "price": 210,
        "image": "/menu/paneer-do-pyaaza.jpeg",
        "halfPrice": 120
      },
      {
        "name": "Paneer Handi",
        "price": 260,
        "image": "/menu/paneer-handi.jpeg",
        "halfPrice": 150
      },
      {
        "name": "Paneer Lababdar",
        "price": 230,
        "image": "/menu/paneer-lababdar.jpeg",
        "halfPrice": 130
      },
      {
        "name": "Paneer Pasanda",
        "price": 240,
        "image": "/menu/paneer-pasanda.jpeg",
        "halfPrice": 140
      },
      {
        "name": "Paneer Tikka Masala",
        "price": 240,
        "image": "/menu/paneer-tikka-masala.png",
        "halfPrice": 140
      },
      {
        "name": "Shahi Paneer",
        "price": 220,
        "image": "/menu/shahi-paneer.png",
        "halfPrice": 130
      },
      {
        "name": "Tawa Chaap Curry",
        "price": 220,
        "image": "/menu/tawa-chaap-curry.jpeg",
        "halfPrice": 130
      }
    ],
    "hasHalfFull": true
  },
  {
    "id": "snacks",
    "name": "Snacks",
    "icon": "\uD83C\uDF5F",
    "items": [
      {
        "name": "Cheesy Fries",
        "price": 90,
        "image": "/menu/cheesy-fries.jpeg"
      },
      {
        "name": "Chilli Baby Corn",
        "price": 150,
        "image": "/menu/chilli-baby-corn.jpeg",
        "halfPrice": 90
      },
      {
        "name": "Chilli Chaap",
        "price": 90,
        "image": "/menu/chilli-chaap.jpeg",
        "halfPrice": 70
      },
      {
        "name": "Chilli Mushroom",
        "price": 128,
        "image": "/menu/chilli-mushroom.jpeg"
      },
      {
        "name": "Chilli Paneer Dry",
        "price": 150,
        "image": "/menu/chilli-paneer-dry.jpeg",
        "halfPrice": 90
      },
      {
        "name": "Chilli Paneer Gravy",
        "price": 160,
        "image": "/menu/chilli-paneer-gravy.jpeg",
        "halfPrice": 100
      },
      {
        "name": "Chilli Potato",
        "price": 90,
        "image": "/menu/chilli-potato.jpeg",
        "halfPrice": 70
      },
      {
        "name": "Crispy Corn",
        "price": 120,
        "image": "/menu/crispy-corn.jpeg"
      },
      {
        "name": "French Fries",
        "price": 70,
        "image": "/menu/french-fries.jpeg"
      },
      {
        "name": "Honey Chilli Potato",
        "price": 100,
        "image": "/menu/honey-chilli-potato.jpeg",
        "halfPrice": 80
      },
      {
        "name": "Peri-Peri Fries",
        "price": 80,
        "image": "/menu/peri-peri-fries.jpeg"
      },
      {
        "name": "Veg Manchurian Dry",
        "price": 120,
        "image": "/menu/veg-manchurian-dry.jpeg",
        "halfPrice": 80
      },
      {
        "name": "Veg Manchurian Gravy",
        "price": 140,
        "image": "/menu/veg-manchurian-gravy.jpeg",
        "halfPrice": 90
      },
      {
        "name": "Veg Spring Roll",
        "price": 70,
        "image": "/menu/veg-spring-roll.jpeg"
      }
    ],
    "hasHalfFull": true
  },
  {
    "id": "maggie",
    "name": "Maggie",
    "icon": "\uD83C\uDF5C",
    "items": [
      {
        "name": "Cheesy Maggie",
        "price": 70,
        "image": "/menu/cheesy-maggie.jpeg"
      },
      {
        "name": "Peri-Peri Maggie",
        "price": 60,
        "image": "/menu/peri-peri-maggie.jpeg"
      },
      {
        "name": "Plain Maggie",
        "price": 40,
        "image": "/menu/plain-maggie.jpeg"
      },
      {
        "name": "Veggie Maggie",
        "price": 50,
        "image": "/menu/veggie-maggie.jpeg"
      }
    ]
  },
  {
    "id": "rice",
    "name": "Rice",
    "icon": "\uD83C\uDF5A",
    "items": [
      {
        "name": "Chilli Garlic Fried Rice",
        "price": 110,
        "image": "/menu/chilli-garlic-fried-rice.jpeg",
        "halfPrice": 70
      },
      {
        "name": "Paneer Fried Rice",
        "price": 130,
        "image": "/menu/paneer-fried-rice.jpeg",
        "halfPrice": 90
      },
      {
        "name": "Veg Corn Rice",
        "price": 120,
        "image": "/menu/veg-corn-rice.jpeg",
        "halfPrice": 80
      },
      {
        "name": "Veg Fried Rice",
        "price": 90,
        "image": "/menu/veg-fried-rice.jpeg",
        "halfPrice": 70
      },
      {
        "name": "Veg Singapuri Fried Rice",
        "price": 120,
        "image": "/menu/veg-singapuri-fried-rice.jpeg",
        "halfPrice": 80
      }
    ],
    "hasHalfFull": true
  },
  {
    "id": "noodles",
    "name": "Noodles",
    "icon": "\uD83C\uDF5C",
    "items": [
      {
        "name": "Chilli Garlic Noodles",
        "price": 90,
        "image": "/menu/chilli-garlic-noodles.jpeg",
        "halfPrice": 60
      },
      {
        "name": "Paneer Noodles",
        "price": 100,
        "image": "/menu/paneer-noodles.jpeg",
        "halfPrice": 80
      },
      {
        "name": "Singapuri Noodles",
        "price": 100,
        "image": "/menu/singapuri-noodles.jpeg",
        "halfPrice": 80
      },
      {
        "name": "Veg Hakka Noodles",
        "price": 90,
        "image": "/menu/veg-hakka-noodles.jpeg",
        "halfPrice": 60
      },
      {
        "name": "Veg Noodles",
        "price": 80,
        "image": "/menu/veg-noodles.jpeg",
        "halfPrice": 50
      }
    ],
    "hasHalfFull": true
  },
  {
    "id": "combo",
    "name": "Combo",
    "icon": "\uD83C\uDF7D\uFE0F",
    "items": [
      {
        "name": "China Town",
        "price": 180,
        "image": "/menu/china-town.jpeg"
      },
      {
        "name": "Kungfu Bowl",
        "price": 99,
        "image": "/menu/kungfu-bowl.jpeg"
      },
      {
        "name": "Roll'S Roller",
        "price": 110,
        "image": "/menu/roll-s-roller.jpeg"
      },
      {
        "name": "Sip-N-Roll",
        "price": 110,
        "image": "/menu/sip-n-roll.jpeg"
      },
      {
        "name": "Thaar Roll'S",
        "price": 110,
        "image": "/menu/thaar-roll-s.jpeg"
      }
    ]
  },
  {
    "id": "combo-ke-sath",
    "name": "Combo Ke Sath",
    "icon": "\uD83C\uDF7D\uFE0F",
    "items": [
      {
        "name": "Chur-Chur Naan Thali",
        "price": 110,
        "image": "/menu/chur-chur-naan-thali.png"
      },
      {
        "name": "Combo Bowl",
        "price": 80,
        "image": "/menu/combo-bowl.png"
      },
      {
        "name": "Delight Combo",
        "price": 80,
        "image": "/menu/delight-combo.jpeg"
      },
      {
        "name": "Malai Chaap + 2 Rumali +Cold Drink",
        "price": 180,
        "image": "/menu/malai-chaap---2-rumali--cold-drink.png"
      },
      {
        "name": "Masala Chaap +2 Rumali +Cold Drink",
        "price": 170,
        "image": "/menu/masala-chaap--2-rumali--cold-drink.png"
      },
      {
        "name": "Paneer Tikka Masala + 2 Rumali +Cold Drink",
        "price": 180,
        "image": "/menu/paneer-tikka-masala---2-rumali--cold-drink.png"
      },
      {
        "name": "Regular Thali",
        "price": 150,
        "image": "/menu/regular-thali.jpeg"
      },
      {
        "name": "Standard Thali",
        "price": 100,
        "image": "/menu/standard-thali.png"
      },
      {
        "name": "Super Deluxe Thali",
        "price": 220,
        "image": "/menu/super-deluxe-thali.png"
      }
    ]
  },
  {
    "id": "dessert",
    "name": "Dessert",
    "icon": "\uD83C\uDF70",
    "items": [
      {
        "name": "Gulab Jamun (Per Pc)",
        "price": 40,
        "image": "/menu/gulab-jamun--per-pc-.png"
      },
      {
        "name": "Special Thandi Kheer",
        "price": 90,
        "image": "/menu/special-thandi-kheer.jpeg"
      },
      {
        "name": "Sponge Rasgulla (Per Pc)",
        "price": 50,
        "image": "/menu/sponge-rasgulla--per-pc-.png"
      }
    ]
  },
  {
    "id": "hotspot-soups",
    "name": "Hotspot Soups",
    "icon": "\uD83E\uDD63",
    "items": [
      {
        "name": "Hot N Sour Soup",
        "price": 60,
        "image": "/menu/hot-n-sour-soup.png"
      },
      {
        "name": "Manchow Soup",
        "price": 50,
        "image": "/menu/manchow-soup.png"
      },
      {
        "name": "Talumein Soup",
        "price": 60,
        "image": "/menu/talumein-soup.jpeg"
      },
      {
        "name": "Tomato Soup",
        "price": 50,
        "image": "/menu/tomato-soup.jpeg"
      },
      {
        "name": "Veg Sweet Corn Soup",
        "price": 50,
        "image": "/menu/veg-sweet-corn-soup.jpeg"
      }
    ]
  },
  {
    "id": "pulao-biryani",
    "name": "Pulao & Biryani",
    "icon": "\uD83C\uDF72",
    "items": [
      {
        "name": "Jeera Rice",
        "price": 90,
        "image": "/menu/jeera-rice.jpeg"
      },
      {
        "name": "Kashmiri Pulao",
        "price": 130,
        "image": "/menu/kashmiri-pulao.jpeg"
      },
      {
        "name": "Mutter Pulao",
        "price": 120,
        "image": "/menu/mutter-pulao.jpeg"
      },
      {
        "name": "Steamed Rice",
        "price": 80,
        "image": "/menu/steamed-rice.jpeg"
      },
      {
        "name": "Veg Hyderabadi Biryani",
        "price": 150,
        "image": "/menu/veg-hyderabadi-biryani.jpeg"
      },
      {
        "name": "Veg Pulao",
        "price": 120,
        "image": "/menu/veg-pulao.jpeg"
      }
    ]
  },
  {
    "id": "italian-pasta",
    "name": "Italian Pasta",
    "icon": "\uD83C\uDF5D",
    "items": [
      {
        "name": "Mushroom Onion Pasta (Red Sauce)",
        "price": 120,
        "image": "/menu/mushroom-onion-pasta--red-sauce-.jpeg"
      },
      {
        "name": "Mushroom Onion Pasta (White Sauce)",
        "price": 120,
        "image": "/menu/mushroom-onion-pasta--white-sauce-.jpeg"
      },
      {
        "name": "Pink Sauce Pasta",
        "price": 130,
        "image": "/menu/pink-sauce-pasta.jpeg"
      },
      {
        "name": "Red Sauce Pasta",
        "price": 100,
        "image": "/menu/red-sauce-pasta.jpeg"
      },
      {
        "name": "White Sauce Pasta",
        "price": 120,
        "image": "/menu/white-sauce-pasta.jpeg"
      }
    ]
  },
  {
    "id": "momo",
    "name": "Momo",
    "icon": "\uD83E\uDD5F",
    "items": [
      {
        "name": "Paneer Afghani Momo",
        "price": 150,
        "image": "/menu/paneer-afghani-momo.jpeg",
        "halfPrice": 110
      },
      {
        "name": "Paneer Fried Momo",
        "price": 120,
        "image": "/menu/paneer-fried-momo.png",
        "halfPrice": 100
      },
      {
        "name": "Paneer Kurkure Momo",
        "price": 130,
        "image": "/menu/paneer-kurkure-momo.png",
        "halfPrice": 110
      },
      {
        "name": "Paneer Steamed Momo",
        "price": 100,
        "image": "/menu/paneer-steamed-momo.jpeg",
        "halfPrice": 80
      },
      {
        "name": "Paneer Tandoori Momo",
        "price": 140,
        "image": "/menu/paneer-tandoori-momo.jpeg",
        "halfPrice": 100
      },
      {
        "name": "Veg Afghani Momo",
        "price": 140,
        "image": "/menu/veg-afghani-momo.jpeg",
        "halfPrice": 110
      },
      {
        "name": "Veg Fried Momo",
        "price": 90,
        "image": "/menu/veg-fried-momo.jpeg",
        "halfPrice": 60
      },
      {
        "name": "Veg Kurkure Momo",
        "price": 100,
        "image": "/menu/veg-kurkure-momo.jpeg",
        "halfPrice": 70
      },
      {
        "name": "Veg Steamed Momo",
        "price": 70,
        "image": "/menu/veg-steamed-momo.jpeg",
        "halfPrice": 50
      },
      {
        "name": "Veg Tandoori Momo",
        "price": 130,
        "image": "/menu/veg-tandoori-momo.jpeg",
        "halfPrice": 90
      }
    ],
    "hasHalfFull": true
  }
];

export const comboData = [
  {
    "id": "combo-1",
    "name": "China Town",
    "price": 180,
    "description": "China Town",
    "image": "/menu/china-town.jpeg"
  },
  {
    "id": "combo-2",
    "name": "Kungfu Bowl",
    "price": 99,
    "description": "Kungfu Bowl",
    "image": "/menu/kungfu-bowl.jpeg"
  },
  {
    "id": "combo-3",
    "name": "Roll'S Roller",
    "price": 110,
    "description": "Roll'S Roller",
    "image": "/menu/roll-s-roller.jpeg"
  },
  {
    "id": "combo-4",
    "name": "Sip-N-Roll",
    "price": 110,
    "description": "Sip-N-Roll",
    "image": "/menu/sip-n-roll.jpeg"
  },
  {
    "id": "combo-5",
    "name": "Thaar Roll'S",
    "price": 110,
    "description": "Thaar Roll'S",
    "image": "/menu/thaar-roll-s.jpeg"
  },
  {
    "id": "combo-6",
    "name": "Chur-Chur Naan Thali",
    "price": 110,
    "description": "Chur-Chur Naan Thali",
    "image": "/menu/chur-chur-naan-thali.png"
  },
  {
    "id": "combo-7",
    "name": "Combo Bowl",
    "price": 80,
    "description": "Combo Bowl",
    "image": "/menu/combo-bowl.png"
  },
  {
    "id": "combo-8",
    "name": "Delight Combo",
    "price": 80,
    "description": "Delight Combo",
    "image": "/menu/delight-combo.jpeg"
  },
  {
    "id": "combo-9",
    "name": "Malai Chaap + 2 Rumali +Cold Drink",
    "price": 180,
    "description": "Malai Chaap + 2 Rumali +Cold Drink",
    "image": "/menu/malai-chaap---2-rumali--cold-drink.png"
  },
  {
    "id": "combo-10",
    "name": "Masala Chaap +2 Rumali +Cold Drink",
    "price": 170,
    "description": "Masala Chaap +2 Rumali +Cold Drink",
    "image": "/menu/masala-chaap--2-rumali--cold-drink.png"
  },
  {
    "id": "combo-11",
    "name": "Paneer Tikka Masala + 2 Rumali +Cold Drink",
    "price": 180,
    "description": "Paneer Tikka Masala + 2 Rumali +Cold Drink",
    "image": "/menu/paneer-tikka-masala---2-rumali--cold-drink.png"
  },
  {
    "id": "combo-12",
    "name": "Regular Thali",
    "price": 150,
    "description": "Regular Thali",
    "image": "/menu/regular-thali.jpeg"
  },
  {
    "id": "combo-13",
    "name": "Standard Thali",
    "price": 100,
    "description": "Standard Thali",
    "image": "/menu/standard-thali.png"
  },
  {
    "id": "combo-14",
    "name": "Super Deluxe Thali",
    "price": 220,
    "description": "Super Deluxe Thali",
    "image": "/menu/super-deluxe-thali.png"
  }
];
