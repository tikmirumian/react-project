import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { TAction, TUserInfo } from '../interfaces';

const initialState: { [key: string]: TUserInfo[] } = {};
export const reducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case 'AddState':
      return { ...state, [action.payload.page]: action.payload.data };
    default:
      return state;
  }
};

export const store = createStore(reducer, composeWithDevTools());
