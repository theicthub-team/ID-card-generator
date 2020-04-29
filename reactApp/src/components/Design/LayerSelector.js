import React from 'react';
import {connect} from 'react-redux';
import {selectLayer} from '../../actions';

class LayerSelector extends React.Component{
    render(){
        return (
            <div>
                <div onClick={e => this.props.selectLayer('1')}>Layer 1</div>
                <div onClick={e => this.props.selectLayer('2')}>Layer 2</div>
                <div onClick={e => this.props.selectLayer('3')}>Layer 3</div>
            </div>
        );
    }
}
const mapStateToPropes =(state)=> {
    return {state};
}
export default connect(mapStateToPropes,{selectLayer})(LayerSelector);

//onClick={this.layerr(1)}