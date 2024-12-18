import React from 'react'

const UsedTechnos = () => {
  const images = [
    "image1.jpg", 
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
  ];

  return (
    <div className="w-full h-64 flex items-center justify-center perspective-1000">
      <div className="relative w-64 h-64 animate-rotate3d">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center shadow-lg transform ${
              index === 0
                ? "rotate-y-0 translate-z-32"
                : index === 1
                ? "rotate-y-90 translate-z-32"
                : index === 2
                ? "rotate-y-180 translate-z-32"
                : "rotate-y-270 translate-z-32"
            }`}
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};


export default UsedTechnos
