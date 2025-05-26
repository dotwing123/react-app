import secureLocalStorage from "react-secure-storage";
import { ACTION_TYPES } from "../../../constants";

const chefs = secureLocalStorage.getItem("nearByShops");
const cuisines = secureLocalStorage.getItem("nearByShops");
const nearbyShops = secureLocalStorage.getItem("nearByShops");
const foods = secureLocalStorage.getItem("nearByShops");
const chefFoods = secureLocalStorage.getItem("nearByShops");
const cuisinesList = secureLocalStorage.getItem("nearByShops");
const initialState = {
  chefs: JSON.parse(chefs) || [],
  cuisines: JSON.parse(cuisines) || [],
  nearbyShops: JSON.parse(nearbyShops) || [],
  foods: JSON.parse(foods) || [],
  chefFoods: JSON.parse(chefFoods) || [],
  cuisinesList: JSON.parse(cuisinesList) || [],
};

const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CHEFS: {
      return {
        ...state,
        chefs: action.payload,
      };
    }
    case ACTION_TYPES.SET_CUISINES: {
      return {
        ...state,
        cuisines: action.payload,
      };
    }
    case ACTION_TYPES.SET_NEARBY_SHOPS: {
      return {
        ...state,
        nearbyShops: action.payload,
      };
    }
    case ACTION_TYPES.SET_FOODS: {
      return {
        ...state,
        foods: action.payload,
      };
    }
    case ACTION_TYPES.SET_CHEF_FOODS: {
      return {
        ...state,
        chefFoods: action.payload,
      };
    }
    case ACTION_TYPES.SET_CUISINES_LIST: {
      return {
        ...state,
        cuisinesList: action.payload,
      };
    }
    default:
      return state;
  }
};
export default DataReducer;
