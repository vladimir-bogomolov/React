import React, { useState } from "react";
import Button from "./Button";
import DogPhoto from "./DogPhoto";

const DogGallery = () => {
  const [dogPhotos, setdogPhotos] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsoading] = useState(false);

  const getDogPhoto = async () => {
    const url = "https://dog.ceo/api/breeds/image/random";
    setIsoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      const imgUrl = data.message;
      setdogPhotos([...dogPhotos, imgUrl]);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setIsoading(false);
    }
  };

  return (
    <div>
      <Button text="Get a dog!" onClick={getDogPhoto} />
      {isLoading && <div className="loader"></div>}
      <div>
        {error && <p>Something went wrong with fetching data...</p>}
        {dogPhotos.length > 0 ? (
          dogPhotos.map((url) => <DogPhoto url={url} />)
        ) : (
          <p>Get your first dog by clicking the button!</p>
        )}
      </div>
    </div>
  );
};
export default DogGallery;
