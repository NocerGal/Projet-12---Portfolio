import React from 'react';

export default function RealisationContainer({
  image,
  alt,
  description,
  date,
  url,
}) {
  return (
    <div className="realisation">
      <div className="image">
        <img src={image} alt={alt} />
      </div>
    </div>
  );
}
