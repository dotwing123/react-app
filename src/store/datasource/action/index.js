import { ACTION_TYPES } from "../../../constants";

export const setChefs = (payload) => ({
  type: ACTION_TYPES.SET_CHEFS,
  payload,
});

export const setCuisines = (payload) => ({
  type: ACTION_TYPES.SET_CUISINES,
  payload,
});

export const setNearByShops = (payload) => ({
  type: ACTION_TYPES.SET_NEARBY_SHOPS,
  payload,
});

export const setFoods = (payload) => ({
  type: ACTION_TYPES.SET_FOODS,
  payload,
});

export const setChefDetailsFoods = (payload) => ({
  type: ACTION_TYPES.SET_CHEF_FOODS,
  payload,
});
