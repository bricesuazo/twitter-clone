import MainBtnNav from '../Components/MainBtnNav';
import SearchBar from '../Components/SearchBar';
import HeaderBar from '../Components/HeaderBar';
import TrendsForYouContainer from '../Components/TrendsForYouContainer';
import WhoToFollow from '../Components/WhoToFollow';

const Lists = () => {
    return (
        <div className="ListsPage">
            <div className="leftNavigation">
                <MainBtnNav />
            </div>
            <div className="centerNavigation">
                <HeaderBar headerTitle="Lists"/>
            </div>
            <div className="rightNavigation">
                <SearchBar />
                <TrendsForYouContainer />
                <WhoToFollow />
            </div>
        </div>
    )
}

export default Lists
