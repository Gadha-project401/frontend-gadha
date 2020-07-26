// React Stuff
import React, {useContext, useEffect} from 'react';
import {LoginContext} from '../auth/context';
import Show from '../auth/show';
import './dashboard.scss';

// Redux Stuff
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

const Dashboard = props =>{

  let user = useContext(LoginContext);


  useEffect(()=>{
    props.getOwn();
    console.log(user);
    console.log(props);
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  const checkConsole = () =>{
    console.log(user);
  }



  return(
    <>
    <button onClick={checkConsole}>CHECK CONSOLE</button>
    <Show condition={user.loggedIn}>
    <p className="progress">Progress Percentage: </p>
    
    {props.myGoals.myGoals.map(post=>{
        return(
            <div key={post._id}>
                <img className="profilePic" src={post.virtualOwner.profilePic} alt='profilePic' />
                <p className="title">{post.title}</p>
                <p className="story">{post.story}</p>
                <p className="dueBy">Due By: {post.dueBy} </p>
                <h5 className="createdBy" >{post.createdBy}</h5>
                <p className="createdAt">{post.createdAt.split(',')[0]}</p>
                <img src={post.image} alt='goalPic'/>
                <p className="privacy">Private: {post.private} </p>
            </div>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);