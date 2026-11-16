import React, { useState } from 'react'

function LikeButton() {
    const [isLiked, setisLike] = useState(false);

    function defineLike(){
        setisLike(prev => !prev);
    }


  return (
    <div>
        {isLiked ? "♥ Liked" : "♡ Like"}
        <button onClick={defineLike}>Like</button>
    </div>
  )
}

export default LikeButton




// Challenge 2 — Like button
// Easy–Medium
// Build a like button similar to a food card in Eatly.
// Requirements:
// - Start with isLiked = false.
// - Display ♡ Like when not liked.
// - Display ♥ Liked when liked.
// - Clicking the button toggles between the two states.
// Hint: setIsLiked(prev => !prev).
// Bonus: Show the total number of likes, increasing and decreasing as you toggle.