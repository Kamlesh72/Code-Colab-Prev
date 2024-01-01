import { useEffect, useRef, useState } from "react";
import { BsFillPenFill, BsEraserFill } from "react-icons/bs";

const Whiteboard = () => {
  const [penEraser, setPenEraser] = useState(1);
  const [penEraserSize, setPenEraserSize] = useState(5);
  const [penColor, setPenColor] = useState("#000000");
  const isMouseDown = useRef(0);
  const canvasRef = useRef(null);
  const handlePenEraser = (e) => {
    setPenEraser((prev) => !prev);
  };
  const handlePenEraserSize = (e) => {
    setPenEraserSize(e.target.value);
  };
  const handlePenColor = (e) => {
    setPenColor(e.target.value);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    // contextRef.current
    const context = canvas.getContext("2d");
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
    context.lineCap = "round";
    // canvas.style.cursor = `url(../../assets/click-gesture-svgrepo-com.svg), auto`;
    let x = 0,
      y = 0;
    const startDrawing = (e) => {
      [x, y] = [e.offsetX, e.offsetY];
      isMouseDown.current = true;
    };
    const continueDrawing = (e) => {
      if (isMouseDown.current) {
        const [newX, newY] = [e.offsetX, e.offsetY];
        console.log(penEraser);
        if (penEraser) {
          context.beginPath();
          context.moveTo(x, y);
          context.lineTo(newX, newY);
          context.stroke();
        } else {
          console.log("eraser");
          context.globalCompositeOperation = "destination-out";
          context.fillStyle = "rgba(0,0,0,1)";
          context.strokeStyle = "rgba(0,0,0,1)";
          context.arc(x, y, 8, 0, Math.PI * 2, false);
          context.fill();
        }
        x = newX;
        y = newY;
      }
    };
    const stopDrawing = (e) => {
      isMouseDown.current = false;
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", continueDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    // canvas.addEventListener("mouseout", stopDrawing);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", continueDrawing);
      canvas.removeEventListener("mouseup", stopDrawing);
      // canvas.removeEventListener("mouseout", stopDrawing);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineWidth = penEraserSize;
    context.strokeStyle = penColor;
  }, [penEraserSize, penColor]);

  return (
    <div className="w-full bg-white row-span-4 rounded-2xl flex flex-col">
      <div className="w-full rounded-t-2xl bg-gray-900 text-slate-200 py-2 text-center">
        Whiteboard
      </div>
      <div className="flex-1">
        <canvas className="h-full w-full" ref={canvasRef}></canvas>
      </div>
      <div className=" border-t-2 border-gray-400 rounded-b-2xl py-2 pl-5 flex flex-row">
        <BsFillPenFill
          className={`cursor-pointer ${
            penEraser ? "bg-slate-400" : ""
          } p-2 rounded-lg mr-3`}
          onClick={handlePenEraser}
          size="30"
        />
        <BsEraserFill
          className={`cursor-pointer ${
            penEraser ? "" : "bg-slate-400"
          } p-2 rounded-lg`}
          onClick={handlePenEraser}
          size="30"
        />
        <input
          type="range"
          min="5"
          max="50"
          value={penEraserSize}
          step="1"
          onChange={handlePenEraserSize}
          className="mx-5 cursor-pointer"
        />
        <input
          type="color"
          className="cursor-pointer"
          value={penColor}
          onChange={handlePenColor}
        />
      </div>
    </div>
  );
};

export default Whiteboard;
