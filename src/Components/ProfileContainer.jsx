import './profileContainer.css';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

const ProfileContainer = () => {
    return (
        <div className="ProfileContainer">
            <div className="profileContainerWrapper">
                <img src="https://pbs.twimg.com/profile_banners/1363534550123483136/1625560137/600x200" alt="" className="profileHeaderImg"/>
                
                <div className="profileTopWrapper">
                    <div className="profileImgWrapper">
                        <img src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/213619586_4176300955791613_9078051559512662378_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeECrdsuPio5ZSicjcrp5KM28s0D1TAKwgjyzQPVMArCCGiV5qCddGCQ1dtYAvyx3YRGMt3bIvAs6y6GRnD-LT85&_nc_ohc=87-LACrqpi4AX9l5Tj8&_nc_ht=scontent.fmnl4-2.fna&oh=bbed85e22f04113d816446bac78a9e70&oe=6178F38E" alt="" className="profilePictureImg"/>
                    </div>
                    <div className="profileInfoWrapper">
                        <div className="editProfileBtn">Edit profile</div>
                    </div>
                    <div className="profileNameWrapper">
                        <h3 className="profileName">Brice Suazo</h3>
                        <span className="profileUsername">@brice_suazo</span>
                    </div>
                    
                    <span className="profileBio">Motion Designer | Video Editor | TV Broadcaster |<br/>Computer Science Student |<br/><br/><br/>contact@bricesuazo.com</span>


                    <div className="profileOtherInfo">
                        <div className="profileOtherInfoCountry">
                            <RoomOutlinedIcon />
                            <span className="profileOtherInfoCountryName">Philippines</span>
                        </div>
                        <div className="profileOtherInfoWebsite">
                            <LinkOutlinedIcon />
                            <a href="https://www.bricesuazo.com" target="_blank" rel="noreferrer" className="profileOtherInfoWebsiteLink">bricesuazo.com</a>
                        </div>
                        <div className="profileOtherInfoJoined">
                            <DateRangeOutlinedIcon />
                            <span className="profileOtherInfoJoinedDate">Joined February 2021</span>
                        </div>
                    </div>

                    <div className="profileFollowsWrapper">
                        <div className="profileFollowing">
                            <span className="profileFollowingNumber">82</span>
                            <span className="profileFollowingText"> Followers</span>
                        </div>
                        <div className="profileFollowers">
                            <span className="profileFollowersNumber">25</span>
                            <span className="profileFollowersText"> Followers</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileContainer
