import './notificationsContainer.css';
import NotificationContainer from './NotificationsContainer';

const NotificationsContainer = () => {
    return (
        <div className="NotificationsContainer">
            <div className="notificationsTabBarWrapper">
                <div className="notificationsTabBar">
                    <div className="notificationsTabBarAllNav">
                        <div className="notificationsTabBarAll">All</div>
                        <NotificationContainer />
                    </div>
                    <div className="notificationsTabBarMentionsNav">
                        <div className="notificationsTabBarMentions">Mentions</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationsContainer
