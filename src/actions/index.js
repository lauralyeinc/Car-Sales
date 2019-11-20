export const UPDATE_TOTAL = "UPDATE_TOTAL"; 
export const UPDATE_ADDITIONAL_PRICE = "UPDATE_ADDITIONAL_PRICE"; 
export const REMOVE_FEATURE = "REMOVE_FEATURE"; 
export const BUY_ITEM = "BUY_ITEM"; 

export const updateTotal = total => {
    return {
        type:  UPDATE_TOTAL,
        payload: total
    };
};

export const updateAdditionalPrice = additionalPrice => {
    return {
        type: UPDATE_ADDITIONAL_PRICE,
        payload: additionalPrice
    };
};

export const removeFeature = features => {
    return {
        type: REMOVE_FEATURE,
        payload: features    //it's in tree state why not defined? 
    };
};

export const buyItem = total => { //?each feature or the car as a whole with added features?
    return {
        type: BUY_ITEM,
        payload: total
    };
}; 