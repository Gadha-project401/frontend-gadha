// React Stuff
import React, {useContext, useEffect, useState} from 'react';
import {LoginContext} from '../auth/context';
import Show from '../auth/show';
import './publicgoals.scss';

// Redux Stuff
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

const PublicGoals = props =>{
  let user = useContext(LoginContext);

  useEffect(()=>{
    props.getGoals();
  },[])

  const logIt = e =>{
      console.log(user)
      console.log(props)
  }

  return(
    <>
    <button onClick={logIt}>LOG</button>
    <Show condition={user.loggedIn}>
      <p>Logged in user</p>
      {props.goals.publicGoals.map(post=>{
        return(
          <section key={post._id}>
            <div>
                <img className="profilePic" src={post.virtualOwner.profilePic} alt='ProfilePic' />
                <h5 className="createdBy" >Created By: {post.createdBy}</h5>
                <p className="title">Title: {post.title}</p>
                <p className="story">Story: {post.story}</p>
            </div>
          </section>
        )})}
    </Show>

    <Show condition={!user.loggedIn}>
      <p>Logged out user</p>
    </Show>
    </>
  )
}

const mapStateToProps = state =>({
  goals: state.ownGoals,
});

const mapDispatchToProps = dispatch =>({
  getGoals: () => dispatch(actions.goalsAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicGoals);