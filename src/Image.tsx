import { useEffect, useRef } from "react";

interface ImageProps {
  link: string;
  objectPositionPercentage: number;
}

function ImageSlide({ link, objectPositionPercentage }: ImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    imageRef.current?.animate(
      {
        objectPosition: `${objectPositionPercentage + 100}% 50%`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }, [objectPositionPercentage]);

  return <img ref={imageRef} className="image" src={link} draggable={false} />;
}

export default ImageSlide;
