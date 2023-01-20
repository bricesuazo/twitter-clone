import "./notificationAll.css";
import { Cached, Favorite, Person } from "@mui/icons-material";

const typeOfNotif = (param) => {
  switch (param) {
    case "liked":
      return <Favorite fontSize="large" />;
    case "followed":
      return <Person fontSize="large" />;
    case "retweeted":
      return <Cached fontSize="large" />;
    default:
      return "";
  }
};

const NotificationAll = ({ type }) => {
  return (
    <div className="NotificationAll">
      <div className="notificationContainerWrapper">
        <div className="notifContainerLeftWrapper">{typeOfNotif(type)}</div>
        <div className="notifContainerRightWrapper">
          <div className="notifContainerRightProfilePicWrapper">
            <img
              src="https://github.com/bricesuazo.png"
              alt=""
              className="notifContainerRightProfilePic"
            />
            <img
              src="https://github.com/bricesuazo.png"
              alt=""
              className="notifContainerRightProfilePic"
            />
            <img
              src="https://github.com/bricesuazo.png"
              alt=""
              className="notifContainerRightProfilePic"
            />
            <img
              src="https://github.com/bricesuazo.png"
              alt=""
              className="notifContainerRightProfilePic"
            />
          </div>
          <div className="notifContainerRightHeaderTextWrapper">
            <span className="notifContainerRightHeaderTextUsername">brice</span>
            <span className="notifContainerRightHeaderTextStatus">
              {" "}
              liked your Tweet
            </span>
          </div>
          <div className="notifContainerRightTweetWrapper">
            <div className="notifContainerRightTweetCaption">
              test lamang po ito
            </div>
            <div className="notifContainerRightTweetLink">
              pic.twitter.com/YM42BrS8FJ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationAll;
