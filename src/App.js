import { useState } from 'react';
import './App.css';
import Canvas from './Components/Canvas';
import CanvasSettings from './Components/CanvasSettings';
import Export from './Components/Export';
import Tools from './Components/Tools';
import { Accordion, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [colorPicker, setColorPicker] = useState('black');
  const [canvasSettings, setCanvasSettings] = useState({ //object
    width: 500, 
    height: 500
  });
  const [brushSize, setBrushSize] = useState(5);

  const [eraser, setEraserStatus] = useState(false);

  const [canvasObject, setCanvasObject] = useState(null);
  

  const [clearCanvas, setClearStatus] = useState(false);

  const [fill, setFillStatus] = useState(false);

  return (
    <div className='App'>
      <div className="CanvasBox">
        <Canvas 
        colorPicker = {colorPicker} 
        canvasSettings = {canvasSettings} 
        brushSize = {brushSize}
        eraser = {eraser}
        setCanvasObject = {setCanvasObject}
        clearCanvas = {clearCanvas}
        setClearStatus = {setClearStatus}
        fill = {fill}
        setFillStatus = {setFillStatus}
        />
      </div>
      <div className="ToolBox">
        <h1>Drawing app</h1>
        {/*Canvas settings accordion*/}
        <Accordion defaultActiveKey="0" style={{paddingTop: "20px"}}>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <h3>Canvas Settings</h3><i class="bi bi-chevron-down" style={{fontWeight:'bold', fontSize:'16px'}}></i>
                  <hr></hr>
                </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <CanvasSettings setCanvasSettings = {setCanvasSettings}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <h3>Tools</h3><i class="bi bi-chevron-down" style={{fontWeight:'bold', fontSize:'16px'}}></i>
                  <hr></hr>
                </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Tools 
                  setColorPicker = {setColorPicker} 
                  setBrushSize = {setBrushSize} 
                  brushSize = {brushSize}
                  setEraserStatus ={setEraserStatus}
                  eraser = {eraser}
                  setClearStatus = {setClearStatus}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <h3>Export</h3><i class="bi bi-chevron-down" style={{fontWeight:'bold', fontSize:'16px'}}></i>
                  <hr></hr>
                </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <Export
                  canvasObject = {canvasObject}
                  setFillStatus = {setFillStatus}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
        </Accordion>
      </div>
    </div>
    );
  
}

export default App;
