import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./mainView.css";
// import DrawBoundingBox from "../../utils/DrawBoundingBox";
import Nutrition from "../Nutrition/Nutrition";
import ProgressBar from "../ProgressBar/ProgressBar";
import CanvasDraw from "../../utils/CanvasDraw";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faBook, faImage, faChevronCircleLeft,   faChevronCircleRight, } from "@fortawesome/free-solid-svg-icons";

const Upload = () => {
  const [CUSTOM_VISION_API, setCUSTOM_VISION_API] = useState("");
  const [CUSTOM_VISION_PREDICTION_KEY, setCUSTOM_VISION_PREDICTION_KEY] = useState("");
  const [image, setImage] = useState("");
  const [predictionData, setPredictionData] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [progressPercent, setProgressPercent] = useState(100);

  const imgRef = useRef(null);
  // get api keys
  useEffect(() => {
    async function getCVApi() {
      try {
        const res = await axios.get("http://localhost:8080/api/cva");
        setCUSTOM_VISION_API(res.data.value);
      } catch (error) {
        console.log(error);
      }
    }
    async function getCVKey() {
      try {
        const res = await axios.get("http://localhost:8080/api/cvpk");
        setCUSTOM_VISION_PREDICTION_KEY(res.data.value);
      } catch (error) {
        console.log(error);
      }
    }
    getCVKey();
    getCVApi();
  }, []);
  // update image section
  useEffect(() => {
    async function drawImage() {
      if (image) {
        const url = await URL.createObjectURL(image);
        console.log("url", url);
        setImageUrl(url);
      }
    }
    drawImage();
    return () => {
      // URL.revokeObjectURL(image);
    };
  }, [image]);

  // draw image in canvas
  useEffect(() => {
    // DrawBoundingBox(predictionData, imageUrl, canvasRef);
    console.log("draw");
  }, [predictionData]);

  // Image File uploading for prediction
  const uploadFile = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("image", image);
    // const url = await URL.createObjectURL(image);
    // console.log("url", url);
    // setImageUrl(url);
    try {
      console.log("i", image);

      const res = await axios.post(CUSTOM_VISION_API, image, {
        headers: {
          "content-type": "application/octet-stream",
          "Prediction-Key": CUSTOM_VISION_PREDICTION_KEY,
        },
        onUploadProgress: (progressEvent) => {
          var percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgressPercent(percentCompleted);
          console.log("per", percentCompleted);
        },
      });
      console.log("res data", res.data.predictions);
      let predcdata = await res.data.predictions.filter((data) => {
        if (data.probability > 0.6) {
          console.log(data.probability);
          return data;
        }
      });
      console.log("req prddata");
      console.table(predcdata);
      setPredictionData(predcdata);
      setLoading(false);
      setImage("");
      setImageUrl("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <br />
      <form onSubmit={uploadFile} className="upload-image-form">
        <input
          className="select-file"
          type="file"
          name="file upload"
          id="fileupload"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
        />
        <button className="submit-image" type="submit">
          submit
        </button>
      </form>
      <img
        useRef={imgRef}
        className="image-preview"
        src={imageUrl}
        alt=""
        srcset=""
      />
      {progressPercent < 100 ? (
        <ProgressBar progressPercent={progressPercent} />
      ) : (
        ""
      )}
      {loading && <h1>Loading...</h1>}
      <br />
      {
        <div className="primary-feed">
          {predictionData ? (
            <CanvasDraw predictionData={predictionData} imageUrl={imageUrl} />
          ) : (
            ""
          )}
          {predictionData ? <Nutrition predictionData={predictionData} /> : ""}
        </div>
      }
    </div>
  );
};

export default Upload;
