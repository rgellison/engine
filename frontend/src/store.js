import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  favourites: {
    faveItems: [],
  },
};
function reducer(state, action) {
  switch (action.type) {
    case 'FAVE_ADD_ITEM':
      // add to favourites
      return {
        ...state,
        favourites: {
          ...state.favourites,
          faveItems: [...state.favourites.faveItems, action.payload],
        },
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children} </Store.Provider>;
}
