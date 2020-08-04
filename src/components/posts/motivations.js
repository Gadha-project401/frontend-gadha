import React, { useEffect,useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import clab from "../../img/clab.png";
import { Col, Row, Container} from 'react-bootstrap';
import hug from "../../img/hug.png";
import giveStar from "../../img/giveStar.png";
import raiseHat from "../../img/raiseHat.png";

const Posts = props => {

    const [counter, setCounter] = useState(0);

    const fetchData = e => {
        e && e.preventDefault();
        props.get();
    }

    const addLike = () =>{
        setCounter(counter+1);
    }
    
    useEffect(() => {
        fetchData()
    },
        []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <div>
                {props.posts.posts.map((post, idx) => {
                    return (
                        <Container fluid className="motevationDiv justify-content-center">
                        <div key={post._id}>
                            <Row>
                            <Col xs={2} md={2} xl={2} lg={2}>
                            <img className="rounded-circle inside-logo" src={post.virtualOwner.profilePic} />
                            <h5 className="createdBy" >{post.createdBy}</h5>
                            <p className="createdAt">{post.createdAt}</p>
                            </Col>
                            <Col xs={10} md={10} xl={10} lg={10}>
                            <button onClick={addLike} style={{ backgroundColor: "#FFF7EB", border: "0px" }}><img src={clab} alt="clab" /></button>
                            <button onClick={addLike} style={{ backgroundColor: "#FFF7EB", border: "0px" }} ><img src={hug} alt="hug" /></button>
                            <button onClick={addLike} style={{ backgroundColor: "#FFF7EB", border: "0px" }} ><img src={giveStar} alt="giveStar" /></button>
                            <button onClick={addLike}  style={{ backgroundColor: "#FFF7EB", border: "0px" }} ><img src={raiseHat} alt="raiseHat" /></button>
                            <button onClick={addLike}  style={{ backgroundColor: "#FFF7EB", border: "0px" }} >{counter}</button>
                            <h5 className="title">{post.title}</h5>
                            <p className="story">{post.story}</p>
                            </Col>
                            </Row>
                        </div>
                        </Container>
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
    get: () => dispatch(actions.getRemoteData()),
    // put: (id, data) => dispatch(actions.putRemoteData(id, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
