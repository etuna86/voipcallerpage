import React,{Component} from 'react';
import HeaderComponent from './component/header';
import Login from './login';
import LayerContainer from './component/layercontainer';
import { DateRangePicker } from 'react-date-range';

import { createBrowserHistory } from "history";

import {connect} from 'react-redux';
const history = createBrowserHistory();
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, withRouter
} from "react-router-dom";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class App extends Component{
  constructor(props){
    super(props);
    this.state={
        getNumberValue:'',
        errorMessage:'you cannot enter characters',
        getClientsLogs:'clients logs',
        openHourlyModal:false,
        selectionRange:[{
            startDate:new Date(),
            endDate: new Date(),
            key: 'selection'
        }],
    }

      this.handleSelect = this.handleSelect.bind(this);
  }
    componentDidMount() {
        history.push('/login');
    }
   getNumber=(number)=> {
    var value=document.getElementById('phonenumber').value;
    value+=number.target.attributes.getNamedItem("value").value;
    //document.getElementById('phonenumber').value=value;
       console.warn();
       if (value.length >= 24)
       {
           //alert(this.state.errorMessage);
           document.getElementById('notificationclick').click();
       }
       else
       {
           this.setState({
               getNumberValue:value,
           })
       }

  }
   removeLastIndex=()=>{
    var str= document.getElementById('phonenumber').value;
    var newStr = str.substring(0, str.length - 1);
    //document.getElementById('phonenumber').value=newStr;
       this.setState({
           getNumberValue:newStr,
       })
  }
   numberCall =()=>{
    var PhoneNumber=document.getElementById('phonenumber').value;
    console.warn("numberCall: ", this.state.getNumberValue);
  }
   activeButton=(id)=>{
    var getElement=document.getElementById(id);
    var classes=getElement.getAttribute("class");
    classes+=" active"
    getElement.setAttribute("class",classes);
    setTimeout(function(){ getElement.setAttribute("class","numpad"); }, 100);
  }
   getkeyValue=(event) =>{
    var x = event.which || event.keyCode;
    console.warn("key", x);
    switch (event.which) {
      case 49:
        this.activeButton(1);
        break;
      case 50:
        this.activeButton(2);
        break;
      case 51:
        this.activeButton(3);
        break;
      case 52:
        this.activeButton(4);
        break;
      case 53:
        this.activeButton(5);
        break;
      case 54:
        this.activeButton(6);
        break;
      case 55:
        this.activeButton(7);
        break;
      case 56:
        this.activeButton(8);
        break;
      case 57:
        this.activeButton(9);
        break;
      case 48:
        this.activeButton(0);
        break;
      case 42:
        this.activeButton('*');
        break;
      case 35:
        this.activeButton('#');
        break;
      case 8:
        this.activeButton('backspace');
        break;
      default:
    }
  }
  closeCall=()=>{

  }
numberChange=(e)=>{
    if (e.target.value.length >= 24)
    {
        document.getElementById('notificationclick').click();
    }
    else
    {
        this.setState({
            getNumberValue:e.target.value,
        })
    }
}
    openHourlyModal=()=>{
      console.warn("openHourlyModal",this.state.openHourlyModal);
        this.setState({
            openHourlyModal:!this.state.openHourlyModal,
        })


    }
    openDailyModal=()=>{

    }
    openMonthlyModal=()=>{

    }
    handleSelect(ranges){
      console.warn("selectionRange: ",this.state.selectionRange);
        this.setState((state)=>{
            state.selectionRange[0]=ranges.selection;
        })
    }
  render() {
      const divStyle = {
          display: 'none',
      };
      let arrayButton = [];
      for ( let i = 1; i < 10; i++ ){
          arrayButton.push( <div className="numpad" id={i} ref={i} onClick={this.getNumber} value={i} ><span value={i}  >{i} </span></div> );
      }
  return (
      <Router history={history}   >
      <Switch>
          <Route  path="/about">
              <About />
          </Route>
          <Route   path="/login" >
              <Login />
          </Route>
          <Route  path="/callerpage" >
                  <div className="white-right"> </div>
                  <div className="nav-bar-container">
                      <div className="nav-search">
                          <span className="search"> </span>
                      </div>
                      <div className="nav-bar-border"> </div>
                      <div className="overlay">
                          <div className="starting-point">
                              <span>
                              <div>

                              </div>
                              </span>
                          </div>
                          <div className="logo"> </div>
                      </div>
                      <div className="overlay-secondary"> </div>
                  </div>
                  <div className="content">
                     <HeaderComponent />
                      <div className="display-animation">
                          <div className="row image-row">
                              <div className="col-md-12">
                                  <div className="row image-row">
                                      <div className="col-sm-6">
                                          <div className="">
                                              <div className="card-heading">
                                                  <div className="card-action">
                                                      <a href="javascript:;" data-toggle="fake-reload"> </a>
                                                  </div>
                                              </div>
                                              <div className="card-body">
                                                  <div className="forecast-container">
                                                      <div className="numpad-section">
                                                          <div className={"input-back"}> </div>
                                                          <input className="number-input"  maxLength="24" onKeyDown={this.getkeyValue}    onKeyPress={this.getkeyValue} onChange={this.numberChange} id="phonenumber" ref="phonenumber" type="text"
                                                                 placeholder="Enter a phone number to call" value={this.state.getNumberValue} />
                                                          <div className={"number-buttons"} >
                                                              {arrayButton}
                                                              <div className="numpad" id="*" ref={"*"} onClick={this.getNumber} value="*"><span value="*" >*</span></div>
                                                              <div className="numpad" id="0" ref={"0"} onClick={this.getNumber} value="0"><span value="0" >0</span></div>
                                                              <div className="numpad" id="#" ref={"#"} onClick={this.getNumber} value="#"><span value="#" >#</span></div>
                                                              <div className="numpad" id="yes" ref={"yes"} onClick={this.numberCall} value="yes" >
                                                                  <span value="yes">
                                                                      <ion-icon name="call"> </ion-icon>
                                                                  </span>
                                                              </div>
                                                              <div className="numpad" id="backspace" onClick={this.removeLastIndex} value="backspace">
                                                                 <span>
                                                                     <ion-icon name="backspace"> </ion-icon>
                                                                 </span>
                                                              </div>
                                                              <div className="numpad" id="No" onClick={this.closeCall} value="No">
                                                                 <span   value="No" >
                                                                     <ion-icon name="close"> </ion-icon>
                                                                 </span>
                                                              </div>
                                                          </div>
                                                      </div>
                                                          <button data-toastr-notification="You cannot enter more characters"
                                                                  style={divStyle} id="notificationclick"
                                                                  className="btn btn-danger toastr-notify btn-ripple"
                                                                  data-toastr-type="error">Error
                                                          </button>
                                                  </div>
                                              </div>

                                          </div>
                                      </div>
                                      <div className="col-sm-6">
                                          <div className="card tile card-dashboard-graph material-animate">
                                              <div className="contextual">
                                                  <h5>Client Logs</h5>
                                                  <p>{this.state.getClientsLogs}</p>
                                              </div>
                                              <div className="chart without-time chart-sales"> </div>
                                              <div className="chart-legend chart-sales-legend"> </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              <LayerContainer
                  openHourlyModal={this.openHourlyModal}
              />

              </Route>
      </Switch>
          <Modal zIndex={"999999"} className={"scale newpass-modal"} isOpen={this.state.openHourlyModal}  toggle={this.openHourlyModal}  role={"dialog"} >
              <ModalHeader toggle={this.openHourlyModal}  >Hourly</ModalHeader>
              <ModalBody>
                  <DateRangePicker
                      onChange={ranges => this.handleSelect(ranges)}
                      showSelectionPreview={true}
                      moveRangeOnFirstSelection={false}
                      months={1}
                      ranges={this.state.selectionRange}
                      direction="horizontal"
                  />
              </ModalBody>
              <ModalFooter>

              </ModalFooter>
          </Modal>
      </Router>
  );
  }
}
function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

const mapStateToProps = (state, ownProps) => ({
    AVATAR: state.reducer1.accountAvatar,
})

export default connect(mapStateToProps)(App);
//export default App;
