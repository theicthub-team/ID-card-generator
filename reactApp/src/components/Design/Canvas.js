import React from "react";
import Layers from './Layers';
import {connect} from 'react-redux';


class Canvas extends React.Component {
  render(){
    return (
        <main role="main" className="col-md-8 ml-sm-auto col-lg-9 px-4">
          <div >
              <Layers info={this.props.state.design}/>  
            </div>
        </main>
    );
  }
}

const mapStateToPropes =(state)=> {
  return {state};
}

export default connect(mapStateToPropes,{})(Canvas);

