import React, { useState } from "react";
import FriendProfile from "./FriendProfile";
import Button from "./Button";

const Friend = () => {
  const [friend, setFriend] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsoading] = useState(false);
  const [haveFriend, setHaveFriend] = useState(false);

  const getFriend = async () => {
    const url = "https://www.randomuser.me/api?results=1";
    setIsoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      const { name, location, email, phone } = data.results[0];
      setFriend({ name, location, email, phone });
      setHaveFriend(true);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setIsoading(false);
    }
  };

  return (
    <div>
      <Button text="Get a friend!" onClick={getFriend} />
      {isLoading && <div className="loader"></div>}
      {haveFriend && <FriendProfile friend={friend} />}
      {error && <p>Something went wrong with fetching data...</p>}
    </div>
  );
};

export default Friend;
