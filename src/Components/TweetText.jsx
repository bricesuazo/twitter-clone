import './tweetText.css';
import { FavoriteBorder, IosShare, LoopOutlined, MoreHorizOutlined } from '@mui/icons-material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const styles = {
    size: {
        fontSize: 'medium',
    },
}

const TweetText = ({type}) => {
    return (
        <div className="tweetTextNavigation">
            <div className="tweetTextNavigationWrapper">
                <img src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.6435-9/213619586_4176300955791613_9078051559512662378_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeECrdsuPio5ZSicjcrp5KM28s0D1TAKwgjyzQPVMArCCGiV5qCddGCQ1dtYAvyx3YRGMt3bIvAs6y6GRnD-LT85&_nc_ohc=87-LACrqpi4AX8610vZ&_nc_ht=scontent.fmnl25-1.fna&oh=f9cf9e8c84f17234b92b6c2c9c1be268&oe=6174FF0E" alt="" className="tweetProfilePic" />
                <div className="tweetTextContent">
                    <div className="tweetTextHeader">
                        <div className="tweetUserInfo">
                            <span className="tweetName">Brice Suazo</span>
                            <span className="tweetUsername">@brice_suazo</span>
                            <span className="tweetBullet">•</span>
                            <span className="tweetTimeAgo">4m</span>
                        </div>
                        <MoreHorizOutlined />
                    </div>

                    {type === "mention" ? 
                    (
                    <div className="MentionReplyingToWrapper">
                        <span className="MentionReplyingToText">Replying to</span>
                        <span className="MentionReplyingToUsername">@brice_suazo</span>
                    </div>
                    ) : (
                        null
                    )}

                    <span className="tweetText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi incidunt minus at quia error saepe natus quasi beatae voluptas perferendis!</span>
                    
                    <div className="tweetBtnsWrapper">
                        <div className="tweetBtnWrapper">
                            <div className="tweetBtn"><ChatBubbleOutlineIcon sx={ styles.size } className="tweetBtnReply"/></div>
                            <span className="tweetSpan tweetReplySpan">1</span>
                        </div>
                        <div className="tweetBtnWrapper">
                            <div className="tweetBtn"><LoopOutlined sx={ styles.size } className="tweetBtnRetweet"/></div>
                            <span className="tweetSpan tweetRetweetSpan">69</span>
                        </div>
                        <div className="tweetBtnWrapper">
                            <div className="tweetBtn"><FavoriteBorder sx={ styles.size } className="tweetBtnLike"/></div>
                            <span className="tweetSpan tweetReplySpan">420</span>
                        </div>
                        <div className="tweetBtnWrapper">
                            <div className="tweetBtn"><IosShare sx={ styles.size } className="tweetBtnShare"/></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TweetText
