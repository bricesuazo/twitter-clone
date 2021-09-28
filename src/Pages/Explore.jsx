import '../App.css';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MainBtnNav from '../Components/MainBtnNav';
import SearchBar from '../Components/SearchBar';
import WhoToFollow from '../Components/WhoToFollow';
import ExploreHeaderImg from '../Components/ExploreHeaderImg';
import ExploreTrendsForYouContainer from '../Components/ExploreTrendsForYouContainer';
import ExploreWhatsHappening from '../Components/ExploreWhatsHappening';


const Explore = () => {
    return (
        <div className="ExplorePage">
            <div className="leftNavigation">
                <MainBtnNav />
            </div>
            <div className="centerNavigation">
                <div className="stickySearchBarWrapper">
                    <SearchBar className="searchBar"/>
                    <div className="SettingsOutlinedIcon">
                        <SettingsOutlinedIcon />
                    </div>
                </div>
                <ExploreHeaderImg />
                <ExploreTrendsForYouContainer />
                <ExploreWhatsHappening />
            </div>
            <div className="rightNavigationWrapper">
                <div className="rightNavigation">
                    <WhoToFollow />
                </div>

            </div>
        </div>
    )
}

export default Explore
