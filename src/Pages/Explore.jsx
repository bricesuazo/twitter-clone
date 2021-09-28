import React from 'react'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MainBtnNav from '../Components/MainBtnNav';
import SearchBar from '../Components/SearchBar';
import TrendsForYouContainer from '../Components/TrendsForYouContainer';
import WhoToFollow from '../Components/WhoToFollow';


const Explore = () => {
    return (
        <div className="HomePage">
            <div className="leftNavigation">
                <MainBtnNav />
            </div>
            <div className="centerNavigation">
                <div className="searchBarWrapper">
                    <SearchBar className="searchBar"/>
                    <SettingsOutlinedIcon />
                </div>
                
            </div>
            <div className="rightNavigation">
                <TrendsForYouContainer />
                <WhoToFollow />
            </div>
        </div>
    )
}

export default Explore
