import React from 'react'
import MainBtnNav from '../Components/MainBtnNav';
import SearchBar from '../Components/SearchBar';
import HeaderBar from '../Components/HeaderBar';
import TrendsForYouContainer from '../Components/TrendsForYouContainer';
import WhoToFollow from '../Components/WhoToFollow';
import NotificationsAllContainer from '../Components/NotificationsAllContainer';

const Notifications = () => {
    return (
        <div className="NotificationsPage">
            <div className="leftNavigation">
                <MainBtnNav />
            </div>
            <div className="centerNavigation">
                <HeaderBar headerTitle="Notifications"/>
                <NotificationsAllContainer />
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
