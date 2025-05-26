export default {
  restaurant: {
    name: "Culinary Craft",
    owner: "John Smith",
    image: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
  savedAddresses: [
    {
      id: "home",
      label: "Home",
      address: "221 Main Road, Del Mar, San Diego, California, 92014",
      isDefault: true,
    },
  ],
  cartItems: [
    {
      id: "peppy-paneer-1",
      name: "Peppy Paneer Cheese Burst",
      price: 2.75,
      quantity: 1,
      customizable: true,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "peppy-paneer-2",
      name: "Peppy Paneer Cheese Burst",
      price: 3.375,
      quantity: 2,
      customizable: true,
      image: "/placeholder.svg?height=60&width=60",
    },
  ],
  deliveryInstructions: [
    {
      id: "avoid-ringing-bell",
      label: "Ringing Bell",
    },
    {
      id: "avoid-calling",
      label: "Calling",
    },
    {
      id: "leave-door",
      label: "Leave at the door",
    },
    {
      id: "leave-door-2",
      label: "Leave at the shop",
    },
  ],
  tipOptions: [2, 3, 4, 5, 7],
  fees: {
    deliveryFee: 0.5,
    taxRate: 0.03,
  },
};
