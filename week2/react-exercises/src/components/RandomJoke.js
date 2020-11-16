import React, { useEffect, useState } from "react";
import Joke from "./Joke";

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsoading] = useState(false);
  const [isJoke, setIsJoke] = useState(false);

  const getJoke = async () => {
    const url = "https://official-joke-api.appspot.com/random_joke";
    setIsoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setJoke(data);
      setIsJoke(true);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setIsoading(false);
    }
  };
  useEffect(() => {
    getJoke();
  }, []);
  return (
    <div>
      {isLoading && <div className="loader"></div>}
      {error && <p>Something went wrong with fetching data...</p>}
      {isJoke && <Joke joke={joke} />}
    </div>
  );
};

export default RandomJoke;
