const BUY_ITEM = "BUY_ITEM";
const REMOVE_FEATURE = "REMOVE_FEATURE";
const UPDATE_PRICE = "UPDATE_PRICE";

const removeFeature = item => {
  // dispatch an action here to remove an item
  return { type: REMOVE_FEATURE, payload: item };
};

const buyItem = item => {
  // dispatch an action here to add an item
  return { type: BUY_ITEM, payload: item };
};

const updatePrice = item => {
  // dispatch an action here to update the price
  return { type: UPDATE_PRICE, payload: item };
};

export {
  BUY_ITEM,
  REMOVE_FEATURE,
  UPDATE_PRICE,
  removeFeature,
  buyItem,
  updatePrice
};
