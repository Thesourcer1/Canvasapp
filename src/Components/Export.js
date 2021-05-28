import {  Row, Col } from 'react-bootstrap';


const Export = ({canvasObject, setFillStatus}) => {

    const download = () => {
        let fileName = document.getElementById("fileName").value;
        if (fileName === '' || null) {
            fileName = 'Untitled'
        } 
        let fileExtension;
        let filetype = document.getElementsByName('filetype');
        for (let i = 0; i < filetype.length; i++) {
            if(filetype[i].checked) {
                fileExtension = filetype[i].value;
            } 
        } 
        if (fileExtension === 'jpg') {
            setFillStatus(true)
        }
        if (fileExtension !== 'jpg' || 'png'){
            fileExtension = 'png'
        }
        setTimeout( () => {
            var canvas = canvasObject;
            var url = canvas.toDataURL(`image/${fileExtension}`);
            var link = document.createElement('a');
            link.download = fileName + '.' + fileExtension;
            link.href = url;
            link.click();
        }, [2000])
    
    }
  
    const clearInput = (e) => {
        e.target.value = ""
    }

    return (
        <Col className="exportWrapper">
            <Row className="fileNameContainer">
                <label htmlFor="fileName">File name</label>
                <input id="fileName" type="text" placeholder="Untitled" onFocus={clearInput}/>
            </Row>    
            <Col>
                <p>File type</p>
                <Row>
                    <label className="radioWrapper file">JPG
                        <input id="filejpg" type="radio" name="filetype" value="jpg"/>
                        <span class="checkmark"></span>
                    </label>
                </Row>
                <Row style={{marginBottom:"20px"}}>
                    <label className="radioWrapper file">PNG
                        <input id="filepng" type="radio" name="filetype" value="png"/>
                        <span class="checkmark"></span>
                    </label>
                </Row>
                <button type="button" onClick={download}>Save</button>
            </Col>
            
        </Col>
    ) 
}

export default Export;