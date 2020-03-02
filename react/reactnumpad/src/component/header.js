import React,{Component} from 'react';
import Switch from "react-switch";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class HeaderComponent extends Component{


    constructor(props){
        super(props);
        this.state={
            callChecked:false,
            modalOpen:false,
            userName:'Erol',
            userAvatar:'img/i.png',
            userSurName:'Tuna',
            newPassTextDisabled:true,
            oldPass:'123',
            newPassCheck:false,
            textPass:'',
            newPass:'',
            isOnline:true,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {

    }
    handleChange(callChecked) {
        console.warn("callChecked:",callChecked);

        this.setState({ callChecked });
    }
    callCheckedChange=()=>{
        this.setState({
            callChecked:this.state.callChecked,
        })
    }
    toggleModal=()=>{
        console.warn("modalOpen:",this.state.modalOpen);
        this.setState({
            modalOpen:!this.state.modalOpen,
        })
    }

    textPassChange=(e)=>{
        e.preventDefault();
        console.warn("textPassChange:",e.target.value);
        this.setState({
            textPass:e.target.value,
        })
        if ( this.state.oldPass==  e.target.value)
        {
            this.setState({
                newPassTextDisabled:false,
            })
        }
        else {
            this.setState({
                newPassTextDisabled:true,
            })
        }
    }
    newPassChange=(e)=>{
        e.preventDefault();
        console.warn("newPassChange:",e.target.value);
        this.setState({
            newPass:e.target.value,
        })
    }
    changeMyPassword=(e)=>{
        e.preventDefault();
        if (this.state.newPass==''){
            this.setState({
                newPassCheck:true,
            })
            setTimeout(
                function() {
                    this.setState({newPassCheck:false});
                }
                    .bind(this),
                2000
            );
        }
        else {
            this.setState({
                newPassCheck:false,
            })
        }
        console.warn("newPass :",this.state.newPass);
    }
    render() {
        const divStyle = {
            display: 'none',
        };
        const wifiStyle = {
            color: '#fff',
        };
        const wifiStyleGreen = {
            color: '#36e131',
        };
        return (
            <div >
                <div className="page-header full-content" >

                    <div className="row">
                        <div className="col-sm-3">
                            <img className="voip-logo"  src="img/logo.png" alt="" />
                        </div>
                        <div className="col-sm-3">
                            <div className="row example-row automatic-call-status">
                                <div className="col-md-8 text-right">Automatic Call Status</div>
                                <div className="col-md-4">
                                    <Switch
                                        className="react-switch"
                                        onChange={this.handleChange}
                                        checked={this.state.callChecked}
                                        handleDiameter={20}
                                        height={10}
                                        width={80}
                                        onColor="#36e131"
                                        offColor="#e3b9cd"
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        boxShadow="0px 1px 2px rgba(0, 0, 0, 0.6)"
                                        activeBoxShadow="0px 0px 1px 2px rgba(0, 0, 0, 0.2)"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="col-sm-6">
                                <div className="wifi-section">
                                    <ion-icon  style={this.state.isOnline ? wifiStyleGreen : wifiStyle } ios="ios-wifi" md="ios-wifi" > </ion-icon>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <ul className="list-material">
                                    <li className="has-action-left">
                                    </li>
                                    <div className="btn-group user-avatar-menu">
                                        <button type="button" className="btn btn-default" data-toggle="dropdown"
                                                aria-expanded="false">
                                            <div className="user-avatar">
                                                <img src={this.state.userAvatar} className="face-radius" alt="" />
                                                    <span>{this.state.userName+" "+this.state.userSurName}</span>
                                                    <span><ion-icon name="arrow-dropdown"> </ion-icon></span>
                                            </div>
                                        </button>
                                        <ul className="dropdown-menu" role="menu">
                                            <div className="arrow-down"> </div>
                                            <li><a href="#">
                                                <ion-icon ios="ios-images" md="md-images"> </ion-icon>
                                                Change My Profile</a></li>
                                            <li><a href="#" onClick={this.toggleModal}   >
                                                <ion-icon ios="ios-unlock" md="md-unlock"> </ion-icon>
                                                Change My Password</a></li>
                                            <li className="divider"></li>
                                            <li><a href="#" className="active"><i className="ion-home "> </i> Logout </a>
                                            </li>
                                        </ul>
                                    </div>
                                </ul>
                            </div>
                            <div className="col-sm-1">
                                <div className="full-screen-button">
                                    <ion-icon name="expand" onclick="fullscreen()"> </ion-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal className={"scale newpass-modal"} isOpen={this.state.modalOpen} toggle={this.toggleModal} role={"dialog"} >
                    <ModalHeader toggle={this.toggleModal} >Change My Password</ModalHeader>
                    <ModalBody>
                        <div className="panel-body">
                            <form action="#" className="form-horizontal">
                                <div className="form-content">
                                    <div className="form-group">
                                        <div className="col-md-12">
                                            <label className="control-label ">Password</label>
                                            <div className="inputer">
                                                <div className="input-wrapper">
                                                    <input onChange={this.textPassChange} type="text" name="password" className="form-control" value={this.state.textPass}  />
                                                </div>
                                            </div>
                                            <div className={ this.state.newPassTextDisabled ? 'hidden' : 'alert-success-transparent '  }   role="alert">
                                                <strong>Password Confirmed</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group" disabled={this.state.newPassTextDisabled} >
                                        <div className="col-md-12">
                                            <label className={ this.state.newPassTextDisabled ? "control-label opacity05" : "control-label "}    disabled={this.state.newPassTextDisabled}  >New Password</label>
                                            <div className="inputer" disabled={this.state.newPassTextDisabled}    >
                                                <div className={ this.state.newPassTextDisabled ? "input-wrapper opacity05" :  "input-wrapper"}   >
                                                    <input onChange={this.newPassChange} type="password" name="newpassword" className="form-control" value={this.state.newPass}  disabled={this.state.newPassTextDisabled} />
                                                </div>
                                            </div>
                                            <div className={ !this.state.newPassCheck ? 'hidden' : 'alert-success-transparent '  }   role="alert">
                                                <strong>Fill in the empty fields</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-buttons"    >
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button onClick={this.changeMyPassword} type="submit" className="btn btn-newpass" disabled={this.state.newPassTextDisabled}    >Save</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </ModalBody>
                    <ModalFooter>

                    </ModalFooter>
                </Modal>


                </div>
        );
    }

}

export default HeaderComponent;
