import MainBtnNav from '../Components/MainBtnNav';
import SearchBar from '../Components/SearchBar';
import HeaderBar from '../Components/HeaderBar';
import TrendsForYouContainer from '../Components/TrendsForYouContainer';
import WhoToFollow from '../Components/WhoToFollow';
import NotificationsHeader from '../Components/NotificationsHeader';

const Notifications = () => {
    return (
        <div className="NotificationsPage">
            <div className="leftNavigation">
                <MainBtnNav />
            </div>
            <div className="centerNavigation">
                <HeaderBar headerTitle="Notifications"/>
                <NotificationsHeader />
            </div>
            <div className="rightNavigation">
                <SearchBar />
                <TrendsForYouContainer />
                <WhoToFollow />
            </div>
        </div>
    )
}

export default Notifications
