export const initailState = {
    basket: [],
    user: null,
    products: []

}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.products
            }
            break;
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
            break;
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket]
            const Index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if (Index >= 0) {
                newBasket.splice(Index, 1);
            }
            else {
                console.warn(`Cant remove product (id: ${action.id}) as it's not in basket`)
            }
            return { ...state, basket: newBasket };
            break;
        default:
            return { state };
    }
}

export default reducer

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)