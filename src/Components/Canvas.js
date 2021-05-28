import { useEffect, useRef, useState } from "react";

function Canvas({colorPicker, canvasSettings, brushSize, eraser, setCanvasObject, clearCanvas ,setClearStatus, fill, setFillStatus}) {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false); //setISdrawing is a method, isDrawing is the drawing state (boolean), it changes based on the mouse event from false to true.


    useEffect(() => {
        // Canvas
        const canvas = canvasRef.current;
        canvas.width = canvasSettings.width * 2;
        canvas.height = canvasSettings.height * 2;
        canvas.style.width = `${canvasSettings.width}px`;
        canvas.style.height = `${canvasSettings.height}px`;
        // context - the painter
        const context = canvas.getContext("2d");
        context.scale(2,2);
        context.strokeStyle = colorPicker;
        context.lineWidth = brushSize;
        contextRef.current = context;

        const canvasid = document.getElementById("canvasid");
        setCanvasObject(canvasid)
    },[])  
    
    //[] = looks in to all the changes added - look in to it

    useEffect(() => {
        // Canvas Settings - the first section
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        canvas.width = canvasSettings.width * 2;
        canvas.height = canvasSettings.height * 2;
        canvas.style.width = `${canvasSettings.width}px`;
        canvas.style.height = `${canvasSettings.height}px`;
        context.scale(2,2);
    }, [canvasSettings]) // updates

    useEffect(() => {
        // colorpicker from other child component
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.strokeStyle = colorPicker;
        context.lineWidth = brushSize;
    },[colorPicker, brushSize])

    //This is the clear canvas functionality:
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (clearCanvas === false) {
            return                              // returns out of useEffect
        }
        context.clearRect(0,0, canvasSettings.width, canvasSettings.height)  //CanvasRect.clearRect(x: number, y: number, w: number, h: number)
        setClearStatus(false)
    }, [clearCanvas])

    // white background to jpg file
    useEffect(() => {
        if (fill === false){
            return
        }
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.fillStyle = "white";
        context.globalCompositeOperation = "destination-atop"; //blend-mode photoshop - this globalcompositeOperation places itself behind the paths
        context.fillRect(0,0, canvasSettings.width, canvasSettings.height)
        setFillStatus(false) //resets the status
        context.globalCompositeOperation = "source-over" //this creates a
    }, [fill])

    const drawingstart = ({nativeEvent}) => { //events from browser, via userinputs
        const {offsetX, offsetY} = nativeEvent; //mousepad coordiations
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX,offsetY)
        setIsDrawing(true)
    }

    const drawingfinish = () => {
        contextRef.current.closePath()
        setIsDrawing(false)

    }

    const draw = ({nativeEvent}) => {
        if (!isDrawing) { //! = checks if its false (if ! isn't there it checks if its true)
            return
        }
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        if (eraser) {
            contextRef.current.clearRect(offsetX, offsetY, brushSize, brushSize)
        }
        else {
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            context.lineCap = 'round';
            context.lineJoin = 'round';
            contextRef.current.stroke();
        }
    }


    return (
        <div>
            <canvas id ="canvasid" style={{background: '#ffffff'}}
                onMouseDown = {drawingstart}
                onMouseUp = {drawingfinish}
                onMouseMove = {draw}
                ref={canvasRef}
            />
        </div>
    );
}


export default Canvas;
