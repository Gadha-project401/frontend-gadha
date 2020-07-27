let initialState = {
    myGoals : [],
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch(type){
    case 'MYGOALS':
      console.log(type,payload);
      console.log(state);
      let reversed = payload.reverse();
      return {myGoals:reversed};
    
    case 'UPDATEMYGOALS':
      let newGoals = state.myGoals.map(goal=>{
        
        if(goal._id == payload._id){
          return {...payload,virtualOwner: goal.virtualOwner};
        }
          return goal;
      })
      
      return {myGoals:newGoals};
    default:
      return state;
  }
}