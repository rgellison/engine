import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  favourites: {
    faveItems: localStorage.getItem('faveItems')
      ? JSON.parse(localStorage.getItem('faveItems'))
      : [],
  },
};
function reducer(state, action) {
  switch (action.type) {
    case 'FAVE_ADD_ITEM':
      // add to favourites
      const newItem = action.payload;
      const existItem = state.favourites.faveItems.find(
        (item) => item._id === newItem._id
      );
      const faveItems = existItem
        ? state.favourites.faveItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.favourites.faveItems, newItem];
      localStorage.setItem('faveItems', JSON.stringify(faveItems));
      return { ...state, favourites: { ...state.favourites, faveItems } };
    case 'FAVE_REMOVE_ITEM': {
      const faveItems = state.favourites.faveItems.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem('faveItems', JSON.stringify(faveItems));
      return { ...state, favourites: { ...state.favourites, faveItems } };
    }
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children} </Store.Provider>;
}
