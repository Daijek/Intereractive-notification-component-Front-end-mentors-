import React, { useState } from "react";

const Commented = ({
  image,
  name,
  picture,
  seenStatus,
  time,
  seenNotification,
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

        <div className="reactionContentComment">
          <h3>
            <p>
              {name}{" "}
              <span className="defaultColor">commented on your picture</span>{" "}
              {!clicked && !seenStatus && (
                <span className="reactionSpan">&#8226;</span>
              )}
            </p>
          </h3>

          <div className="reactionTime">
            <h3 className="defaultColor">{time} ago</h3>
          </div>
        </div>
        <img className="commentPicture" src={picture} alt="avatar" />
      </div>
    </div>
  );
};

export default Commented;
