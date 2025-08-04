import React, {useCallback, useRef, useState} from "react";
import HeroProj from "../Projects/HeroProj";
import Webcam from "react-webcam";
import cv from "@techstark/opencv-js";
import '../HeroSection.css';

const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: "user"
};
//use for job related stuff
function Encompass(props) {


    const webcamRef = useRef(null);
    const imgRef = React.useRef(null);
    const faceImgRef = React.useRef(null);
    const [url, setUrl] = useState(null);

    const capturePhoto = useCallback(async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setUrl(imageSrc);
        imgRef.current.src = imageSrc;

        checkImage(imageSrc)

    }, [webcamRef]);

    const onUserMedia = (e) => {
        console.log(e);
    };

    const checkImage = (img) => {

        let src = cv.imread("inputImage");
        let dst = new cv.Mat();
        let low = new cv.Mat(src.rows, src.cols, src.type(), [0, 0, 0, 0]);
        let high = new cv.Mat(src.rows, src.cols, src.type(), [150, 150, 150, 255]);
// You can try more different parameters
        cv.inRange(src, low, high, dst);
        cv.imshow('canvasOutput', dst);
        src.delete();
        dst.delete();
        low.delete();
        high.delete();
        console.log("imagesrc: ");
    }


//<img id="inputImage" className="inputImage" alt="input" ref={imgRef} />
    return (

        <div className="webcamContWrapper">

            <HeroProj title='Encompass related'/>
            <button onClick={capturePhoto} className='btns'>Capture</button>
            <button onClick={() => setUrl(url)}>Refresh</button>
            <div id="webcamCont">
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    onUserMedia={onUserMedia}
                    forceScreenshotSourceSize="true"
                    style={{
                        position: "absolute",
                        textAlign: "center",
                        zindex: 8,
                        right: 0,
                        height: "240px",
                        width: "480px",
                        objectFit: "fill",
                    }}
                />
            </div>
            {url && (
                <div>

                    <canvas id="inputImage" ref={imgRef}/>
                    <canvas className="canvasOutput" ref={faceImgRef}/>

                </div>
            )}
        </div>
    );
}

export default Encompass;