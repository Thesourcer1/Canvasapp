import {  Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage } from '@fortawesome/free-solid-svg-icons'

const CanvasSettings = ({setCanvasSettings }) => {
    // canvas resizes
    const resizeCanvas = (e) => {
       switch (e.target.value) { //a long if else statement 
           case "small":
                setCanvasSettings({
                    width: 500,
                    height: 500
            })
               break;
            case "medium":
                setCanvasSettings({
                    width: 460,
                    height: 570
                })
                break;
            case "full":
                setCanvasSettings({
                    width: window.innerWidth *0.70,
                    height: window.innerHeight -100
                })
                break; 
           default:
               break;
       }
    }
    return (

        <Row className="settingsWrapper">
            <Col id="paperIcon">
                <FontAwesomeIcon icon={faFileImage} />
            </Col>
            <Col id="canvasSettings">
                <Row>
                    <label className="radioWrapper">500x500
                        <input type="radio" id="small" name="canvasSize" value="small" onInput={resizeCanvas}></input>
                        <span class="checkmark"></span>
                    </label>
                    
                </Row>
                <Row>
                    <label className="radioWrapper">460x570
                        <input type="radio" id="medium" name="canvasSize" value="medium" onInput={resizeCanvas}></input>
                        <span class="checkmark"></span>
                    </label>
                </Row>
                <Row>
                    <label className="radioWrapper">Fullsize  
                        <input type="radio" id="full" name="canvasSize" value="full" onInput={resizeCanvas}></input>
                        <span class="checkmark"></span>
                    </label>
                </Row>
            </Col>
        </Row>
    ) 
}

export default CanvasSettings;