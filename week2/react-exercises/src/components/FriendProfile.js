import React from "react";

const FriendProfile = ({ friend }) => {
  const { name, location, email, phone } = friend;
  return (
    <ul>
      <li>First Name: {name.first}</li>
      <li>Last Name: {name.last}</li>
      <li>
        Address: {location.street.name}, {location.street.number},{" "}
        {location.city}, {location.postcode}
      </li>
      <li>Country: {location.country}</li>
      <li>E-mail: {email}</li>
      <li>Phone number: {phone}</li>
    </ul>
  );
};

export default FriendProfile;
