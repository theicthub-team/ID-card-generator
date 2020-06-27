import React, { Component } from "react";
import $ from 'jquery'; 
import "./design.css";
import Sidebar from "./../template/Sidebar/Sidebar";
import Designtemplates from "./Designtemplates";
//import Canvas from './Canvas';
import Designmainpage from "./Desingmainpage";

class Mainpage extends Component {
  componentDidMount(){
    var href = '#content';
    var $curr = $(".process-model  a[href='" + href + "']").parent();
    $('.process-model li').removeClass();
    $curr.addClass("active");
    $curr.prevAll().addClass("visited");
  }
  render() {
    return (
      <div>
        <Sidebar />
        {/*<Canvas />*/}
        {/* <Designmainpage /> */}
        <Designtemplates />
      </div>
    );
  }
}
export default Mainpage;
