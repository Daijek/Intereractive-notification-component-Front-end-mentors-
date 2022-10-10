import markWebber from "./images/avatar-mark-webber.webp";
import angelaGray from "./images/avatar-angela-gray.webp";
import jacobThompson from "./images/avatar-jacob-thompson.webp";
import rizkyHasanuddin from "./images/avatar-rizky-hasanuddin.webp";
import kimberlySmith from "./images/avatar-kimberly-smith.webp";
import nathanPeterson from "./images/avatar-nathan-peterson.webp";
import annaKim from "./images/avatar-anna-kim.webp";
import chess from "./images/image-chess.webp";

export const notificationAmount = 3;

const Notification = [
  {
    id: 1,
    name: "Mark Webber",
    image: markWebber,
    post: "My first tournament today!",
    time: "1m",
    seenStatus: false,
    type: "reaction",
  },
  {
    id: 2,
    name: "Angela Gray",
    image: angelaGray,
    time: "1m",
    seenStatus: false,
    type: "followed",
  },
  {
    id: 3,
    name: "Jacob Thompson",
    image: jacobThompson,
    group: "Chess Club",
    time: "1 day",
    seenStatus: false,
    type: "joinedGroup",
  },
  {
    id: 4,
    name: "Rizky Hassanuddin",
    image: rizkyHasanuddin,
    message:
      "Hello thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: "5 days",
    seenStatus: true,
    type: "privateMessage",
  },
  {
    id: 5,
    name: "Kimberly Smith",
    image: kimberlySmith,
    picture: chess,
    time: "1 week",
    seenStatus: true,
    type: "commented",
  },
  {
    id: 6,
    name: "Nathan Peterson",
    image: nathanPeterson,
    post: "5 end-game strategies to increase your win rate",
    time: "2 weeks",
    seenStatus: true,
    type: "reaction",
  },
  {
    id: 7,
    name: "Anna Kim",
    image: annaKim,
    group: "Chess Club",
    time: "2 weeks",
    seenStatus: true,
    type: "leftGroup",
  },
];

export default Notification;
