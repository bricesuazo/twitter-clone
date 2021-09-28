import './profileContent.css';
import TweetText from './TweetText';

const ProfileContent = () => {
    return (
        <div className="ProfileContent">
            <div className="profileContentTabBar">
                <div className="profileContentTweetsNavWrapper">
                    <div className="profileContentTweets">Tweets</div>
                </div>
                <div className="profileContentTweetsReplyNavWrapper">
                    <div className="profileContentTweetsReply">Tweets & Reply</div>
                </div>
                <div className="profileContentMediaNavWrapper">
                    <div className="profileContentMedia">Media</div>
                </div>
                <div className="profileContentLikesNavWrapper">
                    <div className="profileContentLikes">Likes</div>
                </div>
            </div>

            <TweetText />
            <TweetText />
            <TweetText />
            <TweetText />



        </div>
    )
}

export default ProfileContent
