import { NearMe } from "@mui/icons-material";
import { ACTION_TYPES } from "../../../constants";

const initialState = {
  chefs: [],
  cuisines: [],
  nearbyShops: [],
  foods: [],
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
    default:
      return state;
  }
};
export default DataReducer;
