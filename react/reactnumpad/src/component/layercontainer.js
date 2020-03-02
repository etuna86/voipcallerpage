import React,{Component} from 'react';

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {HeaderComponent} from "./header";
import App from "../App";
import ReactEcharts from "echarts-for-react";

import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class LayerContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            getNumberValue:'',
            errorMessage:'you cannot enter characters',
            getClientsLogs:'clients logs',
            openHourlyModal:false,
        }
    }

render() {
        const IframStyle={
            width: '100%',
            display: "block",
            border: 0,
            height: 0,
            margin: 0,
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        }
        const  blaStyle={
            height: 370,
            webkittaphighlightcolor: 'transparent',
            userselect: 'none',
            position: 'relative',
            backgroundcolor: 'transparent'
        }

        return(<div className="layer-container">
                <div className="menu-layer">
                    <ul>
                        <li data-open-after="true">
                            <a href="index-2.html">Dashboard</a>
                        </li>
                        <li>
                            <a href="javascript:;">Cards</a>
                            <ul className="child-menu">
                                <li><a href="cards-image.html">Image Cards</a></li>
                                <li><a href="cards-audio.html">Audio Cards</a></li>
                                <li><a href="cards-video.html">Video Cards</a></li>
                                <li><a href="cards-clickable.html">Clickable Cards</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">UI Elements</a>
                            <ul className="child-menu">
                                <li><a href="ui-elements-general.html">General</a></li>
                                <li><a href="ui-elements-buttons.html">Buttons</a></li>
                                <li><a href="ui-elements-lists.html">Lists</a></li>
                                <li><a href="ui-elements-dialogs.html">Dialogs</a></li>
                                <li><a href="ui-elements-notifications.html">Notifications</a></li>
                                <li><a href="ui-elements-social-buttons.html">Social Buttons</a></li>
                                <li><a href="ui-elements-font-icons.html">Font Icons</a></li>
                                <li><a href="ui-elements-tabs.html">Tabs &amp; Accordions</a></li>
                                <li><a href="ui-elements-typography.html">Typography</a></li>
                                <li><a href="ui-elements-loaders.html">Loaders</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">Panels</a>
                            <ul className="child-menu">
                                <li><a href="panels.html">Panel Types</a></li>
                                <li><a href="panels-draggable.html">Draggable Panels</a></li>
                                <li><a href="panels-styling.html">Styled Panels</a></li>
                                <li><a href="panels-ajax.html">Ajax Panels</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">Forms</a>
                            <ul className="child-menu">
                                <li><a href="forms-general.html">General</a></li>
                                <li><a href="forms-layouts.html">Layouts</a></li>
                                <li><a href="forms-tools.html">Tools</a></li>
                                <li><a href="forms-pickers.html">Pickers</a></li>
                                <li><a href="forms-icheck.html">iCheck</a></li>
                                <li><a href="forms-range-sliders.html">Range Slider</a></li>
                                <li><a href="forms-selects.html">Selectboxes</a></li>
                                <li><a href="forms-switchers.html">Switchers</a></li>
                                <li><a href="forms-validation.html">Form Validation</a></li>
                                <li><a href="forms-wizard.html">Wizard</a></li>
                                <li><a href="forms-wysiwyg-editors.html">Text Editors</a></li>
                                <li>
                                    <a href="javascript:;">Image Croppers</a>
                                    <ul className="child-menu">
                                        <li><a href="forms-jcrop.html">J Crop</a></li>
                                        <li><a href="forms-image-cropper.html">Image Cropper</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript:;">Uploaders</a>
                                    <ul className="child-menu">
                                        <li><a href="forms-dropzone.html">Dropzone</a></li>
                                        <li><a href="forms-multiple-file-upload.html">Multiple File Upload</a></li>
                                        <li><a href="forms-custom-file-input.html">Custom File Input</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">Tables</a>
                            <ul className="child-menu">
                                <li><a href="table-elements.html">Elements</a></li>
                                <li><a href="table-responsive.html">Responsive Tables</a></li>
                                <li><a href="table-bootstrap-table.html">BS Table</a></li>
                                <li><a href="table-datatables.html">DataTables</a></li>
                                <li><a href="table-datatables-data-sources.html">DataTable Data Sources</a></li>
                                <li><a href="table-datatables-editor.html">DataTable Editor</a></li>
                                <li><a href="table-datatables-extensions.html">DataTable Extensions</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">Pages</a>
                            <ul className="child-menu">
                                <li>
                                    <a href="javascript:;">User Pages <span className="badge badge-primary">4</span></a>
                                    <ul className="child-menu">
                                        <li><a href="user-profile.html">Profile</a></li>
                                        <li><a href="user-lock-screen.html" target="_blank">Lock Screen</a></li>
                                        <li><a href="user-login.html" target="_blank">Login</a></li>
                                        <li><a href="user-calendar.html">Calendar</a></li>
                                    </ul>
                                </li>
                                <li><a href="pages-blog.html">Blog</a></li>
                                <li><a href="pages-about-us.html">About Us</a></li>
                                <li><a href="pages-coming-soon.html" target="_blank">Coming Soon</a></li>
                                <li><a href="pages-contact-us.html">Contact Us</a></li>
                                <li><a href="pages-404.html" target="_blank">404 Error Page</a></li>
                                <li><a href="pages-invoice.html">Invoice</a></li>
                                <li><a href="pages-pricing.html">Pricing Tables</a></li>
                                <li><a href="pages-search-results.html">Search Results</a></li>
                                <li><a href="pages-timeline.html">Timeline</a></li>
                                <li><a href="blank.html">Blank</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">Components</a>
                            <ul className="child-menu">
                                <li><a href="components-offline-detector.html">Offline Detector</a></li>
                                <li><a href="components-session-timeout.html">Session Timeout</a></li>
                                <li><a href="components-sound-library.html">Sound Library</a></li>
                                <li><a href="components-tree-view.html">Tree View</a></li>
                                <li><a href="components-html5-notifications.html">HTML5 Notifications</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">Layouts</a>
                            <ul className="child-menu">
                                <li><a href="layout-flexible-space.html">Flexible Space</a></li>
                                <li><a href="layout-fixed-footer-links.html">Fixed Footer Links</a></li>
                                <li><a href="layout-fixed-footer.html">Fixed Footer</a></li>
                                <li><a href="layout-settings.html">Layout Settings</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">Grids</a>
                            <ul className="child-menu">
                                <li><a href="grids-bootstrap.html">Bootstrap Grids</a></li>
                                <li><a href="grids-bootstrap-extra.html">Extra Grids</a></li>
                                <li><a href="grids-masonry.html">Masonry Grids</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">Charts</a>
                            <ul className="child-menu">
                                <li><a href="charts-c3.html">C3 Charts</a></li>
                                <li><a href="charts-chartjs.html">Chart JS</a></li>
                                <li><a href="charts-flot.html">Flot Charts</a></li>
                                <li><a href="charts-knob.html">Knob Charts</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">Maps</a>
                            <ul className="child-menu">
                                <li><a href="maps-google.html">Google Maps</a></li>
                                <li><a href="maps-leaflet.html">Leaflet Maps</a></li>
                                <li><a href="maps-vector.html">Vector Maps</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">E-mail Templates</a>
                            <ul className="child-menu">
                                <li><a href="email-basic.html" target="_blank">Basic Template</a></li>
                                <li><a href="email-invoice.html" target="_blank">Invoice Template</a></li>
                                <li><a href="email-list.html" target="_blank">List Template</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://themeforest.net/item/pleasure-material-design-responsive-admin-panel/10579013">Buy
                                Callperson</a>
                        </li>
                    </ul>
                </div>


                <div className="search-layer">
                    <div className="search">
                        <form action="https://teamfox.co/themes/pleasure/app/admin1/pages-search-results.html">
                            <div className="form-group">

                            </div>
                        </form>
                    </div>
                    <div className="results">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <div className="x_panel  overflow_hidden">
                                    <div className="x_title">
                                        <h2> Today Performance </h2>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12" id="innerPie">
                                        <ReactEcharts
                                            id={"daily-performance-chart"}
                                            option={{
                                                tooltip: {
                                                    formatter: "{a} <br/>{b} : {c}%"
                                                },
                                                series: [{
                                                    name: 'Performance',
                                                    type: 'gauge',
                                                    center: ['50%', '50%'],
                                                    startAngle: 140,
                                                    endAngle: -140,
                                                    min: 0,
                                                    max: 100,
                                                    precision: 0,
                                                    splitNumber: 10,
                                                    axisLine: {
                                                        show: true,
                                                        lineStyle: {
                                                            color: [
                                                                [0.2, '#9b58b6'],
                                                                [0.4, '#3498db'],
                                                                [0.8, '#89bb6e'],
                                                                [1, '#26b99a']
                                                            ],
                                                            width: 30
                                                        }
                                                    },
                                                    axisTick: {
                                                        show: true,
                                                        splitNumber: 5,
                                                        length: 8,
                                                        lineStyle: {
                                                            color: '#eee',
                                                            width: 1,
                                                            type: 'solid'
                                                        }
                                                    },
                                                    axisLabel: {
                                                        show: true,
                                                        formatter: function (v) {
                                                            switch (v + '') {
                                                                case '10':
                                                                    return 'a';
                                                                case '30':
                                                                    return 'b';
                                                                case '60':
                                                                    return 'c';
                                                                case '90':
                                                                    return 'd';
                                                                default:
                                                                    return '';
                                                            }
                                                        },
                                                        textStyle: {
                                                            color: '#333'
                                                        }
                                                    },
                                                    splitLine: {
                                                        show: true,
                                                        length: 30,
                                                        lineStyle: {
                                                            color: '#eee',
                                                            width: 2,
                                                            type: 'solid'
                                                        }
                                                    },
                                                    pointer: {
                                                        length: '80%',
                                                        width: 8,
                                                        color: 'auto'
                                                    },
                                                    title: {
                                                        show: true,
                                                        offsetCenter: ['-65%', -10],
                                                        textStyle: {
                                                            color: '#333',
                                                            fontSize: 15
                                                        }
                                                    },
                                                    detail: {
                                                        show: true,
                                                        backgroundColor: 'rgba(0,0,0,0)',
                                                        borderWidth: 0,
                                                        borderColor: '#ccc',
                                                        width: 100,
                                                        height: 40,
                                                        offsetCenter: ['-60%', 10],
                                                        formatter: '{value}% \n 0 / 60 Mins',
                                                        textStyle: {
                                                            color: 'auto',
                                                            fontSize: 20
                                                        }
                                                    },
                                                    data: [{
                                                        value: 1,
                                                        name: ' '
                                                    }]
                                                }]
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-6  col-sm-12 col-xs-12">
                                <div className="x_panel  overflow_hidden">
                                    <div className="x_title">
                                        <h2> Today Performance </h2>
                                        <div className="clearfix"></div>
                                    </div>
                                    <h4><i> Calls duration chart </i></h4>
                                    <button type="button" onClick={this.props.openHourlyModal} className="btn btn-default btn-sm"
                                            >
                                        Hourly
                                    </button>
                                    <button type="button" onClick={this.openDailyModal}  className="btn btn-default btn-sm"
                                            >
                                        Daily
                                    </button>
                                    <button type="button" onClick={this.openMonthlyModal}  className="btn btn-default btn-sm">
                                        Monthly
                                    </button>



                                    <div className="col-md-12 col-sm-12 col-xs-12" id="canvas_line_chart">
                                        <ReactEcharts id={"line-chart"}
                                            option={{
                                                xAxis: {
                                                    type: "category",
                                                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                                                },
                                                yAxis: {
                                                    type: "value"
                                                },
                                                series: [{
                                                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                                                    type: "line"
                                                }]
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="user-layer">
                    <ul className="nav nav-tabs nav-justified" role="tablist">
                        <li className="active"><a href="#messages" data-toggle="tab">Messages</a></li>
                        <li><a href="#notifications" data-toggle="tab">Notifications <span className="badge">3</span></a>
                        </li>
                        <li><a href="#settings" data-toggle="tab">Settings</a></li>
                    </ul>
                    <div className="row no-gutters tab-content">
                        <div className="tab-pane fade in active" id="messages">
                            <div className="col-md-4">
                                <div className="message-list-overlay"> </div>
                                <ul className="list-material message-list">
                                    <li className="has-action-left has-action-right">
                                        <a href="#" className="visible" data-message-id="1">
                                            <div className="list-action-left">
                                            </div>
                                            <div className="list-content">
                                                <span className="title">Pari Subramanium</span>
                                                <span className="caption">Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.</span>
                                            </div>
                                            <div className="list-action-right">
                                                <span className="top">15 min</span>
                                                <i className="ion-android-done bottom"> </i>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="has-action-left has-action-right">
                                        <a href="#" className="visible" data-message-id="2">
                                            <div className="list-action-left">
                                            </div>
                                            <div className="list-content">
                                                <span className="title">Andrew Fox</span>
                                                <span className="caption">Dramatically visualize customer directed convergence without revolutionary ROI. Efficiently unleash cross-media information without cross-media value.</span>
                                            </div>
                                            <div className="list-action-right">
                                                <span className="top">2 hr</span>
                                                <i className="ion-android-done bottom"> </i>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="has-action-left has-action-right">
                                        <a href="#" className="visible" data-message-id="3">
                                            <div className="list-action-left">
                                            </div>
                                            <div className="list-content">
                                                <span className="title">Lieke Vermeulen</span>
                                                <span className="caption">Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</span>
                                            </div>
                                            <div className="list-action-right">
                                                <span className="top">Yesterday</span>
                                                <i className="ion-android-volume-off bottom"> </i>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="has-action-left has-action-right">
                                        <a href="#" className="visible" data-message-id="4">
                                            <div className="list-action-left">
                                            </div>
                                            <div className="list-content">
                                                <span className="title">Benjamin Beck</span>
                                                <span className="caption">Completely synergize resource sucking relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.</span>
                                            </div>
                                            <div className="list-action-right">
                                                <span className="top">1 week ago</span>
                                                <i className="ion-android-done bottom"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="has-action-left has-action-right">
                                        <a href="#" className="visible" data-message-id="5">
                                            <div className="list-action-left">
                                            </div>
                                            <div className="list-content">
                                                <span className="title">Joshua Harris</span>
                                                <span className="caption">Dynamically innovate resource-leveling customer service for state of the art customer service. Objectively innovate empowered manufactured products whereas parallel platforms.</span>
                                            </div>
                                            <div className="list-action-right">
                                                <span className="top">Jan 10, 2015</span>
                                                <i className="ion-android-done bottom"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="has-action-left has-action-right">
                                        <a href="#" className="visible" data-message-id="1">
                                            <div className="list-action-left">
                                            </div>
                                            <div className="list-content">
                                                <span className="title">Lisa Cooper</span>
                                                <span className="caption">Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</span>
                                            </div>
                                            <div className="list-action-right">
                                                <span className="top">Jan 5, 2015</span>
                                                <i className="ion-android-done bottom"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="has-action-left has-action-right">
                                        <a href="#" className="visible" data-message-id="2">
                                            <div className="list-action-left">
                                            </div>
                                            <div className="list-content">
                                                <span className="title">Matthew Harris</span>
                                                <span className="caption">Globally incubate standards compliant channels before scalable benefits. </span>
                                            </div>
                                            <div className="list-action-right">
                                                <span className="top">Jan 4, 2015</span>
                                                <i className="ion-android-done bottom"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="has-action-left has-action-right">
                                        <a href="#" className="visible" data-message-id="3">
                                            <div className="list-action-left">
                                            </div>
                                            <div className="list-content">
                                                <span className="title">Diana Nguyen</span>
                                                <span className="caption">Happy new yeaar!!</span>
                                            </div>
                                            <div className="list-action-right">
                                                <span className="top">Jan 1, 2015</span>
                                                <i className="ion-android-done bottom"></i>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-8">
                                <div className="message-send-container">
                                    <div className="messages">
                                        <div className="message left">
                                            <div className="message-text">Hello!</div>
                                        </div>
                                        <div className="message right">
                                            <div className="message-text">Hi!</div>
                                            <div className="message-text">Credibly innovate granular internal or "organic"
                                                sources whereas high standards in web-readiness. Energistically scale
                                                future-proof core competencies vis-a-vis impactful experiences.
                                            </div>

                                        </div>
                                        <div className="message left">
                                            <div className="message-text">Dramatically synthesize integrated schemas with
                                                optimal networks.
                                            </div>
                                        </div>
                                        <div className="message right">
                                            <div className="message-text">Interactively procrastinate high-payoff content
                                            </div>
                                        </div>
                                        <div className="message left">
                                            <div className="message-text">Globally incubate standards compliant channels
                                                before scalable benefits. Quickly disseminate superior deliverables whereas
                                                web-enabled applications. Quickly drive clicks-and-mortar catalysts for
                                                change before vertical architectures.
                                            </div>
                                            <div className="message-text">Credibly reintermediate backend ideas for
                                                cross-platform models. Continually reintermediate integrated processes
                                                through technically sound intellectual capital. Holistically foster superior
                                                methodologies without market-driven best practices.
                                            </div>

                                        </div>
                                        <div className="message right">
                                            <div className="message-text">Distinctively exploit optimal alignments for
                                                intuitive bandwidth
                                            </div>
                                        </div>
                                        <div className="message left">
                                            <div className="message-text">Quickly coordinate e-business applications
                                                through
                                            </div>
                                        </div>
                                    </div>
                                    <div className="send-message">
                                        <div className="input-group">
                                            <div className="inputer inputer-blue">
                                                <div className="input-wrapper">
                                                    <textarea rows="1" id="send-message-input" className="form-control js-auto-size" placeholder="Message"> </textarea>
                                                </div>
                                            </div>
                                            <span className="input-group-btn">
                                                <button id="send-message-button" className="btn btn-blue" type="button">Send</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-back">
                                <div className="mobile-back-button"><i className="ion-android-arrow-back"></i></div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="notifications">
                            <div className="col-md-6 col-md-offset-3">
                                <ul className="list-material has-hidden">
                                    <li className="has-action-left has-action-right has-long-story">
                                        <a href="#" className="hidden"><i className="ion-android-delete"></i></a>
                                        <a href="#" className="visible">
                                            <div className="list-action-left">
                                                <i className="ion-bag icon text-indigo"></i>
                                            </div>
                                            <div className="list-content">
                                                <span className="caption">Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.</span>
                                            </div>
                                            <div className="list-action-right">
                                                <span className="top">2 hr</span>
                                                <i className="ion-record text-green bottom"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="has-action-left has-action-right has-long-story">
                                        <a href="#" className="hidden"><i className="ion-android-delete"></i></a>
                                        <a href="#" className="visible">
                                            <div className="list-action-left">
                                                <i className="ion-image text-green icon"></i>
                                            </div>
                                            <div className="list-content">
                                                <span className="caption">Dramatically visualize customer directed convergence without revolutionary ROI. Efficiently unleash cross-media information without cross-media value.</span>
                                            </div>
                                            <div className="list-action-right">
                                                <span className="top">16:55</span>
                                                <i className="ion-record text-green bottom"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="has-action-left has-action-right has-long-story">
                                        <a href="#" className="hidden"><i className="ion-android-delete"></i></a>
                                        <a href="#" className="visible">
                                            <div className="list-action-left">
                                            </div>
                                            <div className="list-content">
                                                <span className="caption">Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</span>
                                            </div>
                                            <div className="list-action-right">
                                                <span className="top">Yesterday</span>
                                                <i className="ion-record text-green bottom"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="has-action-left has-action-right has-long-story">
                                        <a href="#" className="hidden"><i className="ion-android-delete"></i></a>
                                        <a href="#" className="visible">
                                            <div className="list-action-left">
                                            </div>
                                            <div className="list-content">
                                                <span className="caption">Completely synergize resource sucking relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.</span>
                                            </div>
                                            <div className="list-action-right">
                                                <span className="top">2 days ago</span>
                                                <i className="ion-android-done bottom"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="has-action-left has-action-right has-long-story">
                                        <a href="#" className="hidden"><i className="ion-android-delete"></i></a>
                                        <a href="#" className="visible">
                                            <div className="list-action-left">
                                                <i className="ion-location text-light-blue icon"></i>
                                            </div>
                                            <div className="list-content">
                                                <span className="caption">Dynamically innovate resource-leveling customer service for state of the art customer service. Objectively innovate empowered manufactured products whereas parallel platforms.</span>
                                            </div>
                                            <div className="list-action-right">
                                                <span className="top">1 week ago</span>
                                                <i className="ion-android-done bottom"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="has-action-left has-action-right has-long-story">
                                        <a href="#" className="hidden"><i className="ion-android-delete"></i></a>
                                        <a href="#" className="visible">
                                            <div className="list-action-left">
                                                <i className="ion-bookmark text-deep-orange icon"></i>
                                            </div>
                                            <div className="list-content">
                                                <span className="caption">Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</span>
                                            </div>
                                            <div className="list-action-right">
                                                <span className="top">10 Jan</span>
                                                <i className="ion-android-done bottom"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="has-action-left has-action-right has-long-story">
                                        <a href="#" className="hidden"><i className="ion-android-delete"></i></a>
                                        <a href="#" className="visible">
                                            <div className="list-action-left">
                                                <i className="ion-locked icon"></i>
                                            </div>
                                            <div className="list-content">
                                                <span className="caption">Phosfluorescently engage worldwide methodologies with web-enabled technology.</span>
                                            </div>
                                            <div className="list-action-right">
                                                <span className="top">9 Jan</span>
                                                <i className="ion-android-done bottom"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="has-action-left has-action-right has-long-story">
                                        <a href="#" className="hidden"><i className="ion-android-delete"></i></a>
                                        <a href="#" className="visible">
                                            <div className="list-action-left">
                                            </div>
                                            <div className="list-content">
                                                <span className="caption">Synergistically evolve 2.0 technologies rather than just in time initiatives. Quickly deploy strategic networks with compelling e-business. Credibly pontificate highly efficient manufactured products and enabled data.</span>
                                            </div>
                                            <div className="list-action-right">
                                                <span className="top">7 Jan</span>
                                                <i className="ion-android-done bottom"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="has-action-left has-action-right has-long-story">
                                        <a href="#" className="hidden"><i className="ion-android-delete"></i></a>
                                        <a href="#" className="visible">
                                            <div className="list-action-left">
                                                <i className="ion-navigate text-indigo icon"></i>
                                            </div>
                                            <div className="list-content">
                                                <span className="caption">Objectively pursue diverse catalysts for change for interoperable meta-services. Dramatically mesh low-risk high-yield alignments before transparent e-tailers.</span>
                                            </div>
                                            <div className="list-action-right">
                                                <span className="top">7 Jan</span>
                                                <i className="ion-android-done bottom"></i>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="settings">
                            <div className="col-md-6 col-md-offset-3">
                                <div className="settings-panel">
                                    <p className="text-grey">Here's where you can check your settings of Callperson Admin
                                        Panel. If you need an extra information from us, do not hesitate to contact.</p>
                                    <div className="legend">Privacy Controls</div>
                                    <ul>
                                        <li>
                                            Show my profile on search results
                                            <div className="switcher switcher-indigo pull-right">
                                                <input id="settings1" type="checkbox" hidden="hidden" checked="checked" />
                                                <label htmlFor="settings1"> </label>
                                            </div>
                                        </li>
                                        <li>
                                            Only God can judge me
                                            <div className="switcher switcher-indigo pull-right">
                                                <input id="settings2" type="checkbox" hidden="hidden" checked="checked" />
                                                <label htmlFor="settings2"> </label>
                                            </div>
                                        </li>
                                        <li>
                                            Review tags people add to your own posts
                                            <div className="switcher switcher-indigo pull-right">
                                                <input id="settings3" type="checkbox" hidden="hidden" />
                                                <label htmlFor="settings3"> </label>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="legend">Notifications</div>
                                    <ul>
                                        <li>
                                            Activity that involves you
                                            <div className="switcher switcher-indigo pull-right">
                                                <input id="settings4" type="checkbox" hidden="hidden" checked="checked" />
                                                <label htmlFor="settings4"> </label>
                                            </div>
                                        </li>
                                        <li>
                                            Birthdays
                                            <div className="switcher switcher-indigo pull-right">
                                                <input id="settings5" type="checkbox" hidden="hidden" />
                                                <label htmlFor="settings5"> </label>
                                            </div>
                                        </li>
                                        <li>
                                            Calendar events
                                            <div className="switcher switcher-indigo pull-right">
                                                <input id="settings6" type="checkbox" hidden="hidden" />
                                                <label htmlFor="settings6"> </label>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="legend">Newsletter</div>
                                    <ul>
                                        <li>
                                            Friend requests
                                            <div className="checkboxer checkboxer-indigo pull-right">
                                                <input type="checkbox" id="checkboxSettings1" value="option1" checked="checked" />
                                                <label htmlFor="checkboxSettings1"> </label>
                                            </div>
                                        </li>
                                        <li>
                                            People you may know
                                            <div className="checkboxer checkboxer-indigo pull-right">
                                                <input type="checkbox" id="checkboxSettings2" value="option1" />
                                                <label htmlFor="checkboxSettings2"> </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>);
}
}

export default LayerContainer;
