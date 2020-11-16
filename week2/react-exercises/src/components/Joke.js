import React from "react";

const Joke = ({ joke }) => {
  const { setup, punchline } = joke;
  return (
    <div>
      <p>{setup}</p>
      <p>{punchline}</p>
    </div>
  );
};

export default Joke;
