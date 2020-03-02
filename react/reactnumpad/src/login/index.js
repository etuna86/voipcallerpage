import React,{Component} from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import  {loginAuth}  from '../../redux/actions/index.js' ;
import {
    BrowserRouter as Router,
    withRouter,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import {setAuthorizationToken} from "../../redux/actions/index";
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            getNumberValue:'',
            errorMessage:'you cannot enter characters',
            getClientsLogs:'clients logs',
            userLoginTextEmail:'',
            userLoginTextPass:'',
            userLoginEmail:'erol@extratik.com',
            userLoginPass:'123',
            userEmailCheck:false,
            userPassCheck:false,
            remembermeIsChecked:false,
            forgotYourPassMailText:'',
            forgotYourPassMail:'erol@extratik.com',
            forgotEmailCheck:false,
            registerName:'erol',
            registerEmail:'erol@extratik.com',
            registerPassword:'',
            registerRequiredPassword:'',
            termOfUse:false,
            termOfUseCheck:false,
            registerNameCheck:false,
            registerEmailCheck:false,
            registerPasswordCheck:false,
            registerRequiredPasswordCheck:false,
            equalPasswordCheck:false,
            jwtToken:'',
            jwtTokenUnlockKey:'',
            toCallerPage:true,
        }
    }
    componentDidMount() {
            console.warn("props: ",this.props);
    }
    userLoginTextEmailChange=(e)=>{
        console.warn("userLoginTextEmail: ",this.state.userLoginTextEmail);
        this.setState({
            userLoginTextEmail:e.target.value,
        })
    }
    userLoginTextPassChange=(e)=>{
        console.warn("userLoginTextPass: ",this.state.userLoginTextPass);
        this.setState({
            userLoginTextPass:e.target.value,
        })
    }
    roRedirect=()=>{
        console.warn("tıklandı: ");
        let userData = {
            username: "e.tuna@extratik.com",
            password: "123"
        }
        const token='tokenname';
       // setAuthorizationToken(token);
        /*axios.post('http://localhost:5001/banajasonver', userData).then(res =>{
            console.warn("token3",token);
            //const token='token';
            localStorage.setItem('jwtToken',token)
            setAuthorizationToken(token);
        });*/
        loginAuth('/banajasonver',token);
        this.props.history.push("/callerpage");
        //return  ( <Router history={this.props.history}  > <Route>  <Redirect push={true} to={"/callerpage"} /> </Route> </Router>  ) ;
    }
    login=(e)=>{
        //history.push("/callerpage");
        this.roRedirect();

        /*
        console.warn("this.state.toCallerPage1: ",this.state.toCallerPage);
       let userData = {
            useremail: this.state.userLoginTextEmail,
            userpassword: this.state.userLoginTextPass
        }

        if (this.state.toCallerPage === true) {

        }
              console.warn("userData: ",userData);
              axios.post('http://192.168.3.39:8080/loginx', userData)
                  .then(res => {
                      //jwt
                  console.warn("res.data: ",res.data);
            })
            .catch(err => console.log("err get: "+ err))

        */

        let data = {
            useremail: this.state.userLoginEmail,
            userpassword: this.state.userLoginPass
        }
        if(this.state.userLoginTextEmail==this.state.userLoginEmail){
            if(this.state.userLoginTextPass==this.state.userLoginPass){
                console.warn("login Success ");
                console.warn("this.state.userLoginTextEmail: ",this.state.userLoginTextEmail);
                console.warn("this.state.userLoginTextPass: ",this.state.userLoginTextPass);
            }else{
                this.setState({
                    userPassCheck:true,
                })
                setTimeout(
                    function() {
                        this.setState({userPassCheck:false});
                    }
                        .bind(this),
                    2000
                );
            }
        }
        else{
            this.setState({
                userEmailCheck:true,
            })
            setTimeout(
                function() {
                    this.setState({userEmailCheck:false});
                }
                    .bind(this),
                2000
            );
        }

        e.preventDefault();
    }
    remembermeIsCheckedChange=()=>{
        this.setState({
            remembermeIsChecked:!this.state.remembermeIsChecked,
        })
        console.warn("remembermeIsChecked: ",this.state.remembermeIsChecked);
    }
    forgotYourPasswordChanges=(e)=>{
        this.setState({
            forgotYourPassMailText:e.target.value,
        })
    }
    forgotYourPasswordSend=(e)=>{
        if(this.state.forgotYourPassMailText==this.state.forgotYourPassMail){
            console.warn("mail sending Message");
        }
        else {
            this.setState({
                forgotEmailCheck:true,
            })
            setTimeout(
                function() {
                    this.setState({forgotEmailCheck:false});
                }
                    .bind(this),
                2000
            );
        }
        e.preventDefault();
    }
    registerNameChange=(e)=>{
        this.setState({
            registerName:e.target.value,
        })

    }
    registerEmailChange=(e)=>{
        this.setState({
            registerEmail:e.target.value,
        })

    }
    registerPasswordChange=(e)=>{
        this.setState({
            registerPassword:e.target.value,
        })

    }
    registerrequiredPasswordChange=(e)=>{
        this.setState({
            registerRequiredPassword:e.target.value,
        })

    }
    termofUseChange=()=>{
        this.setState({
            termOfUse:!this.state.termOfUse,
        })
    }
    register=()=>{
        if (this.state.registerName==''){
            this.setState({
                registerNameCheck:true,
            })
            setTimeout(
                function() {
                    this.setState({registerNameCheck:false});
                }
                    .bind(this),
                2000
            );
        }
        else if(this.state.registerEmail=='') {
            this.setState({
                registerEmailCheck:true,
            })
            setTimeout(
                function() {
                    this.setState({registerEmailCheck:false});
                }
                    .bind(this),
                2000
            );
        }
        else if(this.state.registerPassword=='') {
            this.setState({
                registerPasswordCheck:true,
            })
            setTimeout(
                function() {
                    this.setState({registerPasswordCheck:false});
                }
                    .bind(this),
                2000
            );
        }
        else if(this.state.registerRequiredPassword=='') {
            this.setState({
                registerRequiredPasswordCheck:true,
            })
            setTimeout(
                function() {
                    this.setState({registerRequiredPasswordCheck:false});
                }
                    .bind(this),
                2000
            );
        }
        else{
            if(this.state.registerRequiredPassword==this.state.registerPassword) {


                if(this.state.termOfUse==true){
                    //axios


                    console.warn("this.state.registerName: ",this.state.registerName);
                    console.warn("this.state.registerEmail: ",this.state.registerEmail);
                    console.warn("this.state.registerPassword: ",this.state.registerPassword);
                    console.warn("this.state.registerRequiredPassword: ",this.state.registerRequiredPassword);

                }
                else {
                    this.setState({
                        termOfUseCheck:true,
                    })
                    setTimeout(
                        function() {
                            this.setState({termOfUseCheck:false});
                        }
                            .bind(this),
                        2000
                    );
                }
            }
            else{
                this.setState({
                    equalPasswordCheck:true,
                })
                setTimeout(
                    function() {
                        this.setState({equalPasswordCheck:false});
                    }
                        .bind(this),
                    2000
                );
            }

        }
    }


    render(){
        return (
            <div className="login-screen">
                <div className="panel-login blur-content">
                    <div className="panel-heading">
                        <img src="img/logo.png" height="100" alt="" />
                    </div>
                    <div id="pane-login" className="panel-body active">
                        <h2>Login to Dashboard</h2>
                        <div className="form-group">
                            <div className="inputer">
                                <div className="input-wrapper">
                                    <input  onChange={this.userLoginTextEmailChange}  value={this.state.userLoginTextEmail}  type="email" className="form-control" placeholder="Enter your email address" />
                                </div>
                            </div>
                            <div className={ !this.state.userEmailCheck ? 'hidden' : 'alert-danger-transparent  '  }   role="alert">
                                <strong>Wrong Email </strong>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="inputer">
                                <div className="input-wrapper">
                                    <input onChange={this.userLoginTextPassChange}  value={this.state.userLoginTextPass}  type="password" className="form-control" placeholder="Enter your password" />
                                </div>
                            </div>
                            <div className={ !this.state.userPassCheck ? 'hidden' : 'alert-danger-transparent  '  }   role="alert">
                                <strong>Wrong Password </strong>
                            </div>
                        </div>
                        <div className="form-buttons clearfix">
                            <label className="pull-left">
                                <input  onClick={this.remembermeIsCheckedChange}   defaultChecked={this.state.remembermeIsChecked} type="checkbox" name="remember" value="1" />
                                Remember me</label>
                            <button onClick={this.login} type="submit" className="btn btn-success pull-right">Login</button>
                        </div>
                        <div className="social-accounts">
                            <div className="btn-group btn-merged btn-group-justified">
                                <div className="btn-group">
                                    <a className="btn btn-social btn-facebook"><i className="fa fa-facebook"> </i> Facebook</a>
                                </div>
                                <div className="btn-group">
                                    <a className="btn btn-social btn-github"><i className="fa fa-github"> </i> Github</a>
                                </div>
                            </div>
                        </div>
                        <ul className="extra-links">
                            <li><a href="#" className="show-pane-forgot-password">Forgot your password</a></li>
                            <li><a href="#" className="show-pane-create-account">Create a new account</a></li>
                        </ul>
                    </div>
                    <div id="pane-forgot-password" className="panel-body">
                        <h2>Forgot Your Password</h2>
                        <div className="form-group">
                            <div className="inputer">
                                <div className="input-wrapper">
                                    <input  onChange={this.forgotYourPasswordChanges} value={this.state.forgotYourPassMailText} type="email" className="form-control" placeholder="Enter your email address" />
                                </div>
                            </div>
                            <div className={ !this.state.forgotEmailCheck ? 'hidden' : 'alert-danger-transparent  '  }   role="alert">
                                <strong>Wrong Email </strong>
                            </div>
                        </div>
                        <div className="form-buttons clearfix">
                            <button type="submit" className="btn btn-white pull-left show-pane-login">Cancel</button>
                            <button onClick={this.forgotYourPasswordSend } type="submit" className="btn btn-success pull-right">Send</button>

                        </div>

                    </div>
                    <div id="pane-create-account" className="panel-body">
                        <h2>Create a New Account</h2>
                        <div className="form-group">
                            <div className="inputer">
                                <div className="input-wrapper">
                                    <input onChange={this.registerNameChange}  value={this.state.registerName} type="text" className="form-control" placeholder="Enter your full name" />
                                </div>
                            </div>
                            <div className={ !this.state.registerNameCheck ? 'hidden' : 'alert-danger-transparent '  }   role="alert">
                                <strong>this field is empty </strong>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="inputer">
                                <div className="input-wrapper">
                                    <input onChange={this.registerEmailChange} value={this.state.registerEmail} type="email" className="form-control" placeholder="Enter your email address" />
                                </div>
                            </div>
                            <div className={ !this.state.registerEmailCheck ? 'hidden' : 'alert-danger-transparent '  }   role="alert">
                                <strong>this field is empty </strong>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="inputer">
                                <div className="input-wrapper">
                                    <input onChange={this.registerPasswordChange} value={this.state.registerPassword} type="password" className="form-control" placeholder="Enter your password" />
                                </div>
                            </div>
                            <div className={ !this.state.registerPasswordCheck ? 'hidden' : 'alert-danger-transparent '  }   role="alert">
                                <strong>this field is empty </strong>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="inputer">
                                <div className="input-wrapper">
                                    <input  onChange={this.registerrequiredPasswordChange} value={this.state.registerRequiredPassword} type="password" className="form-control" placeholder="Enter your password again" />
                                </div>
                            </div>
                            <div className={ !this.state.registerRequiredPasswordCheck ? 'hidden' : 'alert-danger-transparent '  }   role="alert">
                                <strong>this field is empty </strong>
                            </div>
                            <div className={ !this.state.equalPasswordCheck ? 'hidden' : 'alert-danger-transparent '  }   role="alert">
                                <strong>Password Not Match </strong>
                            </div>

                        </div>
                        <div className="form-group">
                            <label><input   defaultChecked={this.state.termOfUse}  onChange={this.termofUseChange} type="checkbox" name="remember" value="1" /> I have read and agree to the term of use.</label>
                        </div>
                        <div className="form-buttons clearfix">
                            <button type="submit" className="btn btn-white pull-left show-pane-login">Cancel</button>
                            <button  disabled={!this.state.termOfUse}  onClick={this.register} type="submit" className="btn btn-success pull-right">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
