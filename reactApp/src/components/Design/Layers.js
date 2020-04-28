import React from 'react';

class Layers extends React.Component {
    render(){
        console.log(this.props.info);
        return (
            <div className="Designlayer" id="l1" key={this.props.keyy} style={{padding: `${this.props.info}px`}} onClick={(e) => this.changeLayer('l1')}>Layer</div>
        );
    }

}
export default Layers;