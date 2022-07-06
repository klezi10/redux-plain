const redux = require("redux");

/* standard js function, always receive 2 parameters - old state + dispatched action
must always return a new state object
should be a pure function - no http request, fetch, write to localstorage 
same input leads to same output
a reducer function */
// if you don't give state a value now, it'll give error msg of undefined
function counterReducer(state = { counter: 0 }, action) {
  /* if the action type is 'increment' increase the counter by 1, otherwise just return the unchanged, default state */
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
        counter: state.counter - 1
    }
  }

  return state;
}

const store = redux.legacy_createStore(counterReducer);
//store needs to know which reducer is responsible for changing the store

function counterSubscriber() {
  const latestState = store.getState();
  /* getState is a method from store created with createstore, will give us the latest
    state snapshot after it was changed */
  console.log(latestState);
}

// subscribe is a method from store - expects a function to point to - not execute
store.subscribe(counterSubscriber);

//method which dispatches an action
//action is a JS object with a type property
//typically type should be a string
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

/* redux is not react specific.
to install redux - npm install redux
to install for react - npm install redux react-redux */