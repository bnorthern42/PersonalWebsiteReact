import cv from "@techstark/opencv-js";
import { loadDataFile } from "./cvDataFile";

let ColorCascade;

export async function loadColorModels(){
    console.log("===== Loading color models =====");
    return loadDataFile(
        "colorsCV/colors.csv"
    ). then(
        () => new Promise((resolve) => {
            setTimeout(() =>{
                ColorCascade = new cv.CascadeClassifier();
                ColorCascade.load("colorsCV/colors.csv");
                resolve();

            }, 2000);
        })
    )
        .then(() => {
            console.log("===== Loaded color models =====");
        })
        .catch((error) =>{
            console.log(error)
        });
}

export async function detectColors(img){
    const cv = await getOpenCv();
    // const newImg = img.clone();
    const newImg = img;

    const gray = new cv.Mat();
    cv.cvtColor(newImg, gray, cv.COLOR_RGBA2GRAY, 0);
    const colors = new cv.RectVector();
    ColorCascade.detectMultiScale()
}