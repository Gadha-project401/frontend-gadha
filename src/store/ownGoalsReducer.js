let initialState = {
    myGoals : []
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch(type){
    case 'MYGOALS':
      console.log(type,payload);
      console.log(state);
      let reversed = payload.reverse();
      return {myGoals:reversed};
    default:
      return state;
  }
}