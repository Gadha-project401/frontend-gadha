import React, { Component , useContext} from 'react'
// import 'bulma/css/bulma.min.css'
import './dashboard.scss'
import Form from '../forms/addGoal'
import { LoginContext } from '../auth/context';

class Step1 extends Component {
  render() {
    const { handleChange, nextStep } = this.props

    return (
      <div>
        <div className="field">
            <h6>Welcome to</h6>
            <h3>GADHA</h3>
            <p>You Can Add Anything You Want To Do, Or Acomplish ..</p>
            <p>Let's Get Started ..</p>
        </div>
        <p className="control">
          <button onClick={nextStep} className="button">
            Next
          </button>
        </p>
      </div>
    )
  }
}

class Step2 extends Component {
  render() {
    const { handleChange, nextStep } = this.props

    return (
      <div>
        <div className="field">

          <h3>First</h3>
          <p> You Need To Add One Goal You Want To Achive ...</p>
          <div className="formContainer">
            <Form/>
          </div>
         
        </div>
        <p className="control">
          <button onClick={this.props.nextStep} className="button">
            Next
          </button>
        </p>
      </div>
    )
  }
}

const Step3 = props => {
    let user = useContext(LoginContext);
    const { handleChange, nextStep } = props
    const openDashboard = () =>{
      user.activePage({homepage:true,dashboard:false,publicGoals:false,about:false,newUser:false},)
    }

    return (
      <div>
        <div className="field">

          <p>Now You Are Ready To Get Started </p>
          <p>Always remember ... you can do it </p>
        </div>
        <p className="control">
          <button onClick={openDashboard} className="button">
            Keep Moving 
          </button>
        </p>
      </div>
    )
  }


const maxStep = 3

export default class extends Component {
  state = {
    stepNo: 1,
    user: {}
  }

  nextStep = this.nextStep.bind(this)
  gotoStep = this.gotoStep.bind(this)
  handleChange = this.handleChange.bind(this)

  renderComponent() {
    const props = {
      nextStep: this.nextStep,
      handleChange: this.handleChange
    }

    switch (this.state.stepNo) {
      case 2:
        return <Step2 {...props} />

      case 3:
        return <Step3 {...props} />

      default:
        return <Step1 {...props} />
    }
  }

  nextStep() {
    if (this.state.stepNo < maxStep)
      this.setState(state => {
        const stepNo = state.stepNo + 1

        return {
          stepNo
        }
      })
  }

  gotoStep(stepNo) {
    this.setState({ stepNo })
  }

  handleChange(e) {
    const user = {
      ...this.state.user,
      [e.target.name]: e.target.value
    }

    this.setState({
      user
    })
  }

  render() {
    return (
      <div>
        <div className="body">
          <div className="step">
            {new Array(maxStep).fill().map((each, idx) => {
              return (
                <span
                  key={idx}
                  onClick={this.gotoStep.bind({}, idx + 1)}
                  className={this.state.stepNo === idx + 1 ? 'active' : ''}
                />
              )
            })}
          </div>
          <div className="form">{this.renderComponent()}</div>
          {/* <pre>{JSON.stringify(this.state.user)}</pre> */}
        </div>
      </div>
    )
  }
}
