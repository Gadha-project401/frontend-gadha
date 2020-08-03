import React , { useEffect,useState} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const Posts = props =>{
    const [counter, setCounter] = useState(0);

    const fetchData = e =>{
        e && e.preventDefault();
        props.get();
    }

    const addition =()=>{
        setCounter(counter+1);
    }

    useEffect(()=>{
        fetchData()},
        []) // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <>
         <div className="container">
             {props.posts.posts.map((post,idx)=>{
                 return(
                     <div key={post._id}>
                         {}
                         {/* <img className="profilePic" src={post.virtualOwner.profilePic}/> */}
                         <h5 className="createdBy" >{post.createdBy}</h5>
                         <p className="createdAt">{post.createdAt}</p>
                         <p className="title">{post.title}</p>
                         <p className="story">{post.story}</p>
                         <p>{counter}</p>
                         <button onClick={addition}>like</button>
                     </div>
                 )
             })}

         </div>
        </>
    )
}


const mapStateToProps = state => ({
    posts: state.motivation,

});

const mapDispatchToProps = (dispatch, getState) => ({
    get: ()=> dispatch(actions.getRemoteData()),
    // put: (id, data) => dispatch(actions.putRemoteData(id, data))
});

export default connect(mapStateToProps,mapDispatchToProps)(Posts);
