import MainBtnNav from '../Components/MainBtnNav';
import SearchBar from '../Components/SearchBar';
import HeaderBar from '../Components/HeaderBar';
import TrendsForYouContainer from '../Components/TrendsForYouContainer';
import WhoToFollow from '../Components/WhoToFollow';

const Bookmarks = () => {
    return (
        <div className="ListsPage">
            <div className="leftNavigation">
                <MainBtnNav />
            </div>
            <div className="centerNavigation">
                <HeaderBar headerTitle="Bookmarks"/>
            </div>
            <div className="rightNavigation">
                <SearchBar />
                <TrendsForYouContainer />
                <WhoToFollow />
            </div>
        </div>
    )
}

export default Bookmarks