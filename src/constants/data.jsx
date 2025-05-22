import { useEffect } from "react";
import Chef from "../assets/chef.png";
import Chef1 from "../assets/chef_1.png";
import Chef2 from "../assets/chef_2.png";
import { useDispatch } from "react-redux";
import {
  setChefDetailsFoods,
  setChefs,
  setCuisines,
  setFoods,
  setNearByShops,
} from "../store/datasource/action";

const SaveData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setChefs(nearByShops));
    dispatch(setCuisines(cuisines));
    dispatch(setNearByShops(nearByShops));
    dispatch(setFoods(foods));
    dispatch(setChefDetailsFoods(chefDetailsFoodList));
  }, []);
  return <></>;
};
export default SaveData;
const cuisines = [
  {
    id: 1,
    title: "Chinese",
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "French",
    image:
      "https://images.unsplash.com/photo-1608855238293-a8853e7f7c98?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Thai Cuisine",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Italian Cuisine",
    image:
      "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Indian Cuisine",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Mexican Cuisine",
    image:
      "https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Japanese Cuisine",
    image:
      "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Greek Cuisine",
    image:
      "https://images.unsplash.com/photo-1600335895229-6e75511892c8?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Spanish Cuisine",
    image:
      "https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Lebanese Cuisine",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=500&auto=format&fit=crop",
  },
];

const nearByShops = [
  {
    chefImage: Chef,
    shopName: "Home Street Kitchen",
    chefName: "John Smith",
    rating: "3.5",
    timing: "09:00 AM to 05:00 PM",
    distance: "0.35 mi",
    language: "Italian, French",
    isOffline: false,
  },
  {
    chefImage: Chef2,
    shopName: "Emily Johnson",
    chefName: "Emily",
    rating: "3.4",
    timing: "09:00 AM to 05:00 PM",
    distance: "0.35 mi",
    language: "Italian, French",
    isOffline: false,
  },
  {
    chefImage: Chef1,
    shopName: "Sizzle & Serve",
    chefName: "Smith",
    rating: "3.9",
    timing: "09:00 AM to 05:00 PM",
    distance: "0.35 mi",
    language: "Italian, French",
    isOffline: true,
  },
  {
    chefImage: Chef,
    shopName: "Flare & Feast",
    chefName: "Johnson",
    rating: "3.8",
    timing: "09:00 AM to 05:00 PM",
    distance: "0.35 mi",
    language: "Italian, French",
    isOffline: false,
  },
  {
    chefImage: Chef1,
    shopName: "Emily Johnson",
    chefName: "",
    rating: "3.4",
    timing: "09:00 AM to 05:00 PM",
    distance: "0.35 mi",
    language: "Italian, French",
    isOffline: false,
  },
  {
    chefImage: Chef2,
    shopName: "Sizzle & Serve",
    chefName: "Smith",
    rating: "3.9",
    timing: "09:00 AM to 05:00 PM",
    distance: "0.35 mi",
    language: "Italian, French",
    isOffline: false,
  },
  {
    chefImage: Chef,
    shopName: "Flare & Feast",
    chefName: "Johnson",
    rating: "3.8",
    timing: "09:00 AM to 05:00 PM",
    distance: "0.35 mi",
    language: "Italian, French",
    isOffline: true,
  },
];

const foods = [
  {
    title: "Risotto",
    price: "$2.5",
    cuisine: "Italian",
    description:
      "Delectable dish with unique Guntur chilli locally harvested in guntur region",
    rating: 3.8,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SBU26aB79aYiJ0K5wLXO5jaFWsCV88.png",
  },
  {
    title: "Risotto",
    price: "$2.5",
    cuisine: "Italian",
    description:
      "Delectable dish with unique Guntur chilli locally harvested in guntur region",
    rating: 3.8,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SBU26aB79aYiJ0K5wLXO5jaFWsCV88.png",
  },
  {
    title: "Risotto",
    price: "$2.5",
    cuisine: "Italian",
    description:
      "Delectable dish with unique Guntur chilli locally harvested in guntur region",
    rating: 3.8,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SBU26aB79aYiJ0K5wLXO5jaFWsCV88.png",
  },
  {
    title: "Risotto",
    price: "$2.5",
    cuisine: "Italian",
    description:
      "Delectable dish with unique Guntur chilli locally harvested in guntur region",
    rating: 3.8,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SBU26aB79aYiJ0K5wLXO5jaFWsCV88.png",
  },
  {
    title: "Risotto",
    price: "$2.5",
    cuisine: "Italian",
    description:
      "Delectable dish with unique Guntur chilli locally harvested in guntur region",
    rating: 3.8,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SBU26aB79aYiJ0K5wLXO5jaFWsCV88.png",
  },
  {
    title: "Risotto",
    price: "$2.5",
    cuisine: "Italian",
    description:
      "Delectable dish with unique Guntur chilli locally harvested in guntur region",
    rating: 3.8,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SBU26aB79aYiJ0K5wLXO5jaFWsCV88.png",
  },
  {
    title: "Risotto",
    price: "$2.5",
    cuisine: "Italian",
    description:
      "Delectable dish with unique Guntur chilli locally harvested in guntur region",
    rating: 3.8,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SBU26aB79aYiJ0K5wLXO5jaFWsCV88.png",
  },
];

const chefDetailsFoodList = {
  cuisines: [
    {
      id: "italian",
      name: "Italian",
      count: 12,
      categories: [
        {
          id: "appetizers",
          name: "Appetizers",
          image: "/images/italian/appetizers.jpg",
        },
        {
          id: "first-courses",
          name: "First Courses",
          image: "/images/italian/first-courses.jpg",
        },
        {
          id: "main-courses",
          name: "Main Courses",
          image: "/images/italian/main-courses.jpg",
        },
        {
          id: "side-dishes",
          name: "Side Dishes",
          image: "/images/italian/side-dishes.jpg",
        },
        {
          id: "cheese-fruit",
          name: "Cheese & Fruit",
          image: "/images/italian/cheese-fruit.jpg",
        },
        {
          id: "pizza",
          name: "Pizza",
          image: "/images/italian/pizza.jpg",
        },
        {
          id: "coffee-digestives",
          name: "Coffee & Digestives",
          image: "/images/italian/coffee-digestives.jpg",
        },
        {
          id: "desserts",
          name: "Desserts",
          image: "/images/italian/desserts.jpg",
        },
      ],
    },
    {
      id: "chinese",
      name: "Chinese",
      count: 8,
      categories: [
        {
          id: "appetizers",
          name: "Appetizers",
          image: "/images/chinese/appetizers.jpg",
        },
        {
          id: "dim-sum",
          name: "Dim Sum",
          image: "/images/chinese/dim-sum.jpg",
        },
        {
          id: "noodles",
          name: "Noodles",
          image: "/images/chinese/noodles.jpg",
        },
        {
          id: "rice-dishes",
          name: "Rice Dishes",
          image: "/images/chinese/rice-dishes.jpg",
        },
        {
          id: "main-courses",
          name: "Main Courses",
          image: "/images/chinese/main-courses.jpg",
        },
        {
          id: "soups",
          name: "Soups",
          image: "/images/chinese/soups.jpg",
        },
        {
          id: "seafood",
          name: "Seafood",
          image: "/images/chinese/seafood.jpg",
        },
        {
          id: "desserts",
          name: "Desserts",
          image: "/images/chinese/desserts.jpg",
        },
      ],
    },
    {
      id: "french",
      name: "French",
      count: 12,
      categories: [
        {
          id: "appetizers",
          name: "Appetizers",
          image: "/images/french/appetizers.jpg",
        },
        {
          id: "soups",
          name: "Soups",
          image: "/images/french/soups.jpg",
        },
        {
          id: "salads",
          name: "Salads",
          image: "/images/french/salads.jpg",
        },
        {
          id: "main-courses",
          name: "Main Courses",
          image: "/images/french/main-courses.jpg",
        },
        {
          id: "seafood",
          name: "Seafood",
          image: "/images/french/seafood.jpg",
        },
        {
          id: "poultry",
          name: "Poultry",
          image: "/images/french/poultry.jpg",
        },
        {
          id: "cheese",
          name: "Cheese",
          image: "/images/french/cheese.jpg",
        },
        {
          id: "desserts",
          name: "Desserts",
          image: "/images/french/desserts.jpg",
        },
      ],
    },
    {
      id: "japanese",
      name: "Japanese",
      count: 10,
      categories: [
        {
          id: "appetizers",
          name: "Appetizers",
          image: "/images/japanese/appetizers.jpg",
        },
        {
          id: "sushi",
          name: "Sushi",
          image: "/images/japanese/sushi.jpg",
        },
        {
          id: "sashimi",
          name: "Sashimi",
          image: "/images/japanese/sashimi.jpg",
        },
        {
          id: "noodles",
          name: "Noodles",
          image: "/images/japanese/noodles.jpg",
        },
        {
          id: "rice-dishes",
          name: "Rice Dishes",
          image: "/images/japanese/rice-dishes.jpg",
        },
        {
          id: "main-courses",
          name: "Main Courses",
          image: "/images/japanese/main-courses.jpg",
        },
        {
          id: "tempura",
          name: "Tempura",
          image: "/images/japanese/tempura.jpg",
        },
        {
          id: "desserts",
          name: "Desserts",
          image: "/images/japanese/desserts.jpg",
        },
      ],
    },
  ],
};
