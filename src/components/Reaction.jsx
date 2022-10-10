import React, { useState } from "react";

const Reaction = ({
  image,
  name,
  post,
  seenNotification,
  seenStatus,
  time,
}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      onClick={async (event) => {
        await seenNotification(event, clicked);
        setClicked(true);
      }}
      className="reactionCover marginBottom"
    >
      <div
        className="reaction"
        style={{ backgroundColor: !clicked && !seenStatus && "#f8f8f8" }}
      >
        <img src={image} alt="avatar" />

        <div className="reactionContent">
          <h3>
            <p>
              {name}{" "}
              <span className="defaultColor">reacted to your recent post</span>{" "}
              <span className="specialColor">{post}</span>
              {!clicked && !seenStatus && (
                <span className="reactionSpan">&#8226;</span>
              )}
            </p>
          </h3>

          <div className="reactionTime">
            <h3 className="defaultColor">{time} ago</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reaction;
