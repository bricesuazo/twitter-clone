import "./profileContainer.css";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

const ProfileContainer = () => {
  return (
    <div className="ProfileContainer">
      <div className="profileContainerWrapper">
        <img
          src="https://i.ytimg.com/vi/qwl9T6V35Y0/maxresdefault.jpg"
          alt=""
          className="profileHeaderImg"
        />

        <div className="profileTopWrapper">
          <div className="profileImgWrapper">
            <img
              src="https://github.com/bricesuazo.png"
              alt=""
              className="profilePictureImg"
            />
          </div>
          <div className="profileInfoWrapper">
            <div className="editProfileBtn">Edit profile</div>
          </div>
          <div className="profileNameWrapper">
            <h3 className="profileName">Brice Suazo</h3>
            <span className="profileUsername">@brice_suazo</span>
          </div>

          <span className="profileBio">
            Motion Designer | Video Editor | TV Broadcaster |<br />
            Computer Science Student |<br />
            <br />
            <br />
            contact@bricesuazo.com
          </span>

          <div className="profileOtherInfo">
            <div className="profileOtherInfoCountry">
              <RoomOutlinedIcon />
              <span className="profileOtherInfoCountryName">Philippines</span>
            </div>
            <div className="profileOtherInfoWebsite">
              <LinkOutlinedIcon />
              <a
                href="https://www.bricesuazo.com"
                target="_blank"
                rel="noreferrer"
                className="profileOtherInfoWebsiteLink"
              >
                bricesuazo.com
              </a>
            </div>
            <div className="profileOtherInfoJoined">
              <DateRangeOutlinedIcon />
              <span className="profileOtherInfoJoinedDate">
                Joined February 2021
              </span>
            </div>
          </div>

          <div className="profileFollowsWrapper">
            <div className="profileFollowing">
              <span className="profileFollowingNumber">82</span>
              <span className="profileFollowingText"> Followers</span>
            </div>
            <div className="profileFollowers">
              <span className="profileFollowersNumber">25</span>
              <span className="profileFollowersText"> Followers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
