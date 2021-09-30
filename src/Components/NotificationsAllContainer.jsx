import './notificationsAllContainer.css';
import NotificationAll from './NotificationAll';

const NotificationsAllContainer = () => {
    return (
        <div className="NotificationsAllContainer">
            <NotificationAll type="liked"/>
            <NotificationAll type="followed"/>
            <NotificationAll type="retweeted"/>
        </div>
    )
}

export default NotificationsAllContainer
