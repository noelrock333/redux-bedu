var currentState = {
  counter: 0
};

function reducer(currentState, action) {
  switch(action.type) {
    case 'ADD': 
      return {
        counter: currentState.counter + 1
      };
    case 'MINUS':
      return {
        counter: currentState.counter - 1
      }
    case 'RESET':
      return {
        counter: 0
      }
    case 'CUSTOM': 
      return {
        counter: Number(action.payload)
      }
    default: 
      return currentState;
  }
}

var initialState = { counter: 0 };
var store = Redux.createStore(reducer, initialState);

var counterEl = document.getElementById('counter');

function render() {
  var state = store.getState();
  counterEl.innerHTML = state.counter;
}

store.subscribe(render);

document.getElementById('add').addEventListener('click', function() {
  store.dispatch({ type: 'ADD' });
})

document.getElementById('minus').addEventListener('click', function() {
  store.dispatch({ type: 'MINUS' })
})

document.getElementById('reset').addEventListener('click', function() {
  store.dispatch({ type: 'RESET' })
})

document.getElementById('set-custom').addEventListener('click', function() {
  var customEl = document.getElementById('custom-value');
  if (typeof Number(customEl.value) === 'number' && !isNaN(customEl.value)) {
    store.dispatch({ type: 'CUSTOM', payload: Number(customEl.value) });
  }
})