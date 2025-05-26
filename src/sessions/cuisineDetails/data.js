export default {
  restaurant: {
    name: "Culinary Craft",
    owner: "John Smith",
    status: "Online",
    image: "/placeholder.svg?height=60&width=60",
    categories: [
      { id: "appetizers", name: "Appetizers", count: 8 },
      { id: "first-courses", name: "First Courses", count: 6 },
      { id: "main-courses", name: "Main Courses", count: 12 },
    ],
    cuisines: [
      { id: "italian", name: "Italian", count: 12 },
      { id: "chinese", name: "Chinese", count: 8 },
      { id: "french", name: "French", count: 12 },
    ],
  },
  menuItems: {
    appetizers: [
      {
        id: "caprese-salad",
        title: "Caprese salad",
        price: 2.75,
        rating: 4.2,
        description:
          "A South Italian dish made with a thick pancake-like batter that includes a mix of different toppings such as onions, tomatoes, coriander, spicy red powder and carrot.",
        image: "/placeholder.svg?height=80&width=80",
        customizable: true,
        available: true,
      },
      {
        id: "bruschetta",
        title: "Bruschetta",
        price: 2.75,
        rating: 4.2,
        description:
          "A South Italian dish made with a thick pancake-like batter that includes a mix of different toppings such as onions, tomatoes, coriander, spicy red powder and carrot.",
        image: "/placeholder.svg?height=80&width=80",
        customizable: true,
        available: true,
      },
      {
        id: "prosciutto-melone",
        title: "Prosciutto e Melone",
        price: 2.75,
        rating: 4.2,
        description:
          "A South Italian dish made with a thick pancake-like batter that includes a mix of different toppings such as onions, tomatoes, coriander, spicy red powder and carrot.",
        image: "/placeholder.svg?height=80&width=80",
        customizable: true,
        available: true,
      },
    ],
    "first-courses": [
      {
        id: "pasta-carbonara",
        title: "Pasta Carbonara",
        price: 8.5,
        rating: 4.2,
        description:
          "Traditional Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
        image: "/placeholder.svg?height=80&width=80",
        customizable: true,
        available: true,
      },
    ],
    "main-courses": [
      {
        id: "chicken-parmigiana",
        title: "Chicken Parmigiana",
        price: 15.75,
        rating: 4.2,
        description:
          "Breaded chicken breast topped with marinara sauce and melted mozzarella cheese.",
        image: "/placeholder.svg?height=80&width=80",
        customizable: true,
        available: true,
      },
    ],
  },
};
