let initialState = {
    myGoals : [],
    progress: [],
    publicGoals: [],
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch(type){
    case 'MYGOALS':
      let reversed = payload.reverse();
      return {...state, myGoals:reversed};
    
    case 'UPDATEMYGOALS':
      let newGoals = state.myGoals.map(goal=>{
        if(goal._id === payload._id){
          return {...payload,virtualOwner: goal.virtualOwner};
        }
          return goal;
      });
      return {...state,myGoals:newGoals};

    case 'POSTGOALS':
      console.log(payload);
      let postedGoals = [...state.myGoals]
      postedGoals.unshift(payload);
      return {...state,myGoals:postedGoals};

    case 'DELETEMYGOALS':
      // eslint-disable-next-line
      let deletedGoals = state.myGoals.filter(goal=>{
        if(goal._id !== payload._id) return goal;
      });
      return {...state,myGoals:deletedGoals};

    case 'GOALSLOAD':
      let reversedPub = payload.reverse();
      return {...state,publicGoals:reversedPub};

    case 'PROGRESS':
      console.log(state);
      return {...state,progress:payload};
    default:
      return state;
  }
}