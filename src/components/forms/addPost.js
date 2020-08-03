import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap'

const PostForm = props => {
  let newPost = {};

  const handleChange = event => {
    event.persist();
    newPost[event.target.name] = event.target.value;
  }

  const handleSubmit = event => {
    event.preventDefault();
    event.target.reset();
    try {
      props.post(newPost);
    }
    catch{
      console.log('error')
    }
  }

  return (
    <>
      <Container fluid style={{backgroundColor:"#FFF7EB" , margin:"30px 0px"}}>
        <Row>
          <h6 style={{marginLeft:"30px", marginTop:"30px"}}>SHARE YOUR EXPERIENCE, FEELING OR YOUR STORY ...</h6>
          <Col xs={12} md={12} xl={12} lg={12}>
            <Form onSubmit={handleSubmit}>
              <Col xs={12} md={12} xl={12} lg={12}>
                <Form.Label style={{width:"100%"}}>Title
                   <Form.Control name="title" type="text"  onChange={handleChange} required /></Form.Label>
              </Col>
              <Col xs={12} md={12} xl={12} lg={12}>
                <Form.Label style={{width:"100%"}}>Story
                  <Form.Control as="textarea" rows="5"type="text" name="story"  onChange={handleChange} required /></Form.Label>
              </Col>
              <button className="buttons1" type="submit" style={{margin:"20px 30%", color:"#EE9E6D"}}>
                Share now!
                </button>
            </Form>
          </Col>
        </Row>
      </Container>

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
