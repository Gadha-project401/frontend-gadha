// React Stuff
import React, { useContext, useEffect, useState ,Component} from 'react';
import { LoginContext } from '../auth/context';
import Show from '../auth/show';
import './dashboard.scss';
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Modal from 'react-bootstrap/Modal'
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";



// Redux Stuff
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

const Dashboard = props => {

  let user = useContext(LoginContext);

  const [object, setObject] = useState({});
  const [addPost, setAddPost] = useState(false);
  const [post, setPost] = useState({});
  const [edit, setEdit] = useState({});
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
    setShowActive(!showActive);
    setShowEditGoal(false);
  };

  const handleChange = e => {
    setObject({ ...object, [e.target.name]: e.target.value });
  }

  const handleDelete = id => {
    props.delOwn(id);
  }

  const addPostSubmit = e => {
    e.preventDefault();
    props.postGoal(post);
    setAddPost(!addPost);
    setShowAddGoal(false)
    setShowAddStep(false)
  }

  const addPostHandler = e => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const uniqueTitles = () => {

    let resArr = [];
    props.myGoals.myGoals.forEach(function (item) {
      let i = resArr.findIndex(x => x.title == item.title);
      if (i <= -1) {
        resArr.push({ ...item });
      }
    });
    setUniqueState(resArr);
  }

  const sendTitle = (title) => {
    setTitle(title);
    setShowMyGoals(!showMyGoals);
    
    console.log('title', title);
  }

  const addToList = (status, title) => {
    setPost({ status, title });
    setShowAddStep(true);
   
  }






// if(props.myGoals.myGoals.length===0){
//   return(
//     <NewUser/>
//   )
  
// }else {
  return (
    <>
      <Container>
        <Row>
          <Col sm={4}>
            <Row>
              <img className="profilePic" src={user.user.userPic} alt='ProfilePic' />
            </Row>
            <Row>
              <ul>
                {/* <li onClick={showAddForm}> Add new goal</li> */}
                <li onClick={() => setShowAddGoal(true)}> Add new goal</li>
                <li>Motivational Posts</li>
                <li>Users achievements</li>
                <li onClick={e => setShowMyGoals(true)}>My Goals</li>
                <li>Logout</li>
              </ul>
            </Row>
          </Col>
          <Col sm={8}>
            <Row>
              <Col>
                <ProgressBar variant="success" now={props.myGoals.progress.progress} label={`${props.myGoals.progress.progress}%`} />
              </Col>
            </Row>
            <Show condition={showMyGoals}>
              <Row>

                {uniqueState.map(post => {
                  return <button onClick={e => (sendTitle(post.title))}>{post.title}</button>
                })}

              </Row>
            </Show>
            <Show condition={!showMyGoals}>
              <Row>
                <div>
                  <p>{title}</p>
                </div>
              </Row>
              <Row>
                <Col className="goal">
                  <div> <p>To Do List</p>
                    {todo.filter(filtered => filtered.title === title).map(post => {
                      return (
                        <section key={post._id}>
                          <button className="goalBtn" name={post._id} onClick={e => changeActive(e, post)}>{post.story} </button>
                        </section>
                      )
                    })}
                    <button onClick={() => addToList('todo', title)}>+</button>
                  </div>
                </Col>
                <Col className="goal">
                  <div> <p>In Progress List</p>
                    {inprogress.filter(filtered => filtered.title === title).map(post => {
                      return (
                        <section key={post._id}>
                          <button className="goalBtn" name={post._id} onClick={e => changeActive(e, post)}>{post.story} </button>
                        </section>
                      )
                    })}
                    <button onClick={() => addToList('inprogress', title)}>+</button>
                  </div>
                </Col>
                <Col className="goal">
                  <div> <p>Accomplished List</p>
                    {complete.filter(filtered => filtered.title === title).map(post => {
                      return (
                        <section key={post._id}>
                          <button className="goalBtn" name={post._id} onClick={e => changeActive(e, post)}>{post.story} </button>
                        </section>
                      )
                    })}
                    <button onClick={() => addToList('complete', title)}>+</button>
                  </div>
                </Col>
              </Row>
              {/* <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} /> */}
              <Show condition={showActive}>
                <div>
                  <button onClick={() => handleDelete(activeGoal._id)}>DELETE GOAL</button>
                  <p className="title">Title: {activeGoal.title}</p>
                  <p className="story">Story: {activeGoal.story}</p>
                  <p className="dueBy">Due By: {activeGoal.dueBy} </p>
                  <p className="status">Status: {activeGoal.status} </p>
                  <p className="createdAt">Created On: {activeGoal.createdAt.split(',')[0]}</p>
                  <p className="privacy">Private: {activeGoal.private.toString()} </p>
                </div>
                {/* <button name={activeGoal._id} onClick={showEditForm}>Edit Goal</button> */}
                <button name={activeGoal._id} onClick={() => setShowEditGoal(true)}>Edit Goal</button>
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
                    {/* <Show condition={edit[activeGoal._id]}> */}
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
                    {/* </Show> */}
                  </Modal.Body>
                </Modal>
              </Show>
            </Show>
          </Col>
        </Row>
      </Container>

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
            {/* <label>  */}
            <div>
              <h5> Goal Status:</h5>
              <select name='status' onChange={addPostHandler} required>
                <option value='' hidden >Set Status</option>
                <option value='todo'>To Do</option>
                <option value='inprogress'>In Progress</option>
                <option value='complete'>Complete</option>
              </select>
            </div>
            {/* </label> */}
            <br />
            <br />
            <br />
            {/* <label> */}
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



