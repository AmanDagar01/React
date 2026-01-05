import React, { memo } from 'react';

function Card({ user = "user", occupation = "some occupation" }) {
  return (
    <>
      <div>Card</div>
      <h2>{user}</h2>
      <h3>{occupation}</h3>
      <p>{user} has an occupation of {occupation}</p>
    </>
  );
}

export default Card;