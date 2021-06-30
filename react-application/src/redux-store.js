import { createStore } from 'redux';

const INITIAL_STATE = {
  name: 'Evgen',
  age: 30,
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_NAME': {
      return {
        ...state,
        name: action.name,
      };
    }
    case 'CHANGE_AGE': {
      return {
        ...state,
        age: action.age,
      };
    }
    default: return state;
  }
};

const store = createStore(reducer);

const changeName = {
  type: 'CHANGE_NAME',
  name: 'Igor',
}

const changeAge = {
  type: 'CHANGE_AGE',
  age: 35,
}

store.dispatch(changeName, changeAge);

console.log ('store: ', store.getState());