// React Stuff
import React, {useContext, useEffect, useState} from 'react';
import {LoginContext} from '../auth/context';
import Show from '../auth/show';
import './dashboard.scss';

// Redux Stuff
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

const Dashboard = props =>{

  let user = useContext(LoginContext);

  const [object,setObject] = useState({});
  const [addPost, setAddPost] = useState(false);
  const [post, setPost] = useState({});


  useEffect(()=>{
    props.getOwn();
    props.progress();
    console.log(user);
    console.log(props);
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(()=>{
    props.progress();
  },[props.myGoals.myGoals]);  // eslint-disable-line react-hooks/exhaustive-deps

  const checkConsole = () =>{
    console.log(user);
    console.log(props);
  }

  const updateSubmit = (id,e) => {
    e.preventDefault()
    console.log(id);
    console.log(object);
    props.updOwn(id,object)
  };

  const handleChange = e => {
    setObject({...object, [e.target.name] : e.target.value});
    console.log(object)
  }

  const handleDelete = id =>{
    console.log(id);
    props.delOwn(id);
  }

  const showAddForm = e =>{
    setAddPost(!addPost);
  }

  const addPostSubmit = e =>{
    e.preventDefault();
    console.log(post);
  }

  const addPostHandler = e =>{
    setPost({ ...post,[e.target.name] : e.target.value})
    console.log(post)
  }

  return(
    <>
    <button onClick={showAddForm}>Add new goal</button>
    <Show condition={addPost}>
      <p>This is a very secret form</p>
      <form onSubmit={addPostSubmit}>

          <label>Goal Title: 
              <input type='text' placeholder='Enter Goal Title' name='title' required onChange={addPostHandler}/>
          </label><br/>

          <label>Goal Story: 
              <input type='text' placeholder='Enter Goal Story' name='story' required onChange={addPostHandler}/>
          </label><br/>

          <label>Goal Status: 
              <select name='status' onChange={addPostHandler} required>
                <option value='' hidden >Set Status</option>
                <option value='inprogress'>In Progress</option>
                <option value='complete'>Complete</option>
                <option value='failed'>Failed</option>
              </select>
          </label><br/>

          <label>Goal Privacy: 
              <select name='private' onChange={addPostHandler} required>
                <option value='' hidden >Set Privacy</option>
                <option value='true'>Private</option>
                <option value='false'>Public</option>
              </select>
          </label><br/>

          <label>Goal Due in : 
              <input type='number' min='0' max='3650' placeholder='Days' name='dueBy' required onChange={addPostHandler}/> Days
          </label><br/>

        <button>Add Goal</button>
      </form>
    </Show>

    <button onClick={checkConsole}>CHECK CONSOLE</button>
    <Show condition={user.loggedIn}>
    <p className="progresss">Progress Percentage: {props.myGoals.progress.progress} </p>
    
    {props.myGoals.myGoals.map(post=>{
        return(
            <section key={post._id}>
            <div>
                <img className="profilePic" src={post.virtualOwner.profilePic} alt='profilePic' />
                <button onClick={()=>handleDelete(post._id)}>DELETE ITEM</button>
                <p className="title">Title: {post.title}</p>
                <p className="story">Story: {post.story}</p>
                <p className="dueBy">Due By: {post.dueBy} </p>
                <p className="status">Status: {post.status} </p>
                <h5 className="createdBy" >Created By: {post.createdBy}</h5>
                <p className="createdAt">On: {post.createdAt.split(',')[0]}</p>
                <p className="privacy">Private: {post.private.toString()} </p>
            </div>
            
            <form onSubmit={(e) => updateSubmit(post._id, e)}>
              <label>Title
                  <input type='text' placeholder={post.title} name='title' onChange={handleChange} />
              </label><br/>
              <label>Story
                  <input type='text' placeholder={post.story} name='story' onChange={handleChange} />
              </label><br/>
              <label>Status
                <select name='status' onChange={handleChange}>
                  <option value='' hidden >Choose Progress</option>
                  <option value='inprogress'>In-Progress</option>
                  <option value='complete'>Complete</option>
                  <option value='failed'>Failed</option>
                </select>
              </label><br/>
              <label>Privacy
                <select name='private' onChange={handleChange}>
                  <option value='' hidden >Choose Privacy</option>
                  <option value='true'>Private</option>
                  <option value='false'>Public</option>
                </select>
              </label><br/>

              <button>Update Goal</button>
            </form>
            </section>

        )
    })}

    </Show >

    <Show condition={!user.loggedIn}>
        <p>Logged out user</p>
    </Show>
    </>
  )
}

const mapStateToProps = state =>({
  myGoals: state.ownGoals,
});

const mapDispatchToProps = dispatch =>({
  getOwn: () => dispatch(actions.getOwnGoalsAPI()),
  updOwn: (obj,id) => dispatch(actions.updateOwnGoalsAPI(obj,id)),
  delOwn: id => dispatch(actions.deleteOwnGoalsAPI(id)),
  progress: () => dispatch(actions.progressAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);