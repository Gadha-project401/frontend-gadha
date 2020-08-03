import React, { useState } from 'react';

import Swal from 'sweetalert2'

// Redux Stuff
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

const AddGoal = props => {
    const [post, setPost] = useState({});

    const addPostSubmit = e => {
        e.preventDefault();
        props.postGoal(post);
        Swal.fire(
            'Goal added!',
            'Click next to the next step :)',
            'success'
          )
      }

      const addPostHandler = e => {
        setPost({ ...post, [e.target.name]: e.target.value })
      }
      
    return(
    <>

    <form className="secGoalForm" onSubmit={addPostSubmit}>
    <label><h5>Goal Title:</h5>
      <input type='text' placeholder='Enter Goal Title' name='title' required onChange={addPostHandler} />
    </label><br />
    <label><h5>Goal Story:</h5>
      <input type='text' placeholder='Enter Goal Story' name='story' required onChange={addPostHandler} />
    </label><br />
    <div>
      <h5> Goal Status:</h5>
      <select name='status' onChange={addPostHandler} required>
        <option value='' hidden >Set Status</option>
        <option value='todo'>To Do</option>
        <option value='inprogress'>In Progress</option>
        <option value='complete'>Complete</option>
      </select>
    </div>
    <br />
    <br />
    <br />
    <div>
      <h5>Goal Privacy:</h5>
      <select name='private' onChange={addPostHandler} required>
        <option value='' hidden >Set Privacy</option>
        <option value='true'>Private</option>
        <option value='false'>Public</option>
      </select>
    </div>
    <br />
    <br />
    <br />
    <label><h5>Goal Due in :</h5>
      <input type='number' min='0' max='3650' placeholder='Days' name='dueBy' required onChange={addPostHandler} />
    </label><br />

    <button className="signBtn">Add Goal</button>
  </form>

 </>
  

    )
}



const mapStateToProps = state => ({
    myGoals: state.ownGoals,
  });
  
  const mapDispatchToProps = dispatch => ({
    postGoal: obj => dispatch(actions.postOwnGoalsAPI(obj))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddGoal);
  
  
  
  