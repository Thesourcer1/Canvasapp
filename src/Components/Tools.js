import {  Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faEraser, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Tools = ({setColorPicker, brushSize, setBrushSize, setEraserStatus, eraser, setClearStatus}) => {

    // Color picker 
    const setNewColor = (e) => {
         setColorPicker(e.target.value)
    }

    // brush size 
    const setNewbrushSize = (e) => {
        setBrushSize(e.target.value)
    }
    
    // Eraser
    const setEraser = () => {
       setEraserStatus(true)
    }
    // Brush
    const setDraw = () => {
        setEraserStatus(false)
    }

    // clear canvas option (post method)
    const clear = () => {
        setClearStatus(true)
    }
    
    // notes: value = only for the visuel look on the range type
    // ? = true or false statement
    return (
        <Row>
            <Col className="toolsWrapper">
                <div className="brushTools">
                    {eraser ? <button className="btnTools" onClick={setDraw}><FontAwesomeIcon icon={faPen}/> Pencil</button> : 
                    <button className="btnTools" onClick={setDraw} className="active"><FontAwesomeIcon icon={faPen}/> Pencil</button>}
                    {eraser ? <button className="btnTools" onClick={setEraser} className="active"><FontAwesomeIcon icon={faEraser}/>Eraser</button> : 
                    <button className="btnTools" onClick={setEraser}><FontAwesomeIcon icon={faEraser}/>Eraser</button>}
                    <button className="btnTools" onClick={clear}><FontAwesomeIcon icon={faTrashAlt}/>Reset</button>
                </div>
                <div className="inputTools">
                    <label htmlFor="colorPicker">Color Options</label>
                    <input type="color" id="colorPicker" onInput={setNewColor} />
                    <label htmlFor="brushSize">Brush Size</label>
                    <input type="range" id="brushSize" min={1} max={100} step={2} value={brushSize} onInput={setNewbrushSize}/>
                </div>
               
            </Col>  
        </Row>
    )
}

export default Tools;