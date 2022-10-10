import Followed from "./components/Followed";
import Reaction from "./components/Reaction";
import Notification from "./Notification";
import JoinedGroup from "./components/JoinedGroup";
import { useEffect, useState } from "react";
import PrivateMessage from "./components/PrivateMessage";
import Commented from "./components/Commented";
import LeftGroup from "./components/LeftGroup";

function App() {
  const [notificationAmount, setNotificationAmount] = useState(0);
  const [notificationSeenStatus, setNotificationSeenStatus] = useState(false);

  useEffect(() => {
    for (let i = 0; i < Notification.length; i++) {
      if (!Notification[i].seenStatus) {
        setNotificationAmount(i + 1);
      }
    }
    setNotificationSeenStatus(false);
  }, []);

  return (
    <div>
      <div className="header">
        <div>
          <h1>
            Notifications <span> {notificationAmount} </span>
          </h1>
        </div>
        <h3
          onClick={() => {
            console.log(notificationSeenStatus);
            setNotificationSeenStatus(true);
            setNotificationAmount(0);
            console.log(notificationSeenStatus);
          }}
          style={{ cursor: "pointer" }}
          className="defaultColor"
        >
          Mark all as read
        </h3>
      </div>
      {Notification.map((notifications) => {
        if (notifications.type === "reaction") {
          return (
            <Reaction
              key={notifications.id}
              {...notifications}
              seenNotification={(e, status) => {
                console.log(status);
                if (
                  !notifications.seenStatus &&
                  !status &&
                  notificationAmount > 0
                ) {
                  setNotificationAmount(notificationAmount - 1);
                }
              }}
              seenStatus={
                !notificationSeenStatus ? notifications.seenStatus : true
              }
            />
          );
        } else if (notifications.type === "followed") {
          return (
            <Followed
              key={notifications.id}
              {...notifications}
              seenNotification={(e, status) => {
                console.log(status);
                if (
                  !notifications.seenStatus &&
                  !status &&
                  notificationAmount > 0
                ) {
                  setNotificationAmount(notificationAmount - 1);
                }
              }}
              seenStatus={
                !notificationSeenStatus ? notifications.seenStatus : true
              }
            />
          );
        } else if (notifications.type === "joinedGroup") {
          return (
            <JoinedGroup
              key={notifications.id}
              {...notifications}
              seenNotification={(e, status) => {
                console.log(status);
                if (
                  !notifications.seenStatus &&
                  !status &&
                  notificationAmount > 0
                ) {
                  setNotificationAmount(notificationAmount - 1);
                }
              }}
              seenStatus={
                !notificationSeenStatus ? notifications.seenStatus : true
              }
            />
          );
        } else if (notifications.type === "privateMessage") {
          return (
            <PrivateMessage
              key={notifications.id}
              {...notifications}
              seenNotification={(e, status) => {
                console.log(status);
                if (
                  !notifications.seenStatus &&
                  !status &&
                  notificationAmount > 0
                ) {
                  setNotificationAmount(notificationAmount - 1);
                }
              }}
              seenStatus={
                !notificationSeenStatus ? notifications.seenStatus : true
              }
            />
          );
        } else if (notifications.type === "commented") {
          return (
            <Commented
              key={notifications.id}
              {...notifications}
              seenNotification={(e, status) => {
                console.log(status);
                if (
                  !notifications.seenStatus &&
                  !status &&
                  notificationAmount > 0
                ) {
                  setNotificationAmount(notificationAmount - 1);
                }
              }}
              seenStatus={
                !notificationSeenStatus ? notifications.seenStatus : true
              }
            />
          );
        } else if (notifications.type === "leftGroup") {
          return (
            <LeftGroup
              key={notifications.id}
              {...notifications}
              seenNotification={(e, status) => {
                console.log(status);
                if (
                  !notifications.seenStatus &&
                  !status &&
                  notificationAmount > 0
                ) {
                  setNotificationAmount(notificationAmount - 1);
                }
              }}
              seenStatus={
                !notificationSeenStatus ? notifications.seenStatus : true
              }
            />
          );
        }
      })}
    </div>
  );
}

export default App;
