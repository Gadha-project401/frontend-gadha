let initialState = {
    myGoals : [],
    progress: [],
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
      return {progress: state.progress,myGoals:newGoals};

    case 'POSTGOALS':
      console.log(payload);
      let postedGoals = [...state.myGoals]
      postedGoals.unshift(payload);
      return {myGoals:postedGoals,progress:state.progress};

    case 'DELETEMYGOALS':
      // eslint-disable-next-line
      let deletedGoals = state.myGoals.filter(goal=>{
        if(goal._id !== payload._id) return goal;
      });
      return {progress: state.progress,myGoals:deletedGoals};


    case 'PROGRESS':
      console.log(state);
      return {...state,progress:payload};
    default:
      return state;
  }
}