import React, { useEffect, useState, useRef } from "react";
import './canvasDraw.css';

const CanvasDraw = ({ predictionData, imageUrl }) => {
  console.log("testdata", predictionData, imageUrl);
  const canvasref = useRef(null);
  const canvasimg = useRef(null);
  const [cimg, setCimg] = useState("")
  useEffect(() => {
    const drawCanvas = async () => {
      
      const ctx = canvasref.current.getContext("2d");
      ctx.lineWidth = 1;
      ctx.strokeStyle = "red";
      ctx.font = "30px Arial";
      const imageSrc = new Image();
      imageSrc.src = imageUrl;
      const imgWidth = imageSrc.width;
      const imgHeight = imageSrc.height;
      console.log("WxH", imgWidth, imgHeight);
      
      var drawHeight = (imgHeight / imgWidth) * 1024;
      ctx.clearRect(0, 0, 1024, 768);
    ctx.drawImage(imageSrc, 1, 1, 1024, drawHeight);
    ctx.beginPath();
    await predictionData?.forEach((pt) => {
      ctx.rect(
        1024 * pt?.boundingBox.left,
        drawHeight * pt.boundingBox.top,
        1024 * pt.boundingBox.width,
        drawHeight * pt.boundingBox.height
        );
        ctx.fillText(
          pt.tagName,
          1024 * pt.boundingBox.left,
          drawHeight * pt.boundingBox.top
          );
          console.log("ptp", pt);
          return null;
        });
        ctx.stroke();
        //var canvasimg = new Image();
        setCimg(canvasref.current.toDataURL({format: 'png', quality: 1}));
        console.log(canvasref.current.toDataURL("image/png"))
    }
    drawCanvas();

      }, [predictionData]);

  return (
    <div>
          <canvas className="canvas-draw" ref={canvasref} width={1024} height={768} />
          <img className="canvas-img" ref={canvasimg} src={cimg} alt="" srcset=""/>
    </div>
  );
};

export default CanvasDraw;
