export default function ({ dispatch }) {
  return next => action => {
    
      console.log('action.payload.then: ', action.payload.then);
    if (!action.payload || !action.payload.then) {
      console.log('it is not a promise');
      return next(action);
    }

    console.log('it is a promise');
    // action.payload.then(())
    // console.log('action.payload: ', action.payload);
    action.payload
      .then((response) => {
        dispatch({ ...action, payload: response })
      });
  }
}
