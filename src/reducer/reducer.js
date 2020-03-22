import { BUY_ITEM, REMOVE_FEATURE, UPDATE_PRICE } from "../actions/actions";

const stateInit = {
  message: "",
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const reducer = (state = stateInit, action) => {
  console.log("We are now inside the reducer.");
  switch (action.type) {
    //if action.type is BUY_ITEM, go to line 26
    case BUY_ITEM:
      console.log("The reducer says the action type is BUY_ITEM");
      // if feature has already been added, make error message to add to state
      let error = false;
      state.car.features.map(featureIHave => {
        console.log(
          "\t\tChecking to see if THIS SPECIFIC feature has been added"
        );
        if (featureIHave.id === action.payload.id) {
          console.log("\t\tThis feature HAS been added.");
          error = "Oops! You have already added this feature.";
        }
        return null; // compiler complains about a lack of return, but I'm just using this to loop, so I'm returning nothing to shut it up
      });

      //changes to state that need to be done if you need extra logic to do it before adding it to the state happen above the return and below the case TYPE line

      return {
        ...state,
        car: {
          ...state.car,
          features: error
            ? [...state.car.features]
            : [...state.car.features, { ...action.payload }] //only add feature if error is false
        },
        message: error
      };

    case UPDATE_PRICE:
      console.log("The reducer says the action type is UPDATE_PRICE");
      return {
        ...state,
        additionalPrice: (state.additionalPrice += action.payload)
      };
    case REMOVE_FEATURE:
      console.log("The reducer says the action type is REMOVE_FEATURE");
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(
            featureIHave => featureIHave.id !== action.payload.id
          )
        }
      };
    default:
      console.log("The reducer could not find a match for the action's type");
      return state;
  }
};
