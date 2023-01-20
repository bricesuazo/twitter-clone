import "./postTweetContainer.css";
import {
  BarChartOutlined,
  DateRangeOutlined,
  GifOutlined,
  InsertPhotoOutlined,
  SentimentSatisfiedOutlined,
} from "@mui/icons-material";

const PostTweetContainer = () => {
  return (
    <div className="postTweetContainer">
      <img
        src="https://github.com/bricesuazo.png"
        alt=""
        className="postProfilePic"
      />
      <div className="postInput">
        <input
          type="text"
          placeholder="What's happening sa imong tanan?"
          className="postInputTextBar"
        />

        <div className="postBtnsWrapper">
          <div className="postBtns">
            <InsertPhotoOutlined className="postBtnIcon" />
            <GifOutlined className="postBtnIcon" />
            <BarChartOutlined className="postBtnIcon" />
            <SentimentSatisfiedOutlined className="postBtnIcon" />
            <DateRangeOutlined className="postBtnIcon" />
          </div>
          <button className="postBtnTweet">Tweet</button>
        </div>
      </div>
    </div>
  );
};

export default PostTweetContainer;
