import React, { useState } from "react";

const Followed = ({ image, name, seenStatus, time, seenNotification }) => {
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
              {name} <span className="defaultColor">followed you</span>{" "}
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

export default Followed;
