import React from 'react';
import Post from '../posts/motivations';
import { NavLink , Route} from 'react-router-dom';
import PostForm from '../forms/addPost';


const Body = props => {
  return (
    <section>
      <p>This is the body part of our project</p>
      <NavLink to='/posts'>
        Show Post
      </NavLink>
      <Route path='/posts' exact >
        <Post />
      </Route>

      <NavLink to='/AddPosts'>
        Add Post
      </NavLink>
      <Route path='/AddPosts' exact >
        <PostForm />
      </Route>
    </section>
  )
}

export default Body;