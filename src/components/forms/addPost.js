import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const PostForm = props => {
  let newPost = {};

  const handleChange = event => {
    event.persist(); 
    newPost[event.target.name]=event.target.value;
  }  

  const handleSubmit = event =>{
    event.preventDefault();
    event.target.reset();
    try{
        props.post(newPost);
    }
    catch{
      console.log('error')
    }
  }
 
    return (
        <> 
            <p>hello</p>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Title
                   <Form.Control name="title" type="text" placeholder="title..." onChange={handleChange} required /></Form.Label>
                <Form.Label>Story
                  <Form.Control type="text" name="story" placeholder="story..." onChange={handleChange} required /></Form.Label>
                <Button variant="primary" type="submit">
                    Add Story
                </Button>
            </Form>

        </>
    )
}


const mapStateToProps = state => ({
    posts: state.posts,

});

const mapDispatchToProps = (dispatch, getState) => ({
    get: () => dispatch(actions.getRemoteData()),
    post: (data) => dispatch(actions.postRemoteData(data)),
    // put: (id, data) => dispatch(actions.putRemoteData(id, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
