import { SET_PRODUCTS } from "../actions/productsActions";




export const initialProductsState ={
    products: []
    };




    export const productsReducer = (state= initialProductsState,action) => {

        switch (action.type) {
            case SET_PRODUCTS:
                return {
                    products : action.payload,
                };

            default:
                return state
        }
    }