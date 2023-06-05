import { useEffect, useRef, useState } from "react";
import { clamp } from "./utils";
import "./App.css";
import ImageSlide from "./Image";

function App() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);

  function handleMouseDown(evt: MouseEvent): void {
    setMouseDownAt(evt.clientX);
  }

  function handleMouseMove(evt: MouseEvent): void {
    if (mouseDownAt === 0) return;

    const mouseDelta = parseFloat(String(mouseDownAt)) - evt.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    let nextPercentage = parseFloat(String(prevPercentage)) + percentage;

    nextPercentage = clamp(nextPercentage, -100, 0);
    setCurrentPercentage(nextPercentage);

    if (trackRef.current) {
      trackRef.current.animate(
        { transform: `translate(${nextPercentage}%, -50%)` },
        { duration: 1200, fill: "forwards" }
      );
    }
  }

  function handleMouseUp(): void {
    setMouseDownAt(0);
    setPrevPercentage(currentPercentage);
  }

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [handleMouseDown]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseUp]);

  return (
    <div id="image-track" ref={trackRef} draggable={false}>
      <ImageSlide
        link="https://images.unsplash.com/photo-1685728399140-5650bbcfc015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        objectPositionPercentage={currentPercentage}
      />
      <ImageSlide
        link="https://images.unsplash.com/photo-1685703206366-d514f27076ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        objectPositionPercentage={currentPercentage}
      />
      <ImageSlide
        link="https://plus.unsplash.com/premium_photo-1675805015359-fda0a96d5842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        objectPositionPercentage={currentPercentage}
      />
      <ImageSlide
        link="https://images.unsplash.com/photo-1685513733856-6770dd79a805?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        objectPositionPercentage={currentPercentage}
      />
      <ImageSlide
        link="https://images.unsplash.com/photo-1685602729758-cecb632237a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        objectPositionPercentage={currentPercentage}
      />
      <ImageSlide
        link="https://images.unsplash.com/photo-1685674594159-6c61ee041ae1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        objectPositionPercentage={currentPercentage}
      />
      <ImageSlide
        link="https://plus.unsplash.com/premium_photo-1683804835928-d15dbc86e29d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        objectPositionPercentage={currentPercentage}
      />
      <ImageSlide
        link="https://images.unsplash.com/photo-1685438436929-108c5050855d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        objectPositionPercentage={currentPercentage}
      />
    </div>
  );
}

export default App;
