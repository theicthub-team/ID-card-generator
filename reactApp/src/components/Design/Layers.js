import React from 'react';

class Layers extends React.Component {
    render(){
        return (
            <div className="Designlayer" id="l1" key={this.props.keyy} style={{top: `${this.props.info.Top}px`, left: `${this.props.info.Left}px`, padding: `${this.props.info.Size}px`,}} onClick={(e) => this.changeLayer('l1')}>Layer</div>
        );
    }

}
export default Layers;