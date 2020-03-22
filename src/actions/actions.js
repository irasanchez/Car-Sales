const BUY_ITEM = "BUY_ITEM";
const REMOVE_FEATURE = "REMOVE_FEATURE";
const UPDATE_PRICE = "UPDATE_PRICE";

const removeFeature = item => {
  console.log(`DISPATCH ACTION => {type: ${REMOVE_FEATURE}, ${item} } }`);
  // dispatch an action here to remove an item
  return { type: REMOVE_FEATURE, payload: item };
};

const buyItem = feature => {
  console.log(`DISPATCH ACTION => {type: ${BUY_ITEM}, ${feature} }`);
  // dispatch an action here to add an item
  return { type: BUY_ITEM, payload: feature };
};

const updatePrice = item => {
  console.log(`DISPATCH ACTION => {type: ${UPDATE_PRICE}, payload: ${item} }`);
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
