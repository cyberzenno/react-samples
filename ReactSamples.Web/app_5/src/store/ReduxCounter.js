import { createStore } from 'redux'

const counterReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {

        case "inc":
            return { counter: state.counter + 1 };

        case "dec":
            return { counter: state.counter - 1 };

        default:
            return { counter: state.counter };

    }
}

const store = createStore(counterReducer)

export default store;