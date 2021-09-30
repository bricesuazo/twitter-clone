import './notificationsHeader.css';
import NotificationsAllContainer from './NotificationsAllContainer';
import { Link } from "react-router-dom";
import NotificationsMentionsContainer from './NotificationsMentionsContainer';

const NotificationsHeader = () => {
    return (
        <div className="NotificationsContainer">
            <div className="notificationsTabBarWrapper">
                <div className="notificationsTabBar">
                    <Link to="/notifications" style={{ textDecoration: 'none' }} className="notificationsTabBarAllNav">
                        <div className="notificationsTabBarAll">All</div>
                    </Link>
                    <Link to="/notifications/mentions" style={{ textDecoration: 'none' }} className="notificationsTabBarMentionsNav">
                        <div className="notificationsTabBarMentions">Mentions</div>
                    </Link>
                </div>
                <NotificationsAllContainer />
                <NotificationsMentionsContainer />
            </div>
        </div>
    )
}

export default NotificationsHeader
