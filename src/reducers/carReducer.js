const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export const carReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "REMOVE_FEATURE":
      console.log("REMOVE_FEATURE")
      console.log(action.payload);
      return {
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          price: 26395,
          name: '2019 Ford Mustang',
          image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: [...state.car.features.filter(item => item.id != action.payload.id)]
        },
        additionalFeatures: [...state.additionalFeatures, action.payload ]
      };
      //return state;
    case "BUY_ITEM":
      console.log("BUY_ITEM")
      console.log(action.payload);
      let expland = state.additionalFeatures.filter(item => item.id == action.payload.id);
      return {
        additionalPrice: action.payload.price + state.additionalPrice ,
        car: {
          price: 26395,
          name: '2019 Ford Mustang',
          image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: [...state.car.features, ...expland]
        },
        additionalFeatures: [...state.additionalFeatures.filter(item => item.id != action.payload.id)]
      };
      //return state;
    default:
      return state;
  }
};
