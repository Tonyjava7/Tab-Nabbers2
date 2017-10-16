/**
 * Import modules and components to render on the home page
 * also import the home scss as well
 */
import React from "react";
import Modal from '../components/common/Modal';
import {Signup, Signin} from '../components/StudentLogin/index';
import '../public/css/home.scss';


/**
 * Home component that renders the home page
 * Every modal has a button attached that helps firing the Modal on click
 */
class Home extends React.Component{
    constructor(){
        super();

        this.state = {
            isSignIn:true
        };

        this.toggleSignUp = this.toggleSignUp.bind(this);
    }

    /**
     * Switching from Sign In and Sign Up Modal
     * @method toggleSignUp
     */
    toggleSignUp() {
        this.setState({isSignIn: !this.state.isSignIn});
    }


    render(){

        let employer = 'Employer';
        let student = 'Student';

        const {isSignIn} = this.state;
        return(
            <div className="home--component layout">

                <div className="banner--list layout">
                    <h1>Bootcruit</h1>
                    <ul className="layout">
                        <li>About</li>
                        <li>Feature</li>
                        <li>Contact</li>
                    </ul>
                </div>


                <h3> Bootcruit </h3>
                <p>Single-Click Staffing Solutions</p>
                <div className="buttons--container">
                    <Modal
                        name = {employer} title = {isSignIn ? 'Employer Sign up ' : 'Employer Login '}
                        toggleSignUp = {this.toggleSignUp}
                        footer = {isSignIn ? 'Already have an account?'  : 'Or Create an account?'}
                        >
                        {isSignIn ?  <Signup />:  <Signin/>}
                    </Modal>


                    <Modal
                        name = {student}
                        title = {isSignIn ? 'Student Sign Up ' : 'Student Sign In'}
                        footer = {isSignIn ? 'Already have an account?'  : 'Or Create an account?'}
                        toggleSignUp = {this.toggleSignUp} >
                        {isSignIn ?  <Signup />:  <Signin/>}
                    </Modal>
                </div>
            </div>
        )
    }
}



export default Home;
