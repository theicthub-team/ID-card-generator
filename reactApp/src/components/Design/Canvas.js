import React, { useState } from "react";
import LayerSelector from './LayerSelector';
import Layers from './Layers';




const Canvas = () => {
  const [Top, setTop] = useState([20]);
  const [selectedLayer , setselectedLayer] = useState();
  const [Layer1 , setLayer1] = useState({top: 10});
  const [Layer2 , setLayer2] = useState({top: 10});
  const [Layer3 , setLayer3] = useState({top: 10});

  const updateValue =() => {
    switch(selectedLayer) {
      case '1':
        setLayer1({top: Top});
        break;
      case '2':
          setLayer2({top: Top});
          break;
      case '3':
            setLayer3({top: Top});
            break;
      default:
    }
  }

  return (
      <main role="main" className="col-md-8 ml-sm-auto col-lg-9 px-4">
        <div style={{height: "60vh"}}>
            <Layers info={Layer1.top} keyy={1} />
            <Layers info={Layer2.top} keyy={1} />
            <Layers info={Layer3.top} keyy={1} />
            </div>
            
            <div class="d-flex justify-content-center my-4">
            <div class="w-75">
              <input type="range" class="custom-range" id="customRange11" min="0" max="200" onChange={e => {setTop(e.target.value);updateValue();}}></input>
            </div>
            <LayerSelector />
          </div>
          <div onClick={e => setselectedLayer("1")}>Layer 1</div>
          <div onClick={e => setselectedLayer("2")}>Layer 2</div>
          <div onClick={e => setselectedLayer("3")}>Layer 3</div>
      </main>

  );
}

export default Canvas;
