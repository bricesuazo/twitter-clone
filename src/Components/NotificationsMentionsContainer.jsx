import './notificationsMentionsContainer.css';
import TweetText from './TweetText';

const NotificationsMentionsContainer = () => {
    return (
        <div className="NotificationsMentionsContainer">
            <TweetText type="mention"/>
            <TweetText type="mention"/>
            <TweetText type="mention"/>
            <TweetText type="mention"/>
        </div>
    )
}

export default NotificationsMentionsContainer
