import "./whoToFollow.css";
import VerifiedIcon from "@mui/icons-material/Verified";

const WhoToFollow = () => {
  return (
    <div className="WhoToFollow">
      <div className="whoToFollowWrapper">
        <h3 className="whoToFollowHeader">Who to follow</h3>

        <div className="whoToFollowAccountWrapper">
          <div className="whoToFollowAccount">
            <img
              src="https://github.com/bricesuazo.png"
              alt=""
              className="whoToFollowAccountProfilePic"
            />
            <div className="whoToFollowAccountInfo">
              <div className="whoToFollowAccountNameWrapper">
                <span className="whoToFollowAccountName">Brice Suazo</span>
                <VerifiedIcon
                  className="whoToFollowAccountIsVerified"
                  fontSize="small"
                />
              </div>
              <span className="whoToFollowAccountUsername">@brice_suazo</span>
            </div>
          </div>
          <span className="whoToFollowAccountFollowBtn">Follow</span>
        </div>

        <div className="whoToFollowAccountWrapper">
          <div className="whoToFollowAccount">
            <img
              src="https://github.com/bricesuazo.png"
              alt=""
              className="whoToFollowAccountProfilePic"
            />
            <div className="whoToFollowAccountInfo">
              <div className="whoToFollowAccountNameWrapper">
                <span className="whoToFollowAccountName">Brice Suazo</span>
                <VerifiedIcon
                  className="whoToFollowAccountIsVerified"
                  fontSize="small"
                />
              </div>
              <span className="whoToFollowAccountUsername">@brice_suazo</span>
            </div>
          </div>
          <span className="whoToFollowAccountFollowBtn">Follow</span>
        </div>

        <div className="seeMoreWrapper">
          <span className="seeMore">See More</span>
        </div>
      </div>
    </div>
  );
};

export default WhoToFollow;
