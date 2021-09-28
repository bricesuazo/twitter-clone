
import MainBtnNav from '../Components/MainBtnNav';
import SearchBar from '../Components/SearchBar';
import HeaderBar from '../Components/HeaderBar';

const Messages = () => {
    return (
        <div className="MessagesPage">
            <div className="leftNavigation">
                <MainBtnNav />
            </div>
            <div style={{ flex: 2}} className="centerNavigation">
                <HeaderBar headerTitle="Messages"/>
            </div>
            <div style={{ flex: 3}} className="rightNavigation">
                <SearchBar />
            </div>
        </div>
    )
}

export default Messages
