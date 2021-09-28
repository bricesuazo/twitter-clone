import MainBtnNav from '../Components/MainBtnNav';
import SearchBar from '../Components/SearchBar';
import HeaderBar from '../Components/HeaderBar';
import TrendsForYouContainer from '../Components/TrendsForYouContainer';
import WhoToFollow from '../Components/WhoToFollow';
import UserUploadedPhotos from '../Components/UserUploadedPhotos';
import ProfileContainer from '../Components/ProfileContainer';

const Profile = () => {
    return (
        <div className="ProfilePage">
            <div className="leftNavigation">
                <MainBtnNav />
            </div>
            <div className="centerNavigation">
                <HeaderBar />
                <ProfileContainer />
            </div>
            <div className="rightNavigation">
                <SearchBar />
                <UserUploadedPhotos />
                <WhoToFollow />
                <TrendsForYouContainer />
            </div>
        </div>
    )
}

export default Profile
