// React Stuff
import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../auth/context';
import Show from '../auth/show';
import './dashboard.scss';
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'
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
  };

  const handleChange = e => {
    setObject({ ...object, [e.target.name]: e.target.value });
  }

  const handleDelete = id => {
    props.delOwn(id);
  }

  const showAddForm = e => {
    setAddPost(!addPost);
  }

  const showEditForm = e => {
    if (edit[e.target.name] === undefined) {
      setEdit({ ...edit, [e.target.name]: true })
    } else {
      setEdit({ ...edit, [e.target.name]: !edit[e.target.name] });
    }
  }

  const addPostSubmit = e => {
    e.preventDefault();
    props.postGoal(post);
    setAddPost(!addPost);
  }

  const addPostHandler = e => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

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
                <li onClick={showAddForm}> Add new goal</li>
                <li>Motivational Posts</li>
                <li>Users achievements</li>
                <li>Logout</li>
              </ul>
            </Row>
          </Col>
          <Col  sm={8}>
            <Row>
              <Col>
                <ProgressBar variant="success" now={props.myGoals.progress.progress} label={`${props.myGoals.progress.progress}%`} />
              </Col>
            </Row>
            <Row>

              <Col className="goal">
                <div> <p>To Do List</p>
                  {todo.map(post => {
                    return (
                      <section key={post._id}>
                        <button  className="goalBtn" name={post._id} onClick={e => changeActive(e, post)}>{post.title} </button>
                      </section>
                    )
                  })}
                </div>

              </Col>

              <Col className="goal">
                <div> <p>In Progress List</p>
                  {inprogress.map(post => {
                    return (
                      <section key={post._id}>
                        <button className="goalBtn" name={post._id} onClick={e => changeActive(e, post)}>{post.title} </button>
                      </section>
                    )
                  })}
                </div>
              </Col>
              <Col className="goal">
                <div> <p>Accomplished List</p>
                  {complete.map(post => {
                    return (
                      <section key={post._id}>
                        <button  className="goalBtn" name={post._id} onClick={e => changeActive(e, post)}>{post.title} </button>
                      </section>
                    )
                  })}
                </div>
              </Col>
            </Row>
            <Show condition={showActive}>
          <div>
              <button onClick={()=>handleDelete(activeGoal._id)}>DELETE GOAL</button>
              <p className="title">Title: {activeGoal.title}</p>
              <p className="story">Story: {activeGoal.story}</p>
              <p className="dueBy">Due By: {activeGoal.dueBy} </p>
              <p className="status">Status: {activeGoal.status} </p>
              <p className="createdAt">Created On: {activeGoal.createdAt.split(',')[0]}</p>
              <p className="privacy">Private: {activeGoal.private.toString()} </p>
          </div>
          <button name={activeGoal._id} onClick={showEditForm}>Edit Goal</button>
          <Show condition={edit[activeGoal._id]}>
          <form onSubmit={(e) => updateSubmit(activeGoal._id, e)}>
            <label>Title
                <input type='text' placeholder={activeGoal.title} name='title' onChange={handleChange} />
            </label><br/>
            <label>Story
                <input type='text' placeholder={activeGoal.story} name='story' onChange={handleChange} />
            </label><br/>
            <label>Status
              <select name='status' onChange={handleChange}>
                <option value='' hidden >Choose Progress</option>
                <option value='todo'>Todo</option>
                <option value='inprogress'>In-Progress</option>
                <option value='complete'>Complete</option>
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
          </Show>
          </Show>
          </Col>
          
        </Row>
        
      </Container>



      {/* <button onClick={showAddForm}>Add new goal</button> */}

      {/* <img className="profilePic" src={user.user.userPic} alt='ProfilePic' /> */}
      <Show condition={addPost}>
        <form onSubmit={addPostSubmit}>

          <label>Goal Title:
              <input type='text' placeholder='Enter Goal Title' name='title' required onChange={addPostHandler} />
          </label><br />

          <label>Goal Story:
              <input type='text' placeholder='Enter Goal Story' name='story' required onChange={addPostHandler} />
          </label><br />

          <label>Goal Status:
              <select name='status' onChange={addPostHandler} required>
              <option value='' hidden >Set Status</option>
              <option value='todo'>To Do</option>
              <option value='inprogress'>In Progress</option>
              <option value='complete'>Complete</option>
            </select>
          </label><br />

          <label>Goal Privacy:
              <select name='private' onChange={addPostHandler} required>
              <option value='' hidden >Set Privacy</option>
              <option value='true'>Private</option>
              <option value='false'>Public</option>
            </select>
          </label><br />

          <label>Goal Due in :
              <input type='number' min='0' max='3650' placeholder='Days' name='dueBy' required onChange={addPostHandler} /> Days
          </label><br />

          <button>Add Goal</button>
        </form>


      </Show>


      <Show condition={!user.loggedIn}>
        <p>Logged out user</p>
      </Show>
    </>
  )
}

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




// {props.myGoals.myGoals.map(post => {

//   return (
//     <section className="goal" key={post._id}>
//       <div>
//         <Row className="justify-content-md-center">
//           <Col><FaEdit name={post._id} onClick={showEditForm} /></Col>
//           <Col><FaRegTrashAlt onClick={() => handleDelete(post._id)} /></Col>
//         </Row>

//         <p className="createdAt">Created On: {post.createdAt.split(',')[0]}</p>
//         <p className="title">Title: {post.title}</p>
//         <p className="story">Story: {post.story}</p>
//         <p className="dueBy">Due By: {post.dueBy} </p>
//         <p className="status">Status: {post.status} </p>
//         {/* <h5 className="createdBy" >Created By: {post.createdBy}</h5> */}
//         {/* <p className="privacy">Private: {post.private.toString()} </p> */}


//       </div>
//       <Show condition={edit[post._id]}>
//         <form onSubmit={(e) => updateSubmit(post._id, e)}>
//           <label>Title
//     <input type='text' placeholder={post.title} name='title' onChange={handleChange} />
//           </label><br />
//           <label>Story
//     <input type='text' placeholder={post.story} name='story' onChange={handleChange} />
//           </label><br />
//           <label>Status
//   <select name='status' onChange={handleChange}>
//               <option value='' hidden >Choose Progress</option>
//               <option value='inprogress'>In-Progress</option>
//               <option value='complete'>Complete</option>
//               <option value='failed'>Failed</option>
//             </select>
//           </label><br />
//           <label>Privacy
//   <select name='private' onChange={handleChange}>
//               <option value='' hidden >Choose Privacy</option>
//               <option value='true'>Private</option>
//               <option value='false'>Public</option>
//             </select>
//           </label><br />

//           <button>Update Goal</button>
//         </form>
//       </Show>
//     </section>

//   )
// })}