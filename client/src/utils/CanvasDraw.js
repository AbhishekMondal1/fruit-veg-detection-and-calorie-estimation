import React, { useRef } from 'react'

const CanvasDraw = (predictionData, imageUrl) => {
  const canvasref = useRef(null);
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
    predictionData?.forEach((pt) => {
      ctx.rect(
        1024 * pt?.boundingBox.left,
        drawHeight * pt.boundingBox.top,
        1024 * pt.boundingBox.width,
        drawHeight * pt.boundingBox.height
      );
      console.log("ptp", pt);
      return null;
    });
    ctx.stroke();
  return (
    <div>
          <canvas ref={canvasref} width={1024} height={768} />
    </div>
  );
};

export default CanvasDraw
