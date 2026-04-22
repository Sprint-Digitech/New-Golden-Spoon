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
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
        "halfPrice": 120
      },
      {
        "name": "Achari Mushroom Tikka",
        "price": 220,
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80"
      },
      {
        "name": "Achari Paneer Tikka",
        "price": 210,
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80",
        "halfPrice": 130
      },
      {
        "name": "Afghani Chaap",
        "price": 190,
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        "halfPrice": 130
      },
      {
        "name": "Dahi Ke Sholey",
        "price": 150,
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80"
      },
      {
        "name": "Haryali Chaap",
        "price": 180,
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80",
        "halfPrice": 120
      },
      {
        "name": "Haryali Paneer Tikka",
        "price": 210,
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80",
        "halfPrice": 140
      },
      {
        "name": "Malai Chaap",
        "price": 180,
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
        "halfPrice": 120
      },
      {
        "name": "Malai Paneer Tikka",
        "price": 210,
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80",
        "halfPrice": 140
      },
      {
        "name": "Mushroom Tikka",
        "price": 220,
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80"
      },
      {
        "name": "Stuffed Malai Chaap",
        "price": 220,
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
        "halfPrice": 150
      },
      {
        "name": "Stuffed Tandoori Chaap",
        "price": 220,
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80",
        "halfPrice": 150
      },
      {
        "name": "Tandoori Masala Chaap",
        "price": 170,
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80",
        "halfPrice": 110
      },
      {
        "name": "Tandoori Paneer Tikka",
        "price": 210,
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
        "halfPrice": 130
      },
      {
        "name": "Tandoori Platter",
        "price": 399,
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
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
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80"
      },
      {
        "name": "Chilli Mushroom Wrap",
        "price": 90,
        "image": "https://images.unsplash.com/photo-1593252719532-6318b3723c05?w=800&q=80"
      },
      {
        "name": "Chilli Paneer Wrap",
        "price": 90,
        "image": "https://images.unsplash.com/photo-1593252719532-6318b3723c05?w=800&q=80"
      },
      {
        "name": "Malai Chaap Roll",
        "price": 90,
        "image": "https://images.unsplash.com/photo-1593252719532-6318b3723c05?w=800&q=80"
      },
      {
        "name": "Paneer Roll",
        "price": 70,
        "image": "https://images.unsplash.com/photo-1640622303295-86d948f10f78?w=800&q=80"
      },
      {
        "name": "Tandoori Chaap Roll",
        "price": 80,
        "image": "https://images.unsplash.com/photo-1640622303295-86d948f10f78?w=800&q=80"
      },
      {
        "name": "Veg Manchurian Roll",
        "price": 80,
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80"
      },
      {
        "name": "Veg Roll",
        "price": 50,
        "image": "https://images.unsplash.com/photo-1640622303295-86d948f10f78?w=800&q=80"
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
        "image": "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=800&q=80"
      },
      {
        "name": "Aloo Paratha",
        "price": 40,
        "image": "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=800&q=80"
      },
      {
        "name": "Aloo Pyaaz Paratha",
        "price": 60,
        "image": "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=800&q=80"
      },
      {
        "name": "Amritsari Kulcha",
        "price": 80,
        "image": "https://images.unsplash.com/photo-1601050690117-94f5f6fa6a6b?w=800&q=80"
      },
      {
        "name": "Butter Naan",
        "price": 40,
        "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80"
      },
      {
        "name": "Classic Boondi Raita",
        "price": 56,
        "image": "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=800&q=80"
      },
      {
        "name": "Garlic Naan",
        "price": 50,
        "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80"
      },
      {
        "name": "Lachcha Paratha",
        "price": 40,
        "image": "https://images.unsplash.com/photo-1601050690117-94f5f6fa6a6b?w=800&q=80"
      },
      {
        "name": "Masala Missi Roti",
        "price": 35,
        "image": "https://images.unsplash.com/photo-1601050690117-94f5f6fa6a6b?w=800&q=80"
      },
      {
        "name": "Missi Roti",
        "price": 30,
        "image": "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=800&q=80"
      },
      {
        "name": "Mix Veg Paratha",
        "price": 70,
        "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80"
      },
      {
        "name": "Mix Veg Raita",
        "price": 64,
        "image": "https://images.unsplash.com/photo-1601050690117-94f5f6fa6a6b?w=800&q=80"
      },
      {
        "name": "Onion Missi Roti",
        "price": 30,
        "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80"
      },
      {
        "name": "Paneer Naan",
        "price": 70,
        "image": "https://images.unsplash.com/photo-1601050690117-94f5f6fa6a6b?w=800&q=80"
      },
      {
        "name": "Paneer Paratha",
        "price": 70,
        "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80"
      },
      {
        "name": "Plain Naan",
        "price": 30,
        "image": "https://images.unsplash.com/photo-1601050690117-94f5f6fa6a6b?w=800&q=80"
      },
      {
        "name": "Pudina Naan",
        "price": 45,
        "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80"
      },
      {
        "name": "Rumali Roti",
        "price": 10,
        "image": "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=800&q=80"
      },
      {
        "name": "Special Pineapple Raita",
        "price": 72,
        "image": "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=800&q=80"
      },
      {
        "name": "Stuffed Kulcha",
        "price": 80,
        "image": "https://images.unsplash.com/photo-1601050690117-94f5f6fa6a6b?w=800&q=80"
      },
      {
        "name": "Stuffed Naan",
        "price": 60,
        "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80"
      },
      {
        "name": "Tandoori Plain Roti",
        "price": 12,
        "image": "https://images.unsplash.com/photo-1601050690117-94f5f6fa6a6b?w=800&q=80"
      },
      {
        "name": "Tandoori Roti Butter",
        "price": 15,
        "image": "https://images.unsplash.com/photo-1601050690117-94f5f6fa6a6b?w=800&q=80"
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
        "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80"
      },
      {
        "name": "Cheese Burger",
        "price": 60,
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80"
      },
      {
        "name": "Cheese Corn Sandwich",
        "price": 60,
        "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80"
      },
      {
        "name": "Chilli Paneer Sandwich",
        "price": 70,
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80"
      },
      {
        "name": "Double Patty Burger",
        "price": 80,
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80"
      },
      {
        "name": "Grilled Sandwich",
        "price": 70,
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80"
      },
      {
        "name": "Veg Burger",
        "price": 50,
        "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80"
      },
      {
        "name": "Veg Kurkure Burger",
        "price": 90,
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80"
      },
      {
        "name": "Veggie Delight Burger",
        "price": 70,
        "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80"
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
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
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
        "image": "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&q=80",
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
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
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
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
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
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
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
        "image": "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&q=80",
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
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
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
        "image": "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&q=80",
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
        "image": "https://images.unsplash.com/photo-1558857563-c0c61f82b2e7?w=800&q=80"
      },
      {
        "name": "Hot Coffee",
        "price": 40,
        "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80"
      },
      {
        "name": "Masala Tea",
        "price": 30,
        "image": "https://images.unsplash.com/photo-1558857563-c0c61f82b2e7?w=800&q=80"
      },
      {
        "name": "Pepsi",
        "price": 0,
        "image": "https://images.unsplash.com/photo-1558857563-c0c61f82b2e7?w=800&q=80"
      },
      {
        "name": "tea",
        "price": 15,
        "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80"
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
        "image": "https://images.unsplash.com/photo-1527761939622-911909463d1f?w=800&q=80"
      },
      {
        "name": "Blue Lagoon Mojito",
        "price": 69,
        "image": "https://images.unsplash.com/photo-1527761939622-911909463d1f?w=800&q=80"
      },
      {
        "name": "Green Apple Mojito",
        "price": 69,
        "image": "https://images.unsplash.com/photo-1527761939622-911909463d1f?w=800&q=80"
      },
      {
        "name": "Mango Mojito",
        "price": 69,
        "image": "https://images.unsplash.com/photo-1527761939622-911909463d1f?w=800&q=80"
      },
      {
        "name": "Peach Mojito",
        "price": 69,
        "image": "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80"
      },
      {
        "name": "Pineapple Mojito",
        "price": 69,
        "image": "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=800&q=80"
      },
      {
        "name": "Strawberry Mojito",
        "price": 69,
        "image": "https://images.unsplash.com/photo-1527761939622-911909463d1f?w=800&q=80"
      },
      {
        "name": "Virgin Mojito",
        "price": 69,
        "image": "https://images.unsplash.com/photo-1527761939622-911909463d1f?w=800&q=80"
      },
      {
        "name": "Water Melon Mojito",
        "price": 69,
        "image": "https://images.unsplash.com/photo-1527761939622-911909463d1f?w=800&q=80"
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
        "image": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&q=80"
      },
      {
        "name": "Chocolate Milk Shake",
        "price": 80,
        "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80"
      },
      {
        "name": "Cold Coffee",
        "price": 70,
        "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80"
      },
      {
        "name": "Kit-Kat Milk Shake",
        "price": 90,
        "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80"
      },
      {
        "name": "mango milk shake",
        "price": 90,
        "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80"
      },
      {
        "name": "Oreo Milk Shake",
        "price": 80,
        "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80"
      },
      {
        "name": "pine apple milk shake",
        "price": 90,
        "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80"
      },
      {
        "name": "Strawberry Milk Shake",
        "price": 90,
        "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80"
      },
      {
        "name": "Vanilla Milk Shake",
        "price": 70,
        "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80"
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
        "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=800&q=80"
      },
      {
        "name": "Fresh Plain Curd",
        "price": 30,
        "image": "https://images.unsplash.com/photo-1584270354949-1fba19d5d08e?w=800&q=80"
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
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80"
      },
      {
        "name": "Idli Sambar (2 Pcs)",
        "price": 60,
        "image": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=800&q=80"
      },
      {
        "name": "Paneer Dosa",
        "price": 170,
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80"
      },
      {
        "name": "Plain Dosa",
        "price": 80,
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80"
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
        "image": "https://images.unsplash.com/photo-1565299585323-38174c4a6f36?w=800&q=80",
        "halfPrice": 110
      },
      {
        "name": "Dal Fry",
        "price": 100,
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
        "halfPrice": 70
      },
      {
        "name": "Dal Handi",
        "price": 110,
        "image": "https://images.unsplash.com/photo-1565299585323-38174c4a6f36?w=800&q=80",
        "halfPrice": 80
      },
      {
        "name": "Dal Makhani",
        "price": 180,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
        "halfPrice": 100
      },
      {
        "name": "Dal Tadka",
        "price": 120,
        "image": "https://images.unsplash.com/photo-1565299585323-38174c4a6f36?w=800&q=80",
        "halfPrice": 90
      },
      {
        "name": "Dum Aloo Kashmiri",
        "price": 200,
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
        "halfPrice": 120
      },
      {
        "name": "Kadhai Chaap",
        "price": 220,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
        "halfPrice": 130
      },
      {
        "name": "Kadhai Paneer",
        "price": 230,
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
        "halfPrice": 130
      },
      {
        "name": "Malai Kofta Red Gravy",
        "price": 220,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
        "halfPrice": 130
      },
      {
        "name": "Matar Mushroom",
        "price": 190,
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
        "halfPrice": 115
      },
      {
        "name": "Matar Paneer",
        "price": 200,
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
        "halfPrice": 120
      },
      {
        "name": "Mix Veg",
        "price": 180,
        "image": "https://images.unsplash.com/photo-1565299585323-38174c4a6f36?w=800&q=80",
        "halfPrice": 110
      },
      {
        "name": "Mushroom Do Pyaaza",
        "price": 200,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
        "halfPrice": 120
      },
      {
        "name": "Paneer Bhurji",
        "price": 240,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
        "halfPrice": 140
      },
      {
        "name": "Paneer Butter Masala",
        "price": 220,
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
        "halfPrice": 130
      },
      {
        "name": "Paneer Do Pyaaza",
        "price": 210,
        "image": "https://images.unsplash.com/photo-1565299585323-38174c4a6f36?w=800&q=80",
        "halfPrice": 120
      },
      {
        "name": "Paneer Handi",
        "price": 260,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
        "halfPrice": 150
      },
      {
        "name": "Paneer Lababdar",
        "price": 230,
        "image": "https://images.unsplash.com/photo-1565299585323-38174c4a6f36?w=800&q=80",
        "halfPrice": 130
      },
      {
        "name": "Paneer Pasanda",
        "price": 240,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
        "halfPrice": 140
      },
      {
        "name": "Paneer Tikka Masala",
        "price": 240,
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
        "halfPrice": 140
      },
      {
        "name": "Shahi Paneer",
        "price": 220,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
        "halfPrice": 130
      },
      {
        "name": "Tawa Chaap Curry",
        "price": 220,
        "image": "https://images.unsplash.com/photo-1565299585323-38174c4a6f36?w=800&q=80",
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
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
      },
      {
        "name": "Chilli Baby Corn",
        "price": 150,
        "image": "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80",
        "halfPrice": 90
      },
      {
        "name": "Chilli Chaap",
        "price": 90,
        "image": "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80",
        "halfPrice": 70
      },
      {
        "name": "Chilli Mushroom",
        "price": 128,
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
      },
      {
        "name": "Chilli Paneer Dry",
        "price": 150,
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
        "halfPrice": 90
      },
      {
        "name": "Chilli Paneer Gravy",
        "price": 160,
        "image": "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80",
        "halfPrice": 100
      },
      {
        "name": "Chilli Potato",
        "price": 90,
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
        "halfPrice": 70
      },
      {
        "name": "Crispy Corn",
        "price": 120,
        "image": "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80"
      },
      {
        "name": "French Fries",
        "price": 70,
        "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80"
      },
      {
        "name": "Honey Chilli Potato",
        "price": 100,
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
        "halfPrice": 80
      },
      {
        "name": "Peri-Peri Fries",
        "price": 80,
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
      },
      {
        "name": "Veg Manchurian Dry",
        "price": 120,
        "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80",
        "halfPrice": 80
      },
      {
        "name": "Veg Manchurian Gravy",
        "price": 140,
        "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80",
        "halfPrice": 90
      },
      {
        "name": "Veg Spring Roll",
        "price": 70,
        "image": "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80"
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
        "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80"
      },
      {
        "name": "Peri-Peri Maggie",
        "price": 60,
        "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800&q=80"
      },
      {
        "name": "Plain Maggie",
        "price": 40,
        "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80"
      },
      {
        "name": "Veggie Maggie",
        "price": 50,
        "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800&q=80"
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
        "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=800&q=80",
        "halfPrice": 70
      },
      {
        "name": "Paneer Fried Rice",
        "price": 130,
        "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80",
        "halfPrice": 90
      },
      {
        "name": "Veg Corn Rice",
        "price": 120,
        "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
        "halfPrice": 80
      },
      {
        "name": "Veg Fried Rice",
        "price": 90,
        "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=800&q=80",
        "halfPrice": 70
      },
      {
        "name": "Veg Singapuri Fried Rice",
        "price": 120,
        "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=800&q=80",
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
        "image": "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&q=80",
        "halfPrice": 60
      },
      {
        "name": "Paneer Noodles",
        "price": 100,
        "image": "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&q=80",
        "halfPrice": 80
      },
      {
        "name": "Singapuri Noodles",
        "price": 100,
        "image": "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&q=80",
        "halfPrice": 80
      },
      {
        "name": "Veg Hakka Noodles",
        "price": 90,
        "image": "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&q=80",
        "halfPrice": 60
      },
      {
        "name": "Veg Noodles",
        "price": 80,
        "image": "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&q=80",
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
        "image": "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&q=80"
      },
      {
        "name": "Kungfu Bowl",
        "price": 99,
        "image": "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&q=80"
      },
      {
        "name": "Roll'S Roller",
        "price": 110,
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
      },
      {
        "name": "Sip-N-Roll",
        "price": 110,
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
      },
      {
        "name": "Thaar Roll'S",
        "price": 110,
        "image": "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&q=80"
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
        "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80"
      },
      {
        "name": "Combo Bowl",
        "price": 80,
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
      },
      {
        "name": "Delight Combo",
        "price": 80,
        "image": "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&q=80"
      },
      {
        "name": "Malai Chaap + 2 Rumali +Cold Drink",
        "price": 180,
        "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80"
      },
      {
        "name": "Masala Chaap +2 Rumali +Cold Drink",
        "price": 170,
        "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80"
      },
      {
        "name": "Paneer Tikka Masala + 2 Rumali +Cold Drink",
        "price": 180,
        "image": "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&q=80"
      },
      {
        "name": "Regular Thali",
        "price": 150,
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
      },
      {
        "name": "Standard Thali",
        "price": 100,
        "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80"
      },
      {
        "name": "Super Deluxe Thali",
        "price": 220,
        "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80"
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
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80"
      },
      {
        "name": "Special Thandi Kheer",
        "price": 90,
        "image": "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80"
      },
      {
        "name": "Sponge Rasgulla (Per Pc)",
        "price": 50,
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80"
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
        "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80"
      },
      {
        "name": "Manchow Soup",
        "price": 50,
        "image": "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=800&q=80"
      },
      {
        "name": "Talumein Soup",
        "price": 60,
        "image": "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=800&q=80"
      },
      {
        "name": "Tomato Soup",
        "price": 50,
        "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80"
      },
      {
        "name": "Veg Sweet Corn Soup",
        "price": 50,
        "image": "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=800&q=80"
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
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80"
      },
      {
        "name": "Kashmiri Pulao",
        "price": 130,
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80"
      },
      {
        "name": "Mutter Pulao",
        "price": 120,
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80"
      },
      {
        "name": "Steamed Rice",
        "price": 80,
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80"
      },
      {
        "name": "Veg Hyderabadi Biryani",
        "price": 150,
        "image": "https://images.unsplash.com/photo-1701579231343-5927305f1e95?w=800&q=80"
      },
      {
        "name": "Veg Pulao",
        "price": 120,
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80"
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
        "image": "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80"
      },
      {
        "name": "Mushroom Onion Pasta (White Sauce)",
        "price": 120,
        "image": "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80"
      },
      {
        "name": "Pink Sauce Pasta",
        "price": 130,
        "image": "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80"
      },
      {
        "name": "Red Sauce Pasta",
        "price": 100,
        "image": "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80"
      },
      {
        "name": "White Sauce Pasta",
        "price": 120,
        "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80"
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
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80",
        "halfPrice": 110
      },
      {
        "name": "Paneer Fried Momo",
        "price": 120,
        "image": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80",
        "halfPrice": 100
      },
      {
        "name": "Paneer Kurkure Momo",
        "price": 130,
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80",
        "halfPrice": 110
      },
      {
        "name": "Paneer Steamed Momo",
        "price": 100,
        "image": "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800&q=80",
        "halfPrice": 80
      },
      {
        "name": "Paneer Tandoori Momo",
        "price": 140,
        "image": "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800&q=80",
        "halfPrice": 100
      },
      {
        "name": "Veg Afghani Momo",
        "price": 140,
        "image": "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800&q=80",
        "halfPrice": 110
      },
      {
        "name": "Veg Fried Momo",
        "price": 90,
        "image": "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800&q=80",
        "halfPrice": 60
      },
      {
        "name": "Veg Kurkure Momo",
        "price": 100,
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80",
        "halfPrice": 70
      },
      {
        "name": "Veg Steamed Momo",
        "price": 70,
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80",
        "halfPrice": 50
      },
      {
        "name": "Veg Tandoori Momo",
        "price": 130,
        "image": "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800&q=80",
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
    "image": "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&q=80"
  },
  {
    "id": "combo-2",
    "name": "Kungfu Bowl",
    "price": 99,
    "description": "Kungfu Bowl",
    "image": "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&q=80"
  },
  {
    "id": "combo-3",
    "name": "Roll'S Roller",
    "price": 110,
    "description": "Roll'S Roller",
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
  },
  {
    "id": "combo-4",
    "name": "Sip-N-Roll",
    "price": 110,
    "description": "Sip-N-Roll",
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
  },
  {
    "id": "combo-5",
    "name": "Thaar Roll'S",
    "price": 110,
    "description": "Thaar Roll'S",
    "image": "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&q=80"
  },
  {
    "id": "combo-6",
    "name": "Chur-Chur Naan Thali",
    "price": 110,
    "description": "Chur-Chur Naan Thali",
    "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80"
  },
  {
    "id": "combo-7",
    "name": "Combo Bowl",
    "price": 80,
    "description": "Combo Bowl",
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
  },
  {
    "id": "combo-8",
    "name": "Delight Combo",
    "price": 80,
    "description": "Delight Combo",
    "image": "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&q=80"
  },
  {
    "id": "combo-9",
    "name": "Malai Chaap + 2 Rumali +Cold Drink",
    "price": 180,
    "description": "Malai Chaap + 2 Rumali +Cold Drink",
    "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80"
  },
  {
    "id": "combo-10",
    "name": "Masala Chaap +2 Rumali +Cold Drink",
    "price": 170,
    "description": "Masala Chaap +2 Rumali +Cold Drink",
    "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80"
  },
  {
    "id": "combo-11",
    "name": "Paneer Tikka Masala + 2 Rumali +Cold Drink",
    "price": 180,
    "description": "Paneer Tikka Masala + 2 Rumali +Cold Drink",
    "image": "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&q=80"
  },
  {
    "id": "combo-12",
    "name": "Regular Thali",
    "price": 150,
    "description": "Regular Thali",
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
  },
  {
    "id": "combo-13",
    "name": "Standard Thali",
    "price": 100,
    "description": "Standard Thali",
    "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80"
  },
  {
    "id": "combo-14",
    "name": "Super Deluxe Thali",
    "price": 220,
    "description": "Super Deluxe Thali",
    "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80"
  }
];
