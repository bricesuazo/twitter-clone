import React from 'react'
import MainBtnNav from '../Components/MainBtnNav';
import SearchBar from '../Components/SearchBar';
import HeaderBar from '../Components/HeaderBar';
import TrendsForYouContainer from '../Components/TrendsForYouContainer';
import WhoToFollow from '../Components/WhoToFollow';
import NotificationsContainer from '../Components/NotificationsContainer';

const Notifications = () => {
    return (
        <div className="NotificationsPage">
            <div className="leftNavigation">
                <MainBtnNav />
            </div>
            <div className="centerNavigation">
                <HeaderBar headerTitle="Notifications"/>
                <NotificationsContainer />
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
