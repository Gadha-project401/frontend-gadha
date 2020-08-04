// React Stuff
import React, { useContext, useEffect, useState} from 'react';
import { LoginContext } from '../auth/context';
import Swal from 'sweetalert2';
import Show from '../auth/show';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.scss';
import { Container, Row, Col, Card, Dropdown } from 'react-bootstrap';

import Modal from 'react-bootstrap/Modal'
import logo from "../../img/logo-m.png";
import bin from "../../img/bin.png";
import plus from "../../img/plus.png";


import img911 from "../../img/911-2.png";
import recent from "../../img/recent.png";
import pluss from "../../img/s-plus.png";
import editt from "../../img/edit.png";
import MotivationPost from "../forms/addPost";
import MotivationDiv from "../posts/motivations";
import Progress from './progress'



// Redux Stuff
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

const Dashboard = props => {

  let user = useContext(LoginContext);

  const [object, setObject] = useState({});
  const [addPost, setAddPost] = useState(false);
  const [post, setPost] = useState({});

  const [todo, setTodo] = useState([]);
  const [inprogress, setInprogress] = useState([]);
  const [complete, setComplete] = useState([]);
  const [showActive, setShowActive] = useState(false);
  const [showMyGoals, setShowMyGoals] = useState(true);
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [showEditGoal, setShowEditGoal] = useState(false);
  const [showAddStep, setShowAddStep] = useState(false);
  const [uniqueState, setUniqueState] = useState([]);
  const [title, setTitle] = useState('');
 

  const [activeGoal, setActiveGoal] = useState({
    createdBy: "alaaa",
    image: "https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png",
    createdAt: "7/26/2020, 11:29:52 PM",
    private: true,
    status: "inprogress",
    _id: "5f1de8652a798f253c2fcb17",
    title: "goal1",
    story: "goal story",
    dueBy: "7/31/2020",
    __v: 0,
    virtualOwner: {
      role: "user",
      country: "jordan",
      createdAt: "2020-07-25T12:33:29.494Z",
      profilePic: "myPic.png",
      _id: "5f1c29df1a874e171606dcfe",
      username: "alaaa",
      fullName: "alaa ayoub",
      password: "$2b$10$Phrc7ket254EeQ5GqAiHfuZMEMvUKQMUYOWStJ7g9r69L3eWTAgh2",
      gender: "female",
      birthday: "2/11/2002",
      __v: 0
    },
    id: "5f1de8652a798f253c2fcb17"
  });


  useEffect(() => {
    props.getOwn();
    props.progress();
    completeFunction();
    inprogressFunction();
    todoFunction();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    props.progress();
    completeFunction();
    inprogressFunction();
    todoFunction();
    uniqueTitles();
  }, [props.myGoals.myGoals]);  // eslint-disable-line react-hooks/exhaustive-deps

  const completeFunction = () => {
    let completion = props.myGoals.myGoals.filter(post => {
      return post.status === 'complete'
    });
    setComplete(completion);
  }
  const inprogressFunction = () => {
    let inprogressValue = props.myGoals.myGoals.filter(post => {
      return post.status === 'inprogress'
    });
    setInprogress(inprogressValue);
  }
  const todoFunction = () => {
    let todoValue = props.myGoals.myGoals.filter(post => {
      return post.status === 'todo'
    });
    setTodo(todoValue);
  }

  const changeActive = (e, post) => {
    setActiveGoal(post);
    setShowActive(!showActive);
  }
  const updateSubmit = (id, e) => {
    e.preventDefault()
    props.updOwn(id, object)
    if(object.status === "inprogress"){
      Swal.fire(
        'Good luck!',
        'Good luck with your progress!',
        'success'
      )
    }if(object.status === "complete"){
      Swal.fire(
        'Good job!',
        'You finished this step! Keep going strong!',
        'success'
      )
    }
    if(object.status === "todo"){
      Swal.fire(
        'Great!',
        'Good luck with your plans!',
        'success'
      )
    }
    setShowActive(!showActive);
    setShowEditGoal(false);
  };

  const handleChange = e => {
    setObject({ ...object, [e.target.name]: e.target.value });
  }

  const handleDelete = id => {
    props.delOwn(id);
    setShowActive(false);
  }

  const addPostSubmit = e => {
    e.preventDefault();
    props.postGoal(post);
    setAddPost(!addPost);
    setShowAddGoal(false);
    setShowAddStep(false)

  }

  const addPostHandler = e => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const uniqueTitles = () => {

    let resArr = [];
    props.myGoals.myGoals.forEach(function (item) {
      let i = resArr.findIndex(x => x.title === item.title);
      if (i <= -1) {
        resArr.push({ ...item });
      }
    });
    setUniqueState(resArr);
  }

  const sendTitle = (title) => {
    setTitle(title);
    setShowMyGoals(!showMyGoals);
  }
  const addToList = (status, title) => {
    setPost({ status, title });
    setShowAddStep(true);
  }
  return (
    <>
      <div class="w-100" id="fixed-nav">
        <div class="row" id="inside-header">
          <div class="col-11 mx-auto d-flex">
            <div class="col-6">
              <img src={logo} alt='img' class="inside-logo" />
            </div>
            <div class="col-6 ">
              <div class="col-12 d-flex flex-row-reverse p-0">
                <div class="circle-img">
                  <Dropdown >
                    <Dropdown.Toggle variant="failed" id="dropdown-basic">
                      <img className="profilePicc rounded-circle inside-logo user-img-drop ayKelme" alt="profilePicc" src={user.user.userPic} width="70px" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item >
                        <h5 className="username">{user.user.username}</h5></Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item className="dropItem" onClick={e => setShowMyGoals(true)}> <p>Dashboard</p> </Dropdown.Item>
                      <Dropdown.Item className="dropItem"> <p>About Gadha</p> </Dropdown.Item>
                      <Dropdown.Item className="dropItem">
                        <Show condition={user.loggedIn}>   <button className="dropdown-btn" onClick={user.logout}>Logout</button>   </Show>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div>
                    <img style={{cursor:'pointer'}} src={img911} alt='chatIcon' onClick={user.activateChat}/>
                </div>
                <div>
                    <img alt='addIcon' src={plus} onClick={() => setShowAddGoal(true)} class="img2" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-12"></div>
        </div>
      </div>




      <Container fluid>
        <Container fluid>
          <Row className=" justify-content-center">
            <Col xs={3} md={3} xl={3} lg={3} className=" justify-content-center tahseen">
              <Container container id="sidebar">
                <Container className="list-group border-0 text-center text-md-left justify-content-center">
                  <Col xs={12} md={12} xl={12} lg={12} className="list-group border-0 text-center text-md-left justify-content-center">
                    <div class="circle-img">
                      <img src={user.user.userPic} alt='ProfilePic' class="rounded-circle inside-logo userPicc " />
                    </div>
                    <a href="#" class="list-group-item d-inline-block collapsed" onClick={e => setShowMyGoals(true)}><span class="d-none d-md-inline">Dashboard</span></a>
                    <a href="#" class="list-group-item d-inline-block collapsed" onClick={e => user.activePage({homepage:false,dashboard:false,publicGoals:false,about:true,newUser:false})}><span class="d-none d-md-inline ">About Gadha</span></a>
                    <a href="#" class="list-group-item d-inline-block collapsed b-yellow" onClick={user.logout}><span class="d-none d-md-inline ">Logout</span></a>
                    <Container id="recent-div">
                      <img src={recent} alt="recentimg" />
                    RECENTLY VIEWED
                    <p>{title}</p>
                    </Container>
                    <Container container id="recent-div">
                      <a href="#" onClick={() => setShowAddGoal(true)}> <img src={pluss} alt='img'/>
                    ADD NEW GOAL</a>
                    </Container>
                  </Col>
                </Container>
              </Container>
            </Col>
            <Col xs={9} md={9} xl={9} lg={9} className='khalil'>
              <Container fluid className='khalil-son'>
                <Row>
                  <Col xs={12} md={12} xl={12} lg={12}>
                    <Container fluid className=" justify-content-center khalil-son">
                      <Progress done={props.myGoals.progress.progress}/>
                    </Container>
                  </Col>
                </Row>
                <Show condition={showMyGoals}>
                  <Row>
                    {uniqueState.map(post => {
                      return (
                        <Col xs={6} md={6} xl={3} lg={6}>
                          <Container fluid className=" justify-content-center">
                            <Card onClick={e => (sendTitle(post.title))} className="card3">{post.title}</Card>
                          </Container>
                        </Col>
                      )
                    })}
                    <Col xs={6} md={6} xl={3} lg={6}>
                      <Container fluid className=" justify-content-center">
                        <Card onClick={() => setShowAddGoal(true)} className="card3"><img src={pluss} alt='img' /></Card>
                      </Container>
                    </Col>
                    <Col xs={12} md={12} xl={12} lg={12}>
                      <div class="video-div text-center">
                        <h1>
                          PICKED FOR YOU | TIP FROM ADVISOR
                            </h1>
                        <iframe title='motivation' src="https://www.youtube.com/embed/KlUMrzwmbyo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay></iframe>
                      </div>

                      <div>
                        <MotivationDiv />
                      </div>
                    </Col>

                  </Row>
                </Show>
                <Show condition={!showMyGoals}>
                  <Row>
                    <Container fluid className=" justify-content-center">
                      <h2 className="h2title">Goal Title: {title}</h2>
                    </Container>
                  </Row>
                  <Row>
                    <Col xs={4} md={4} xl={4} lg={4} className="goal">
                      <p>To Do</p>
                      <Card className="card1">
                        {todo.filter(filtered => filtered.title === title).map(post => {
                          return (
                            <section key={post._id}>
                              <button className="goalBtn1" name={post._id} onClick={e => changeActive(e, post)}>{post.story} </button>
                            </section>
                          )
                        })}
                        <p className="addNew" onClick={() => addToList('todo', title)}>Add New</p>
                      </Card>
                    </Col>

                    <Col xs={4} md={4} xl={4} lg={4} className="goal">
                      <p>In Progress</p>
                      <Card className="card1">
                        {inprogress.filter(filtered => filtered.title === title).map(post => {
                          return (
                            <section key={post._id}>
                              <button className="goalBtn1" name={post._id} onClick={e => changeActive(e, post)}>{post.story} </button>
                            </section>
                          )
                        })}
                        <p className="addNew" onClick={() => addToList('inprogress', title)}>Add New</p>
                      </Card>
                    </Col>
                    <Col xs={4} md={4} xl={4} lg={4} className="goal">
                      <p>Accomplished</p>
                      <Card className="card1">
                        {complete.filter(filtered => filtered.title === title).map(post => {
                          return (
                            <section key={post._id}>
                              <button className="goalBtn1" name={post._id} onClick={e => changeActive(e, post)}>{post.story} </button>
                            </section>
                          )
                        })}
                        <p className="addNew" onClick={() => addToList('complete', title)}>Add New</p>
                      </Card>
                    </Col>
                  </Row>

                  <Show condition={showActive}>
                    <Card className="card2">
                      <div>
                        <button style={{ backgroundColor: "#EE9E6D", border: "0px" }} onClick={() => handleDelete(activeGoal._id)}><img src={bin} alt="bin" /></button>
                        <button style={{ backgroundColor: "#EE9E6D", border: "0px" }} name={activeGoal._id} onClick={() => setShowEditGoal(true)}><img src={editt} alt="editimg" /></button>
                        <p className="title">Title: {activeGoal.title}</p>
                        <p className="story">Story: {activeGoal.story}</p>
                        <p className="dueBy">Due By: {activeGoal.dueBy} </p>
                        <p className="status">Status: {activeGoal.status} </p>
                        <p className="createdAt1">Created On: {activeGoal.createdAt.split(',')[0]}</p>
                        <p className="privacy">Private: {activeGoal.private.toString()} </p>
                      </div>
                    </Card>
                    <Modal
                      show={showEditGoal}
                      onHide={() => setShowEditGoal(false)}
                      centered
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm" className='modalTitle'>
                          Edit Goal
                   </Modal.Title>
                      </Modal.Header>
                      <Modal.Body >
                        <form onSubmit={(e) => updateSubmit(activeGoal._id, e)}>
                          <input type='hidden' value={activeGoal.title} name='title' onChange={handleChange} />
                          <br />
                          <label><h5>Story</h5>
                            <input type='text' placeholder={activeGoal.story} name='story' onChange={handleChange} />
                          </label><br />
                          <div>
                            <h5> Status :</h5>
                            <select name='status' onChange={handleChange}>
                              <option value='' hidden >Choose Progress</option>
                              <option value='todo'>Todo</option>
                              <option value='inprogress'>In-Progress</option>
                              <option value='complete'>Complete</option>
                            </select>
                          </div>
                          <br />
                          <br />
                          <br />
                          <div>
                            <h5>
                              Privacy
                        </h5>
                            <select name='private' onChange={handleChange}>
                              <option value='' hidden >Choose Privacy</option>
                              <option value='true'>Private</option>
                              <option value='false'>Public</option>
                            </select>
                          </div>
                          <br />
                          <br />
                          <br />
                          <button className="signBtn">Update Goal</button>
                        </form>
                      </Modal.Body>
                    </Modal>
                  </Show>
                  <Row>
                    <Container fluid className=" justify-content-center">
                      <MotivationPost />
                    </Container>
                  </Row>
                </Show>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
      <Modal
        show={showAddStep}
        onHide={() => setShowAddStep(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm" className='modalTitle'>
            Add Step
            </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <form onSubmit={addPostSubmit}>
            <label><h5>Goal Story:</h5>
              <input type='text' placeholder='Enter Goal Story' name='story' required onChange={addPostHandler} />
            </label><br />
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
            {/* </label><br /> */}
            <label><h5>Goal Due in :</h5>
              <input type='number' min='0' max='3650' placeholder='Days' name='dueBy' required onChange={addPostHandler} />
            </label><br />
            <button className="signBtn">Add Goal</button>
          </form>
        </Modal.Body>
      </Modal>

      <Modal
        show={showAddGoal}
        onHide={() => setShowAddGoal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm" className='modalTitle'>
            Add New Goal
            </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <form onSubmit={addPostSubmit}>
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
        </Modal.Body>
      </Modal>


      <Show condition={!user.loggedIn}>
        <p>Logged out user</p>
      </Show>




      <Modal
        show={showAddStep}
        onHide={() => setShowAddStep(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm" className='modalTitle'>
            Add Step
            </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <form onSubmit={addPostSubmit}>
            <label><h5>Goal Story:</h5>
              <input type='text' placeholder='Enter Goal Story' name='story' required onChange={addPostHandler} />
            </label><br />
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
            {/* </label><br /> */}
            <label><h5>Goal Due in :</h5>
              <input type='number' min='0' max='3650' placeholder='Days' name='dueBy' required onChange={addPostHandler} />
            </label><br />

            <button className="signBtn">Add Goal</button>
          </form>
        </Modal.Body>
      </Modal>


    </>
  )}
// }


const mapStateToProps = state => ({
  myGoals: state.ownGoals,
});

const mapDispatchToProps = dispatch => ({
  getOwn: () => dispatch(actions.getOwnGoalsAPI()),
  updOwn: (obj, id) => dispatch(actions.updateOwnGoalsAPI(obj, id)),
  delOwn: id => dispatch(actions.deleteOwnGoalsAPI(id)),
  progress: () => dispatch(actions.progressAPI()),
  postGoal: obj => dispatch(actions.postOwnGoalsAPI(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
