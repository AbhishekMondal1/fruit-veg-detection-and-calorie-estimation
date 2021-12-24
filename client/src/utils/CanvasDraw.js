import React, { useEffect, useState, useRef } from "react";
import "./canvasDraw.css";

const CanvasDraw = ({ predictionData, imageUrl }) => {
  console.log("testdata", imageUrl);
  console.table(predictionData);
  const canvasref = useRef(null);
  const canvasimg = useRef(null);
  const [cimg, setCimg] = useState("");
  useEffect(() => {
    const drawCanvas = async () => {
      const ctx = canvasref.current.getContext("2d");
      ctx.lineWidth = 1;
      ctx.strokeStyle = "white";
      ctx.font = "20px Poppins";
      const imageSrc = new Image();
      imageSrc.src = imageUrl;
      const imgWidth = imageSrc.width;
      const imgHeight = imageSrc.height;
      console.log("WxH", imgWidth, imgHeight);

      var drawHeight = (imgHeight / imgWidth) * 700;
      ctx.clearRect(0, 0, 700, 525);
      ctx.drawImage(imageSrc, 1, 1, 700, drawHeight);
      ctx.beginPath();
      await predictionData?.forEach((pt) => {
        ctx.rect(
          700 * pt?.boundingBox.left,
          drawHeight * pt.boundingBox.top,
          700 * pt.boundingBox.width,
          drawHeight * pt.boundingBox.height
        );
        ctx.fillText(
          pt.tagName,
          700 * pt.boundingBox.left,
          drawHeight * pt.boundingBox.top
        );
        console.log("ptp", pt);
        return null;
      });
      ctx.stroke();
      setCimg(canvasref.current.toDataURL({ format: "png", quality: 1 }));
    };
    drawCanvas();
  }, [predictionData]);

  return (
    <div>
      <canvas
        className="canvas-draw"
        ref={canvasref}
        width={700}
        height={525}
      />
      <img className="canvas-img" ref={canvasimg} src={cimg} alt="" srcset="" />
    </div>
  );
};

export default CanvasDraw;
