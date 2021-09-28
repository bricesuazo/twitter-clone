import './notificationsContainer.css';

const NotificationsContainer = () => {
    return (
        <div className="NotificationsContainer">
            <div className="notificationsTabBarWrapper">
                <div className="notificationsTabBar">
                    <div className="notificationsTabBarAllNav">
                        <div className="notificationsTabBarAll">All</div>
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
