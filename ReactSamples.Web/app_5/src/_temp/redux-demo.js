const redux = require("redux");

const reducerFunction = function (state = { counter: 0 }, action) {

    switch (action.type) {
        case "read":

            return { counter: state.counter };

        case "inc":

            return { counter: state.counter + 1 };

        case "dec":

            return { counter: state.counter - 1 };
    }
}
const store = redux.createStore(reducerFunction);

const reducerSubscriber = function () {
    const latestState = store.getState();
    console.log(latestState);
}
store.subscribe(reducerSubscriber);


store.dispatch({ type: 'read' });
store.dispatch({ type: 'inc' });
store.dispatch({ type: 'inc' });
store.dispatch({ type: 'dec' });
store.dispatch({ type: 'dec' });
store.dispatch({ type: 'read' });



