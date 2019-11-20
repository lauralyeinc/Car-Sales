
import { UPDATE_ADDITIONAL_PRICE, UPDATE_TOTAL, REMOVE_FEATURE, BUY_ITEM } from "../actions"; 

export const initialState = {
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
    ],
    total: 0   //I added this 
};

export const appReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case UPDATE_ADDITIONAL_PRICE:
            return {
                ...state, 
                additionalPrice: action.payload
            };
        case UPDATE_TOTAL: 
            return {
                ...state,
                total: action.payload
            }
        case REMOVE_FEATURE:
            return {
                ...state,
                features: action.payload
            }
        case BUY_ITEM:
            return {
                ...state,
                total: action.payload 
            }
            default: 
            return state; 
    };
}; 
