import { createStore } from 'redux';

const store = createStore((state = { count:10 }) => {
    return state;
});

console.log(store.getState());




// this.setState((prevState) => {
//     return prevState;
// });